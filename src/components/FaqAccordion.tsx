"use client";

import { useState } from "react";

export type FaqItem = {
  question: string;
  answer: string;
};

function PlusIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col border-b border-portra-white/10">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="border-t border-portra-white/10">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-6 py-6 text-left"
            >
              <span className="font-mono text-eyebrow text-portra-taupe">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 text-lg font-medium sm:text-xl">
                {item.question}
              </span>
              <span
                aria-hidden
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-portra-white/20 transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                <PlusIcon />
              </span>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-6 pl-[3.25rem] text-sm leading-relaxed text-portra-neutral sm:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
