import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Database, MessageSquare, Image, FileText, Webhook } from "lucide-react";

const APIs = () => {
  const apis = [
    {
      icon: Zap,
      name: "API de Automação Geral",
      description: "Automatize tarefas repetitivas e fluxos de trabalho complexos",
      status: "Ativa",
      endpoint: "/api/v1/automation",
    },
    {
      icon: Database,
      name: "API de Integração de Dados",
      description: "Sincronize e gerencie dados entre diferentes plataformas",
      status: "Ativa",
      endpoint: "/api/v1/data-integration",
    },
    {
      icon: MessageSquare,
      name: "API de Comunicação",
      description: "Envie notificações, emails e mensagens automaticamente",
      status: "Ativa",
      endpoint: "/api/v1/communication",
    },
    {
      icon: Image,
      name: "API de Processamento de Imagens",
      description: "Manipule, otimize e processe imagens em lote",
      status: "Em Breve",
      endpoint: "/api/v1/images",
    },
    {
      icon: FileText,
      name: "API de Documentos",
      description: "Gere, converta e processe documentos automaticamente",
      status: "Ativa",
      endpoint: "/api/v1/documents",
    },
    {
      icon: Webhook,
      name: "API de Webhooks",
      description: "Configure gatilhos e ações baseadas em eventos",
      status: "Ativa",
      endpoint: "/api/v1/webhooks",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  APIs de Automação
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Poderosas APIs para automatizar seus processos e integrar sistemas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {apis.map((api, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-elegant transition-all duration-300 hover:scale-105 border-2 hover:border-primary/50"
                >
                  <div className="flex flex-col h-full">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                      <api.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-foreground">{api.name}</h3>
                    <p className="text-muted-foreground mb-4 flex-1">{api.description}</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Status:</span>
                        <span
                          className={`text-sm font-medium ${
                            api.status === "Ativa" ? "text-primary" : "text-secondary"
                          }`}
                        >
                          {api.status}
                        </span>
                      </div>
                      <code className="block text-xs bg-muted p-2 rounded text-muted-foreground">
                        {api.endpoint}
                      </code>
                      <Button
                        className="w-full bg-gradient-primary text-primary-foreground shadow-cobalt hover:shadow-xl"
                        disabled={api.status !== "Ativa"}
                      >
                        Ver Documentação
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default APIs;
