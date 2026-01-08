import { Coffee, FlaskConical, Briefcase, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function SomaiCacauCafe() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-card to-secondary rounded-3xl p-8 md:p-12 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <Coffee className="h-10 w-10 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                CacauCafé
              </h2>
            </div>

            <p className="text-xl text-muted-foreground mb-8">
              Café, Ciência & Negócios
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                <span className="text-foreground">Encontros Presenciais</span>
              </div>
              <div className="flex items-center gap-3">
                <FlaskConical className="h-6 w-6 text-primary" />
                <span className="text-foreground">Sprints Criativos</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="h-6 w-6 text-primary" />
                <span className="text-foreground">Demonstrações e Testes</span>
              </div>
            </div>

            <Button asChild size="lg">
              <Link to="/produtos-parceiros?categoria=cacaucafe">
                Conhecer Produtos CacauCafé
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
