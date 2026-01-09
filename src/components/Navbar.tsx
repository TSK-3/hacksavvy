import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useRegisterDialog } from "@/hooks/use-register-dialog";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Themes", href: "/themes" },
  { label: "FAQs", href: "/#faqs" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { onOpen } = useRegisterDialog();

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] group">
      {/* 100px Interaction Zone */}
      <div className="absolute top-0 left-0 right-0 h-[100px] pointer-events-auto" />
      
      {/* Navbar Overlay */}
      <nav className="relative transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 transition-all duration-300 ease-out bg-background/80 backdrop-blur-xl border-b border-border h-16 pointer-events-auto shadow-lg">
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-center relative h-full">
            {/* Centered Nav Links */}
            <div className="hidden md:flex items-center gap-12">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium focus:outline-none focus:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Absolute Right Action Button */}
            <div className="absolute right-0 hidden md:block">
              <Button variant="hero" size="sm" onClick={onOpen}>
                Register Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground p-2 absolute right-0 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Nav */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-border animate-fade-in bg-background/95 backdrop-blur-xl">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <Button variant="hero" size="sm" onClick={() => { setIsOpen(false); onOpen(); }}>
                  Register Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};
