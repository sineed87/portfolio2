import Image from "next/image";

import { Roboto } from "@next/font/google";



const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function ServicesPage() {
  const services = [
    {
      id: "01",
      title: "Brand Strategy",
      description:
        "Helping others uncover their brand's purpose and uniqueness – and the game plan to deliver it to win their customers' devotion.",
      tags: [
        "Research & Insights",
        "Brand Strategy",
        "Competitive Study",
        "Voice & Tone",
        "Naming & Copywriting",
        "Workshops",
      ],
      image: "/images/p4.png",
    },
    {
      id: "02",
      title: "Digital Design",
      description:
        "Designing engaging digital experiences that combine brand strategy and creativity with UX insights to deliver functionality and ease of use.",
      tags: [
        "Identity Design",
        "Wireframing",
        "UI",
        "UX",
        "Web Design",
        "Product Design",
        "Digital Design",
      ],
      image: "/images/p5.jpg",
    },
    {
      id: "03",
      title: "Development",
      description:
        "Building digital products that combine design, technology, and business strategy to deliver seamless user experiences.",
      tags: [
        "Frontend Development",
        "SEO",
        "Motion",
        "Animation",
        "WebGL",
        "CMS Development",
        "Databases",
      ],
      image: "/images/photo2.jpg",
    },
  ];

  return (
    <div className={`${roboto.className} bg-[#121212] rounded-[24px] text-white p-10 `}
     >
      {/* Header */}
      <div className="pl-20 space-y-4 mb-12 ">
        <h3 className="uppercase text-sm text-gray-400">Services</h3>
        <h1 className="text-5xl font-bold max-w-5xl leading-tight">
          Evolving with every brief and built for impact, my process
          spans design, development, and brand strategy—aligning
          vision with execution to bring clarity and edge to every
          project.
        </h1>
      </div>

      {/* Service Rows with dividers */}
      <div className="pl-20 pr-10 divide-y  divide-[#333]">
        {services.map((service) => (
          <div key={service.id} className="py-12 flex flex-row gap-12 items-start">
            {/* Left: Text */}
            <div className="flex-1 space-y-6">
              <p className="text-gray-400 text-sm">{service.id}</p>
              <h2 className="text-3xl font-semibold">{service.title}</h2>
              <p className="text-base text-gray-300 max-w-xl">{service.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#2a2a2a] text-xs px-3 py-1 rounded-full whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <div className="w-[300px] shrink-0 outline-1 rounded-[16px]">
              <Image
                src={service.image}
                alt={service.title}
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
