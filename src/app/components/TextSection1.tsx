import React from "react";

import Contact from "./Contact";
import Contact1 from "./Contact1";
import localFont from 'next/font/local';

// Load custom fonts
const rot = localFont({
  src: '../fonts/rot.otf',
});

const rotnormal = localFont({
  src: '../fonts/rotnormal.otf',
});

const data = [
  {
    title: "Web Design",
    description:
      "We use tools that are of the highest standard of efficiency and provide a real advantage in customer service.",
  },
  {
    title: "Audio Production",
    description:
      "Customers don't want to wait, so we respond quickly to contact and solve problems.",
  },
  {
    title: "Seo Costumatization",
    description:
      "We take over processes that are not cost-effective to manage independently – but we give full control over their course.",
  },
  {
    title: "E-Commerce",
    description:
      "We solve problems, not create new ones. We maintain processes within limits without putting you at risk.",
  },
];

const InfoSection: React.FC = () => {
  return (
    <div className={`${rotnormal.className} bg-[#121212] min-h-screen text-white`}>
      <div className="pt-32 w-[95%] flex flex-col justify-center px-0">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-start w-full border-t border-[#444] last:border-b-0 py-6 px-8"
          >
            <div className="w-[200px] text-left text-lg font-medium text-white">
              {item.title}
            </div>
            <div className="flex-1 text-white pl-8 max-w-[500px]">
              {item.description}
            </div>
          </div>
        ))}
      </div>

      <div className="pr-20">
        <div
          className="flex justify-between items-start w-full border-t border-[#444] last:border-b-0 py-6 px-8"
        ></div>
      </div>

      <div className="flex justify-between">
        <div className="flex items-end justify-between gap-4 pl-7 pb-5">
          <h1 className="pb-2 text-2xl tracking-tighter text-white">
            Ready to build something with us?
          </h1>
          <Contact />

          <div className="pr-7">
            <Contact1 />
          </div>
          <h1 className="pb-2 text-2xl tracking-tighter text-white">
            Let’s start a conversation and bring your vision to life with creativity!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
