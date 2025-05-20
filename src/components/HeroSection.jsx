import { ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { QuoteWidget } from "@/components/QuoteWidget";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>{" "}
            <span className="text-primary">
              <TypeAnimation
                sequence={[
                  "Mathusan Sharma",
                  5000,   
                  "",        
                  500,       
                ]}
                wrapper="span"
                speed={10}
                repeat={Infinity}
              />
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Aiyadurai Iyer
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I am a business informatics student at the Bern University of Applied Sciences and work at Swisscom as a DevOps Engineer.
          </p>

          <QuoteWidget />

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#about" className="cosmic-button">
              View More About me
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
