

import localFont from "next/font/local";



const helveticalight = localFont({
  src: "../fonts/HelveticaNeueLight.otf",
});



export default function ServicesPage() {
  const servicesLeft = [
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
    },
  ];

  const servicesRight = [
    {
      id: "A",
      title: "Marketing Strategy",
      description:
        "Creating comprehensive marketing plans that align brand values with market demands for measurable growth.",
      tags: [
        "Campaign Planning",
        "Content Marketing",
        "Social Media Strategy",
        "Email Marketing",
        "Analytics & Reporting",
      ],
    },
    {
      id: "B",
      title: "Product Innovation",
      description:
        "Collaborating with teams to develop breakthrough products from concept to launch with user-centered design.",
      tags: [
        "Idea Workshops",
        "Prototyping",
        "User Testing",
        "Market Validation",
        "Launch Strategy",
      ],
    },
    {
      id: "C",
      title: "Creative Direction",
      description:
        "Guiding creative vision across media to ensure cohesive storytelling and brand consistency.",
      tags: [
        "Art Direction",
        "Photography",
        "Videography",
        "Copywriting",
        "Campaign Design",
      ],
    },
  ];

  return (
    <div
      className={`${helveticalight.className} text-black rounded-[24px] p-10 pb-20 `}
    >
      {/* Header */}
     

      {/* Two-column rows */}
      <div className="grid grid-cols-2 gap-25  pr-10  ">
        {/* Left Column */}
        <div className="space-y-12  ">
          {servicesLeft.map((service) => (
            <div key={service.id} className="space-y-6 ">
              <h2 className="text-3xl font-semibold">{service.title}</h2>
              <p className="text-base text-black max-w-xl">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 border-b pb-5 border-gray-300">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#222222]  text-white text-xs px-3 py-1 rounded-full whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-12 ">
          {servicesRight.map((service) => (
            <div key={service.id} className="space-y-6">
              <h2 className="text-3xl font-semibold">{service.title}</h2>
              <p className="text-base text-black max-w-xl">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 border-b pb-5 border-gray-300">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#222222] text-white text-xs px-3 py-1 rounded-full whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
