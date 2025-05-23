import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-4 px-4 bg-card relative border-t border-border mt-8 pt-4 flex flex-wrap justify-between items-center">
      {/* Linke Seite: Icons + Text */}
      <div className="flex items-center space-x-4">
        <a
          href="https://www.linkedin.com/in/mathusansharma/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5 hover:text-primary transition-colors" />
        </a>
        <a
          href="https://github.com/Mathu145"
          target="_blank"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5 hover:text-primary transition-colors" />
        </a>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Mathusan Sharma Aiyadurai Iyer. All
          rights reserved.
        </p>
      </div>

      {/* Rechte Seite: Scroll to Top */}
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        aria-label="Back to Top"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
