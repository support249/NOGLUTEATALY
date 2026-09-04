"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqGroup = {
  title: string;
  items: readonly FaqItem[];
};

type FaqPageClientProps = {
  groups: readonly FaqGroup[];
  disclaimer: string;
  disclaimerTitle: string;
};

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <circle
        cx="11"
        cy="11"
        r="7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M20 20l-3.5-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function groupId(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function itemKey(groupTitle: string, question: string) {
  return `${groupId(groupTitle)}::${question}`;
}

export function FaqPageClient({
  groups,
  disclaimer,
  disclaimerTitle,
}: FaqPageClientProps) {
  const [query, setQuery] = useState("");
  const [activeTopic, setActiveTopic] = useState("all");
  const [scrollToId, setScrollToId] = useState<string | null>(null);
  const [openKey, setOpenKey] = useState<string | null>(null);

  const topics = useMemo(
    () => [
      { id: "all", label: "All Topics" },
      ...groups.map((group) => ({
        id: groupId(group.title),
        label: group.title,
      })),
    ],
    [groups],
  );

  const normalizedQuery = query.trim().toLowerCase();

  // Keep all sections visible so topic clicks can scroll to each one
  const visibleGroups = useMemo(() => {
    return groups
      .map((group) => ({
        ...group,
        items: group.items.filter((item) => {
          if (!normalizedQuery) return true;
          return (
            item.question.toLowerCase().includes(normalizedQuery) ||
            item.answer.toLowerCase().includes(normalizedQuery)
          );
        }),
      }))
      .filter((group) => group.items.length > 0);
  }, [groups, normalizedQuery]);

  useEffect(() => {
    if (!scrollToId) return;

    const frame = window.requestAnimationFrame(() => {
      const target =
        scrollToId === "all"
          ? document.getElementById("faq-top")
          : document.getElementById(scrollToId);

      target?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setScrollToId(null);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [scrollToId, visibleGroups]);

  function selectTopic(id: string) {
    setActiveTopic(id);
    setScrollToId(id);
  }

  function toggleItem(key: string) {
    setOpenKey((current) => (current === key ? null : key));
  }

  return (
    <section className="section faq-page" id="faq-top">
      <div className="wrap faq-page-inner">
        <div className="faq-layout">
          <aside className="faq-sidebar">
            <h1 className="faq-title">Frequently Asked Questions</h1>

            <label className="faq-search">
              <span className="visually-hidden">Search</span>
              <span className="faq-search-icon" aria-hidden="true">
                <SearchIcon />
              </span>
              <input
                type="search"
                placeholder="Search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>

            <nav className="faq-topics" aria-label="FAQ topics">
              {topics.map((topic) => (
                <button
                  key={topic.id}
                  type="button"
                  className={
                    activeTopic === topic.id
                      ? "faq-topic is-active"
                      : "faq-topic"
                  }
                  onClick={() => selectTopic(topic.id)}
                >
                  {topic.label}
                </button>
              ))}
            </nav>

            <div className="faq-support">
              <p className="faq-support-title">Still have questions?</p>
              <p className="faq-support-text">
                If you didn&rsquo;t find your answer, feel free to reach out.
              </p>
              <Link className="faq-support-btn" href="/contact/">
                Contact Support
              </Link>
            </div>
          </aside>

          <div className="faq-main">
            {visibleGroups.map((group) => (
              <section
                className="faq-group"
                key={group.title}
                id={groupId(group.title)}
              >
                <p className="faq-badge">{group.title}</p>
                <div className="faq-list">
                  {group.items.map((item) => {
                    const key = itemKey(group.title, item.question);
                    const isOpen = openKey === key;

                    return (
                      <div
                        className={isOpen ? "faq-item is-open" : "faq-item"}
                        key={item.question}
                      >
                        <button
                          type="button"
                          className="faq-item-trigger"
                          aria-expanded={isOpen}
                          onClick={() => toggleItem(key)}
                        >
                          <span>{item.question}</span>
                          <span className="faq-item-icon" aria-hidden="true">
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>
                        {isOpen ? <p>{item.answer}</p> : null}
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}

            {!visibleGroups.length ? (
              <p className="faq-empty">No matching questions.</p>
            ) : null}
          </div>
        </div>

        <aside className="faq-notice" role="note">
          <h2 className="faq-notice-title">{disclaimerTitle}</h2>
          <p>{disclaimer}</p>
        </aside>
      </div>
    </section>
  );
}
