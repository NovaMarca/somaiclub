import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Transforme suas ideias em{" "}
            <span className="text-accent">produtos únicos</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl">
            Especialistas em personalização de produtos para decoração, brindes corporativos e materiais de ponto de venda. Qualidade e criatividade em cada impressão.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link to="/contato">
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-accent" />
    </section>
  );
}
