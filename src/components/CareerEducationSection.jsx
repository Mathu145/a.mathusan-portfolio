import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils"; 
import swisscomLogo from "@/pics/logos/swisscom.jpg";
import bfhLogo from "@/pics/logos/bfh.png";
import ipsoLogo from "@/pics/logos/ipso.png";
import gibbLogo from "@/pics/logos/gibb.png";

const careereducations = [
    {
        id: 1,
        title: "DevOps Engineer II - Swisscom Schweiz AG",
        description:
          "In my DevOps Engineer role, I performed various tasks and worked in endpoint security.",
        image: swisscomLogo,
        tags: ["Dec 2022 - Today", "Career"],
        type: "career",
    },
    {
      id: 2,
      title: "BSc. Business IT",
      description: "Berner Fachhochschule",
      image: bfhLogo,
      tags: ["Feb 2024 - Sep 2025", "Education"],
      type: "education",
    },
    {
      id: 3,
      title: "Dipl. Business IT",
      description:
        "Ipso! Höhere Fachschule",
      image: ipsoLogo,
      tags: ["Nov 2020 - Nov 2023", "Education"],
      type: "education",
    },
    {
        id: 4,
        title: "DevOps Engineer I - Swisscom Schweiz AG",
        description:
          "In my DevOps Engineer role, I performed various tasks and worked as application manager.",
        image: swisscomLogo,
        tags: ["Oct 2021 - Dec 2022", "Career"],
        type: "career",
      },
      {
        id: 5,
        title: "ICT Starter - Swisscom Schweiz AG",
        description:
          "In my role as ICT Starter, I took on various tasks and worked in the Printing Services division.",
        image: swisscomLogo,
        tags: ["Aug 2020 - Sep 2021", "Career"],
        type: "career",
      },
      {
        id: 6,
        title: "Apprenticeship as a computer scientist EFZ",
        description:
          "I completed my apprenticeship as a computer scientist EFZ at Swisscom.",
        image: swisscomLogo,
        tags: ["Aug 2016 - Jul 2020", "Career"],
        type: "career",
      },
      {
        id: 7,
        title: "Computer scientist EFZ",
        description:
          "GIBB Bern",
        image: gibbLogo,
        tags: ["Aug 2016 - Jul 2020", "Education"],
        type: "education",
      },
      {
        id: 8,
        title: "Apprenticeship as an IT technician EBA",
        description:
          "I completed my apprenticeship as a IT technician EBA at Swisscom.",
        image: swisscomLogo,
        tags: ["Aug 2014 - Jul 2016", "Career"],
        type: "career",
      },
      {
        id: 9,
        title: "IT technician EBA",
        description:
          "GIBB Bern",
        image: gibbLogo,
        tags: ["Aug 2014 - Jul 2016", "Education"],
        type: "education",
      },
  ];

  export const CareerEducationSection = () => {
    const [activeType, setActiveType] = useState("all");
  
    const filteredItems = careereducations.filter(
      (item) => activeType === "all" || item.type === activeType
    );
  
    return (
      <section id="careereducation" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            My Career & Education<span className="text-primary"> Path </span>
          </h2>
  
          <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto">
            Here I show you my career & education path
          </p>
  
          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            {["all", "career", "education"].map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  activeType === type
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground hover:bg-secondary"
                )}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
  
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((careereducation) => (
              <div
                key={careereducation.id}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={careereducation.image}
                    alt={careereducation.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
  
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {careereducation.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
  
                  <h3 className="text-xl font-semibold mb-1">
                    {careereducation.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {careereducation.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
  
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-12 mx-auto">
              For more info about my path you can checkout my LinkedIn profile!
            </p>
            <a
              className="cosmic-button w-fit flex items-center mx-auto gap-2"
              target="_blank"
              href="https://www.linkedin.com/in/mathusansharma/"
            >
              LinkedIn <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    );
  };