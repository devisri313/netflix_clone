import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { GoPlus } from "react-icons/go";

function Questions() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const questionAns = [
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more - on thousands of internet-connected devices.",
    },
    {
      question: "Why Netflix is important?",
      answer:
        "Netflix is important because it offers convenient, on-demand entertainment with a wide variety of movies, shows, and originals.",
    },
    {
      question: "Where can I watch?",
      answer:
        "You can watch Netflix on the official app or by visiting Netflix.com on any device. It’s available on phones, laptops, smart TVs, and streaming devices for easy access anytime.",
    },
    {
      question: "What can I watch on Netflix?",
      answer:
        "You can watch a wide range of movies, TV shows, documentaries, and Netflix Originals. From action and drama to comedy, anime, and kids’ content, Netflix has something for everyone.",
    },
  ];

  return (
    <div className="py-10  text-white">
      <div className="text-2xl md:text-4xl font-bold mb-5">
        Frequently Asked Questions
      </div>

      <div className="space-y-3">
        {questionAns.map((item, index) => (
          <div key={index}>
            <div
              onClick={() => handleToggle(index)}
              className="cursor-pointer bg-[#393939] p-5 flex justify-between items-center px-6 md:px-10 rounded-md"
            >
              <div className="text-lg md:text-2xl font-medium">
                {item.question}
              </div>
              <div className="text-3xl md:text-4xl">
                {activeIndex === index ? <RxCross2 /> : <GoPlus />}
              </div>
            </div>

            <div
              className={`bg-[#393939] overflow-hidden transition-all duration-500 px-6 md:px-10 text-base md:text-xl mt-0.5 ${
                activeIndex === index ? "max-h-[500px] py-5" : "max-h-0 py-0"
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Questions;
