import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Target, Users, Lightbulb, Shield } from "lucide-react";

const Sobre = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Fornecer soluções de automação robustas e escaláveis que transformam a maneira como empresas operam e crescem.",
    },
    {
      icon: Users,
      title: "Equipe",
      description: "Profissionais especializados em automação, APIs e integração de sistemas com anos de experiência no mercado.",
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Desenvolvimento contínuo de novas funcionalidades e tecnologias para manter nossos clientes sempre à frente.",
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Proteção máxima dos dados com criptografia de ponta a ponta e conformidade com padrões internacionais.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Sobre Nós
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Somos especialistas em criar soluções de automação que simplificam processos complexos
              </p>
            </div>

            <div className="mb-16 animate-fade-in">
              <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-2">
                <h2 className="text-3xl font-bold mb-6 text-center">Nossa História</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    A Solutions Mateus nasceu da necessidade de democratizar o acesso a tecnologias de automação avançadas. 
                    Percebemos que muitas empresas enfrentavam desafios com processos manuais repetitivos e integração 
                    entre sistemas diferentes.
                  </p>
                  <p>
                    Hoje, oferecemos um conjunto robusto de APIs que permitem a qualquer empresa, independente do tamanho, 
                    automatizar seus processos e integrar suas ferramentas de forma simples e eficiente.
                  </p>
                  <p>
                    Nossa plataforma já processou milhões de requisições e ajuda centenas de empresas a economizar tempo 
                    e recursos, focando no que realmente importa: crescimento e inovação.
                  </p>
                </div>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-16 animate-fade-in">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-elegant transition-all duration-300 hover:scale-105 border-2 hover:border-primary/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
                      <value.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center animate-fade-in">
              <Card className="p-8 md:p-12 bg-gradient-to-br from-secondary/5 to-primary/5 border-2">
                <h2 className="text-3xl font-bold mb-4">Pronto para Começar?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Entre em contato conosco e descubra como nossas APIs de automação podem transformar seu negócio
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:contato@solutionsmateus.com"
                    className="inline-flex items-center justify-center px-8 py-3 bg-gradient-primary text-primary-foreground rounded-md shadow-cobalt hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium"
                  >
                    contato@solutionsmateus.com
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sobre;
