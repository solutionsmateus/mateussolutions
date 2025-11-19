import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X, Code2 } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Início" },
    { to: "/apis", label: "APIs" },
    { to: "/documentacao", label: "Documentação" },
    { to: "/sobre", label: "Sobre" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 text-xl font-bold">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Code2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Solutions Mateus
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-muted-foreground hover:text-foreground transition-colors"
                activeClassName="text-primary font-semibold"
              >
                {link.label}
              </NavLink>
            ))}
            <Button className="bg-gradient-primary text-primary-foreground shadow-cobalt hover:shadow-xl hover:scale-105 transition-all duration-300">
              Contato
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  activeClassName="text-primary font-semibold"
                >
                  {link.label}
                </NavLink>
              ))}
              <Button className="bg-gradient-primary text-primary-foreground shadow-cobalt w-full">
                Contato
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
