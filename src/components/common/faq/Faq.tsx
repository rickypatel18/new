import { useState } from "react";
import { FaPlus } from "react-icons/fa";

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
  {
    id: 9,
    question: "Can you help with website or app maintenance and updates?",
    answer:
      "Yes, we can assist with ongoing maintenance and updates as needed.",
  },
  {
    id: 10,
    question: "Can you help with website or app maintenance and updates?",
    answer:
      "Yes, we can assist with ongoing maintenance and updates as needed.",
  },
  {
    id: 11,
    question: "Can you help with website or app maintenance and updates?",
    answer:
      "Yes, we can assist with ongoing maintenance and updates as needed.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const splitIndex = Math.ceil(faqData.length / 2); // Calculate split index

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto bg-transparent ">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {/* First Column: First half of items */}
        <div className="">
          {faqData.slice(0, splitIndex).map((item) => (
            <div key={item.id} className="border border-[var(--color-border)]">
              <div
                className="flex justify-between items-start py-5 lg:py-6 xl:py-7 px-4 md:px-6 lg:px-10 xl:px-12 gap-4 md:gap-5 lg:gap-6 xl:gap-7 cursor-pointer"
                onClick={() => toggleFaq(item.id)}
              >
                {/* Index Box */}
                <div
                  className={`bg-gradient-to-t from-transparent to-[#242424] h-[58px] w-[58px] lg:h-[70px] lg:w-[70px] flex justify-center items-center xl:h-[88px] xl:w-[88px] rounded-[10px] text-3xl ${
                    openIndex === item.id
                      ? "text-[var(--color-text-secondary)]"
                      : " "
                  }`}
                >
                  {String(item.id).padStart(2, "0")}
                </div>

                <div className=" lg:pt-7 xl:pt-9 flex flex-col flex-1">
                  {/* Question Row */}
                  <div
                    className={`flex justify-between text-xl items-center ${
                      openIndex === item.id
                        ? "text-[var(--color-text-secondary)]"
                        : ""
                    }`}
                  >
                    <div className="flex-1 ">{item.question}</div>
                    <span
                      className={`transition-transform duration-300 ${
                        openIndex === item.id ? "rotate-45" : ""
                      }`}
                    >
                      <FaPlus />
                    </span>
                  </div>
                  <div>
                    {openIndex === item.id && (
                      <div className="mt-4 h3-p bg-trasparent rounded-lg">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Column: Remaining items */}
        <div className="">
          {faqData.slice(splitIndex).map((item) => (
            <div key={item.id} className="border border-[var(--color-border)]">
              <div
                className="flex justify-between items-start py-5 lg:py-6 xl:py-7  px-4 md:px-6 lg:px-10 xl:px-12 gap-4 md:gap-5 lg:gap-6 xl:gap-7 cursor-pointer"
                onClick={() => toggleFaq(item.id)}
              >
                {/* Index Box */}
                <div
                  className={`bg-gradient-to-t from-transparent to-[#242424] h-[58px] w-[58px] lg:h-[70px] lg:w-[70px] flex justify-center items-center xl:h-[88px] xl:w-[88px] rounded-[10px] text-3xl ${
                    openIndex === item.id
                      ? "text-[var(--color-text-secondary)]"
                      : " "
                  }`}
                >
                  {String(item.id).padStart(2, "0")}
                </div>

                <div className=" lg:pt-7 xl:pt-9 flex flex-col flex-1">
                  {/* Question Row */}
                  <div
                    className={`flex justify-between text-xl items-center ${
                      openIndex === item.id
                        ? "text-[var(--color-text-secondary)]"
                        : ""
                    }`}
                  >
                    <div className="flex-1 ">{item.question}</div>
                    <span
                      className={`transition-transform duration-300 ${
                        openIndex === item.id ? "rotate-45" : ""
                      }`}
                    >
                      <FaPlus />
                    </span>
                  </div>
                  <div>
                    {openIndex === item.id && (
                      <div className="mt-4 h3-p bg-trasparent rounded-lg">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
