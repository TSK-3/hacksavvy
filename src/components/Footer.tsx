import { Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  const sponsors = [
    "Tech Corp", "Innovation Labs", "Future Systems", "Global Tech", 
    "Creative Solutions", "NextGen AI", "Digital Dynamics", "Quantum Quest"
  ];

  return (
    <footer className="py-12 border-t border-border bg-card/50">
      <div className="container mx-auto px-4">
        {/* Sponsors Marquee */}
        <div className="mb-12 overflow-hidden border-y border-border/50 py-6">
          <h3 className="text-center text-sm font-heading font-semibold uppercase tracking-[0.2em] text-muted-foreground/60 mb-6">
            Sponsors
          </h3>
          <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <span 
                key={`${sponsor}-${index}`} 
                className="text-2xl font-heading font-bold text-muted-foreground/30 hover:text-primary transition-colors cursor-default"
              >
                {sponsor}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">About</a>
              </li>
              <li>
                <a href="#themes" className="hover:text-primary transition-colors">Themes</a>
              </li>
              <li>
                <a href="/teams" className="hover:text-primary transition-colors">Teams</a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-primary transition-colors">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-primary">Contact Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>MGIT, Gandipet, Hyderabad - 500075</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:hacksavvy@mgit.ac.in" className="hover:text-primary transition-colors">
                  hacksavvy@mgit.ac.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 HACKSAVVY. All rights reserved.</p>
          <p>
            Organized by{" "}
            <a
              href="https://mgit.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              MGIT, Hyderabad
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
