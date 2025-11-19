import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Code, Key, Zap } from "lucide-react";

const Documentacao = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Documentação
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Guias completos para integrar nossas APIs em seus projetos
              </p>
            </div>

            <Tabs defaultValue="start" className="animate-fade-in">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="start">Início Rápido</TabsTrigger>
                <TabsTrigger value="auth">Autenticação</TabsTrigger>
                <TabsTrigger value="examples">Exemplos</TabsTrigger>
                <TabsTrigger value="reference">Referência</TabsTrigger>
              </TabsList>

              <TabsContent value="start" className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
                      <Zap className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Começando</h2>
                      <p className="text-muted-foreground">
                        Configure sua primeira integração em minutos
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">1. Obtenha sua API Key</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Acesse o painel de controle e gere uma nova chave de API
                      </p>
                      <code className="block bg-muted p-3 rounded text-sm">
                        API_KEY=sk_live_xxxxxxxxxxxxxxxxxx
                      </code>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">2. Faça sua primeira requisição</h3>
                      <code className="block bg-muted p-3 rounded text-sm overflow-x-auto">
                        {`curl -X POST https://api.solutionsmateus.com/v1/automation \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"action": "test"}'`}
                      </code>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">3. Resposta esperada</h3>
                      <code className="block bg-muted p-3 rounded text-sm">
                        {`{
  "status": "success",
  "message": "Automation triggered successfully"
}`}
                      </code>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="auth" className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
                      <Key className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Autenticação</h2>
                      <p className="text-muted-foreground">
                        Todas as requisições requerem autenticação via API Key
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Header de Autenticação</h3>
                      <code className="block bg-muted p-3 rounded text-sm">
                        Authorization: Bearer YOUR_API_KEY
                      </code>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Tipos de Chaves</h3>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        <li><code>sk_test_</code> - Ambiente de testes</li>
                        <li><code>sk_live_</code> - Ambiente de produção</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="examples" className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
                      <Code className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Exemplos de Código</h2>
                      <p className="text-muted-foreground">
                        Exemplos práticos em diferentes linguagens
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-2">JavaScript / Node.js</h3>
                      <code className="block bg-muted p-3 rounded text-sm overflow-x-auto">
                        {`const response = await fetch('https://api.solutionsmateus.com/v1/automation', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ action: 'test' })
});
const data = await response.json();`}
                      </code>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Python</h3>
                      <code className="block bg-muted p-3 rounded text-sm overflow-x-auto">
                        {`import requests

response = requests.post(
    'https://api.solutionsmateus.com/v1/automation',
    headers={'Authorization': 'Bearer YOUR_API_KEY'},
    json={'action': 'test'}
)
data = response.json()`}
                      </code>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="reference" className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
                      <BookOpen className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Referência da API</h2>
                      <p className="text-muted-foreground">
                        Documentação completa de todos os endpoints disponíveis
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-semibold mb-1">POST /v1/automation</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Executa uma automação configurada
                      </p>
                      <div className="text-sm">
                        <span className="font-medium">Parâmetros:</span>
                        <ul className="list-disc list-inside text-muted-foreground ml-2 mt-1">
                          <li><code>action</code> (string, obrigatório)</li>
                          <li><code>parameters</code> (object, opcional)</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-secondary pl-4">
                      <h3 className="font-semibold mb-1">GET /v1/automation/status</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Verifica o status de uma automação
                      </p>
                      <div className="text-sm">
                        <span className="font-medium">Parâmetros:</span>
                        <ul className="list-disc list-inside text-muted-foreground ml-2 mt-1">
                          <li><code>id</code> (string, obrigatório)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Documentacao;
