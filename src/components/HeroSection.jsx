import { ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [quote, setQuote] = useState(null);
  const [key, setKey] = useState(0); 

  const fetchQuote = async () => {
    try {
      const res = await fetch("https://dummyjson.com/quotes/random");
      const data = await res.json();
      setQuote(data);
      setKey(prev => prev + 1);
    } catch (err) {
      console.error("Quote fetch failed", err);
    }
  };

  useEffect(() => {
    fetchQuote();

    const interval = setInterval(() => {
      fetchQuote(); 
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>{" "}
            <span className="text-primary">
              Mathusan Sharma
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Aiyadurai Iyer
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I am a business informatics student at the Bern University of Applied Sciences and work at Swisscom as a DevOps Engineer.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#about" className="cosmic-button">
              View More About me
            </a>
          </div>
          {quote && (
            <div className="text-md italic text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
              <TypeAnimation
                key={key}
                sequence={[
                  `“${quote.quote}” — ${quote.author}`,
                  15000,
                  "",    
                ]}
                speed={40}
                repeat={1}
                wrapper="p"
              />
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
