"use client";

import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: "What is EventSphere?",
      answer:
        "EventSphere connects people who want to attend events together.",
    },
    {
      question: "How does EventSphere work?",
      answer:
        "Create or join events and connect with people who share interests.",
    },
    {
      question: "How do I stay safe?",
      answer:
        "Verified profiles, moderation, and secure messaging ensure safety.",
    },
    {
      question: "Can I create my own events?",
      answer:
        "Yes, you can create events and invite others easily.",
    },
    {
      question: "What if I cancel?",
      answer:
        "Participants are notified immediately.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-14">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-primary font-medium mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 font-secondary">
          Find answers to common questions
        </p>
      </div>

      <div className="space-y-3">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={clsx(
                "rounded-2xl border bg-white transition-shadow",
                isOpen
                  ? "border-primary/40 shadow-md"
                  : "border-gray-200"
              )}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="text-lg font-medium">
                  {item.question}
                </span>

                <ChevronDown
                  className={clsx(
                    "w-5 h-5 text-primary transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                />
              </button>

              {/* Instant layout, animated content */}
              <div className={clsx(isOpen ? "block" : "hidden")}>
                <div
                  className={clsx(
                    "px-6 pb-5 text-gray-600",
                    "animate-fadeSlide"
                  )}
                >
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
