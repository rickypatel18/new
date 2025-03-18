import React, { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What services does SquareUp provide?",
    answer:
      "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
  },
  {
    id: 2,
    question: "How can SquareUp help my business?",
    answer:
      "We help businesses by providing tailored solutions to improve efficiency and achieve their goals.",
  },
  {
    id: 3,
    question: "What industries does SquareUp work with?",
    answer:
      "SquareUp works with a variety of industries including technology, healthcare, finance, and e-commerce.",
  },
  {
    id: 4,
    question: "How long does it take to complete a project with SquareUp?",
    answer:
      "Project timelines vary based on requirements, but we strive to be as efficient as possible.",
  },
  {
    id: 5,
    question:
      "Do you offer ongoing support and maintenance after the project is completed?",
    answer:
      "Yes, we provide ongoing support and maintenance for all our projects.",
  },
  {
    id: 6,
    question: "Can you work with existing design or development frameworks?",
    answer: "Absolutely! We are flexible and can work with various frameworks.",
  },
  {
    id: 7,
    question: "How involved will I be in the project development process?",
    answer:
      "We encourage client involvement at all stages of the project to ensure your vision is realized.",
  },
  {
    id: 8,
    question: "Can you help with website or app maintenance and updates?",
    answer:
      "Yes, we can assist with ongoing maintenance and updates as needed.",
  },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto bg-transparent ">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {/* First Column: First 4 Items */}
        <div className="">
          {faqData.slice(0, 4).map((item) => (
            <div key={item.id} className="border border-[var(--color-border)]">
              <div
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={() => toggleFaq(item.id)}
              >
                <span className="text-lg font-semibold">
                  {String(item.id).padStart(2, "0")} {item.question}
                </span>
                <span
                  className={`transform transition-transform ${
                    openIndex === item.id ? "rotate-45" : ""
                  }`}
                >
                  &#43;
                </span>
              </div>
              {openIndex === item.id && (
                <div className="p-4 bg-gray-700 rounded-b-lg">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Second Column: Last 4 Items */}
        <div className="">
          {faqData.slice(4, 8).map((item) => (
            <div key={item.id} className="border border-[var(--color-border)]">
              <div
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={() => toggleFaq(item.id)}
              >
                <span className="text-lg font-semibold">
                  {String(item.id).padStart(2, "0")} {item.question}
                </span>
                <span
                  className={`transform transition-transform ${
                    openIndex === item.id ? "rotate-45" : ""
                  }`}
                >
                  &#43;
                </span>
              </div>
              {openIndex === item.id && (
                <div className="p-4 bg-gray-700 rounded-b-lg">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
