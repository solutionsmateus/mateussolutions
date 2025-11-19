import { Code2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Solutions Mateus
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              Transformando ideias em soluções tecnológicas inovadoras desde 2014.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Serviços</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Desenvolvimento Web</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Backend & APIs</li>
              <li className="hover:text-primary transition-colors cursor-pointer">UI/UX Design</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Consultoria</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Empresa</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Sobre</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Contato</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Carreiras</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Solutions Mateus. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
