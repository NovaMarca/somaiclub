import { SomaiHeader } from "@/components/somai/SomaiHeader";
import { SomaiFooter } from "@/components/somai/SomaiFooter";
import { Cpu, Rocket, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ProdutosTecnologicos() {
  return (
    <div className="min-h-screen flex flex-col somai-theme">
      <SomaiHeader />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-background via-somai-dark to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Cpu className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Inovação Tecnológica</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Produtos Tecnológicos
              </h1>
              <p className="text-lg text-muted-foreground">
                Soluções inovadoras desenvolvidas em nossos squads, combinando 
                inteligência artificial, pesquisa aplicada e necessidades reais do mercado.
              </p>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
                <Rocket className="w-10 h-10 text-primary" />
              </div>
              
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Em Breve
              </h2>
              
              <p className="text-muted-foreground mb-8">
                Estamos desenvolvendo soluções tecnológicas inovadoras em parceria com 
                nossos squads e empresas. Em breve você poderá explorar produtos de IA, 
                automação, análise de dados e muito mais.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="p-6 bg-card border border-border rounded-xl">
                  <Lightbulb className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Soluções de IA</h3>
                  <p className="text-sm text-muted-foreground">Ferramentas inteligentes para otimizar processos</p>
                </div>
                <div className="p-6 bg-card border border-border rounded-xl">
                  <Cpu className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Automação</h3>
                  <p className="text-sm text-muted-foreground">Sistemas para automatizar tarefas repetitivas</p>
                </div>
                <div className="p-6 bg-card border border-border rounded-xl">
                  <Rocket className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Startups</h3>
                  <p className="text-sm text-muted-foreground">Produtos de startups incubadas no SOMAi</p>
                </div>
              </div>

              <Button asChild size="lg">
                <Link to="/contato?assunto=Produtos%20Tecnológicos">
                  Quero ser avisado
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SomaiFooter />
    </div>
  );
}
