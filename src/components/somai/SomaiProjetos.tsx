import { Search, Box, TestTube, RefreshCw, Presentation, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const fases = [
  { icon: Search, name: "Descoberta" },
  { icon: Box, name: "Protótipo" },
  { icon: TestTube, name: "Testes" },
  { icon: RefreshCw, name: "Iteração" },
];

export function SomaiProjetos() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projetos que Saem do Papel
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Da ideia à implementação, com demos mensais e vitrine de 3-6 cases.
          </p>
        </div>

        {/* Phases */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {fases.map(({ icon: Icon, name }, index) => (
            <div key={name} className="flex items-center">
              <div className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-xl">
                <Icon className="h-5 w-5 text-primary" />
                <span className="font-medium text-foreground">{name}</span>
              </div>
              {index < fases.length - 1 && (
                <span className="mx-2 text-muted-foreground hidden sm:block">→</span>
              )}
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
          <div className="flex items-center gap-4 bg-secondary rounded-xl p-4">
            <Presentation className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-semibold text-foreground">Demos Mensais</h3>
              <p className="text-sm text-muted-foreground">Apresentações regulares de progresso</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-secondary rounded-xl p-4">
            <Trophy className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-semibold text-foreground">Vitrine de Cases</h3>
              <p className="text-sm text-muted-foreground">3-6 projetos em destaque</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link to="/projetos-parceiros">
              Ver Projetos Parceiros
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
