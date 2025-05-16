import { ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "DevOps Engineer II - Swisscom Schweiz AG",
        description:
          "In my DevOps Engineer role, I performed various tasks and worked in endpoint security.",
        image: "https://www.netapp.com/de/media/Swisscom_Horizontal_RGB_Colour_Navy_tcm24-73403.png?v=128762",
        tags: ["Dec 2022 - Today", "Career"],
    },
    {
      id: 2,
      title: "BSc. Business IT",
      description: "Berner Fachhochschule",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNlLWS9QvXZ_4Ecgk1Ch4s-QfRpfth9Z7uhg&s",
      tags: ["Feb 2024 - Sep 2025", "Education"],
    },
    {
      id: 3,
      title: "Dipl. Business IT",
      description:
        "Ipso! Höhere Fachschule",
      image: "https://anavant.ch/wp-content/uploads/2024/03/ipso_Bildung_Logo_Farbig-1-768x166.png",
      tags: ["Nov 2020 - Nov 2023", "Education"],
    },
    {
        id: 4,
        title: "DevOps Engineer I - Swisscom Schweiz AG",
        description:
          "In my DevOps Engineer role, I performed various tasks and worked as application manager.",
        image: "https://www.netapp.com/de/media/Swisscom_Horizontal_RGB_Colour_Navy_tcm24-73403.png?v=128762",
        tags: ["Oct 2021 - Dec 2022", "Career"],
      },
      {
        id: 5,
        title: "ICT Starter - Swisscom Schweiz AG",
        description:
          "In my role as ICT Starter, I took on various tasks and worked in the Printing Services division.",
        image: "https://www.netapp.com/de/media/Swisscom_Horizontal_RGB_Colour_Navy_tcm24-73403.png?v=128762",
        tags: ["Aug 2020 - Sep 2021", "Career"],
      },
      {
        id: 6,
        title: "Apprenticeship as a computer scientist EFZ",
        description:
          "I completed my apprenticeship as a computer scientist EFZ at Swisscom.",
        image: "https://www.netapp.com/de/media/Swisscom_Horizontal_RGB_Colour_Navy_tcm24-73403.png?v=128762",
        tags: ["Aug 2016 - Jul 2020", "Career"],
      },
      {
        id: 7,
        title: "Computer scientist EFZ",
        description:
          "GIBB Bern",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Gewerblich_Industrielle_Berufsschule_Bern_logo.svg",
        tags: ["Aug 2016 - Jul 2020", "Education"],
      },
      {
        id: 8,
        title: "Apprenticeship as an IT technician EBA",
        description:
          "I completed my apprenticeship as a IT technician EBA at Swisscom.",
        image: "https://www.netapp.com/de/media/Swisscom_Horizontal_RGB_Colour_Navy_tcm24-73403.png?v=128762",
        tags: ["Aug 2014 - Jul 2016", "Career"],
      },
      {
        id: 9,
        title: "IT technician EBA",
        description:
          "GIBB Bern",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Gewerblich_Industrielle_Berufsschule_Bern_logo.svg",
        tags: ["Aug 2014 - Jul 2016", "Education"],
      },
  ];
  
  export const CareerEducationSection = () => {
    return (
      <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {" "}
            My Career & Education<span className="text-primary"> Path </span>
          </h2>
  
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here I show you my career & education path
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, key) => (
              <div
                key={key}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
  
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
  
                  <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
          <p className="text-muted-foreground mb-12  mx-auto">
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