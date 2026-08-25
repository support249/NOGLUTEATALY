import fs from "fs";

const posts = JSON.parse(
  fs.readFileSync(
    "C:/Users/Switz 14/.cursor/projects/d-NOGLUTEATALY/agent-tools/1bfb0005-05ac-43dd-8574-6a23fb6e41e5.txt",
    "utf8",
  ),
);

function strip(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<\/h[1-6]>/gi, "\n\n")
    .replace(/<li>/gi, "- ")
    .replace(/<\/li>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, "-")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#038;/g, "&")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim();
}

const out = posts.map((p) => ({
  slug: p.slug,
  title: strip(p.title.rendered),
  date: p.date.slice(0, 10),
  excerpt: strip(p.excerpt.rendered),
  body: strip(p.content.rendered),
}));

fs.writeFileSync("d:/NOGLUTEATALY/scripts/posts.json", JSON.stringify(out, null, 2));
console.log(out.map((p) => `${p.slug} (${p.body.length} chars)`).join("\n"));
