import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function SomaiHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-background via-secondary to-background overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--somai-teal)/0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--somai-blue)/0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo */}
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold text-primary tracking-tight">
              SOMAi <span className="text-muted-foreground text-3xl md:text-4xl">CLUB</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-medium tracking-widest">
              SOLUÇÕES, OPORTUNIDADES, MENTORIA E IA
            </p>
          </div>

          {/* Quote */}
          <blockquote className="text-xl md:text-2xl text-foreground/80 italic max-w-3xl mx-auto">
            "A criatividade não é um fenômeno individual, ela nasce da interação entre pessoas."
          </blockquote>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8"
              asChild
            >
              <Link to="/contato?assunto=Quero%20me%20associar">
                Quero me associar
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 text-lg px-8"
              asChild
            >
              <Link to="/contato?assunto=Quero%20me%20conectar">
                Quero me conectar
              </Link>
            </Button>
            
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
