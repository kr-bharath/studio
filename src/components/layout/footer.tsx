import Link from 'next/link';
import { Mail, Linkedin, Github, Copyright } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card text-card-foreground py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">K R Bharath</h3>
            <p className="text-sm text-muted-foreground">Data Scientist & Automation Expert</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#home" className="text-sm hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-sm hover:text-primary transition-colors">About</Link></li>
              <li><Link href="#projects" className="text-sm hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="#contact" className="text-sm hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="mailto:krbharath0592@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
              <a href="https://linkedin.com/in/k-r-bharath" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              {/* Assuming a GitHub link might be useful, can be removed if not needed */}
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p className="flex items-center">
            <Copyright className="h-4 w-4 mr-1" /> {currentYear} K R Bharath. All rights reserved.
          </p>
          <p>Designed with <span className="text-primary">&hearts;</span> using Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
