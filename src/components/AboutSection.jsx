import { Briefcase } from "lucide-react";
import { User } from "lucide-react";
import { Code } from "lucide-react";
import mypic from "@/img/mypic.png";



export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
             {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 items-center">
              <div className="flex justify-center">
                <div className="responsive-avatar animate-float">
                  <img
                    src={mypic}
                    alt="Portrait"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-10">
            <h3 className="text-2xl font-semibold">
              Passionate Business IT Student
            </h3>

            <p className="text-muted-foreground">
            I am currently completing my BSc. in Business IT at the Bern University of Applied Sciences
            </p>

            <p className="text-muted-foreground">
            I completed an apprenticeship as a computer scientist and currently work at Swisscom as a DevOps Engineer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://1drv.ms/b/c/25aa2b9abe27646f/EQ2pQ1zDRmNKpauRMbAD-SgBNXGI-mh2t5_Z9UpCHeh-kw?e=cO0XHG"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>


          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> EWEB - Web Engineering (FS25)</h4>
                  <p className="text-muted-foreground">
                  I am currently attending a module in web development
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Personal strength</h4>
                  <p className="text-muted-foreground">
                  I am an open-minded person
                  </p>
                </div>
              </div>
            </div>
           
          </div>    
        </div>
        </section>
    );
}; 