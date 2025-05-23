import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-4 px-4 bg-card relative border-t border-border mt-8 pt-4 flex flex-wrap justify-between items-center">
      <div className="flex items-center space-x-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Mathusan Sharma Aiyadurai Iyer. All
          rights reserved.
        </p>
      </div>

      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/30 hover:bg-primary/20 text-primary transition-colors"
        aria-label="Back to Top"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
