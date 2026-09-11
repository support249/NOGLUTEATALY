export type PostBlock =
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[]; style: "bullet" | "check" | "cross" };

function normalizeParagraphs(text: string) {
  return text
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\s+/g, " ").trim())
    .filter(Boolean);
}

function isDayHeading(text: string) {
  return /^Day \d+:\s*.+/i.test(text);
}

function isSubheading(text: string) {
  const t = text.trim();
  if (t.length > 70) return false;
  if (
    /^(Recommended stops|Safe options nearby|Explore|Tip|Here you can|Avoid these|Here are my top tips)$/i.test(
      t.replace(/:$/, "").trim(),
    )
  ) {
    return true;
  }
  return /:$/.test(t) && t.split(/\s+/).length <= 8;
}

function isSectionHeading(text: string) {
  const t = text.trim();
  if (isDayHeading(t)) return true;
  if (/^Final Thoughts$/i.test(t)) return true;
  if (t.length > 130 || t.startsWith("✔")) return false;

  if (t.endsWith("?")) {
    if (/^(You might|If you’re|Where can I)/i.test(t)) return false;
    return t.length < 110;
  }

  if (/^[A-Z][^?.]{1,75}: [A-Za-z0-9“]/.test(t) && t.length < 110) {
    return true;
  }

  if (t.endsWith(".") || t.endsWith(",")) return false;

  const words = t.split(/\s+/);
  if (words.length < 3 || words.length > 14) return false;

  const skipStarts =
    /^(Yes|No|This|That|These|It|We|They|You|I|Many|Some|Rome is|Italy has|In Rome|If it|Start your|Here you|Supermarkets|Even in|The Vatican|Areas like|Pantha Rei|New Food|NaturaSì|Celiachiamo|Mama Eat|Gelato|Planning a)/i;
  if (skipStarts.test(t)) return false;

  const major = words.filter(
    (w) => !/^(a|an|the|for|to|in|of|and|or|&|near|with)$/i.test(w),
  );
  if (major.length < 2) return false;

  const capped = major.filter((w) => /^[A-Z0-9“(]/.test(w)).length;
  return capped / major.length >= 0.8;
}

function iconListItems(text: string, icon: "✔" | "❌"): string[] | null {
  if (!text.includes(icon)) return null;
  const parts = text
    .split(icon)
    .map((s) => s.trim())
    .filter(Boolean);
  return parts.length > 1 ? parts : null;
}

function listItemKind(text: string): "bullet" | "check" | null {
  if (text.startsWith("✔")) return "check";
  if (text.length > 95) return null;
  if (isSectionHeading(text) || isSubheading(text)) return null;
  if (/^[a-z(]/.test(text)) return "bullet";
  if (
    /^[A-Z][^.?!:]{0,60}$/.test(text) &&
    text.split(/\s+/).length <= 6 &&
    !text.includes("(")
  ) {
    return "bullet";
  }
  return null;
}

export function parsePostBody(text: string): PostBlock[] {
  const paragraphs = normalizeParagraphs(text);
  const blocks: PostBlock[] = [];
  let listBuffer: {
    items: string[];
    style: "bullet" | "check" | "cross";
  } | null = null;

  const flushList = () => {
    if (listBuffer && listBuffer.items.length > 0) {
      blocks.push({
        type: "list",
        items: listBuffer.items,
        style: listBuffer.style,
      });
    }
    listBuffer = null;
  };

  for (const paragraph of paragraphs) {
    const crosses = iconListItems(paragraph, "❌");
    if (crosses) {
      flushList();
      blocks.push({ type: "list", items: crosses, style: "cross" });
      continue;
    }

    const checks = iconListItems(paragraph, "✔");
    if (checks) {
      flushList();
      blocks.push({ type: "list", items: checks, style: "check" });
      continue;
    }

    if (isSectionHeading(paragraph)) {
      flushList();
      blocks.push({ type: "heading", text: paragraph });
      continue;
    }

    if (isSubheading(paragraph)) {
      flushList();
      blocks.push({ type: "subheading", text: paragraph.replace(/:$/, "") });
      continue;
    }

    const kind = listItemKind(paragraph);
    if (kind) {
      const item = paragraph.replace(/^✔\s*/, "");
      if (listBuffer && listBuffer.style === kind) {
        listBuffer.items.push(item);
      } else {
        flushList();
        listBuffer = { items: [item], style: kind };
      }
      continue;
    }

    flushList();
    blocks.push({ type: "paragraph", text: paragraph });
  }

  flushList();
  return blocks;
}
