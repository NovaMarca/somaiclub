import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
          Pronto para personalizar?
        </h2>
        <p className="text-accent-foreground/80 max-w-2xl mx-auto mb-8">
          Entre em contato conosco e transforme suas ideias em produtos únicos. 
          Nossa equipe está pronta para atender seu projeto.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link to="/contato">
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          
          <Button 
            asChild 
            size="lg" 
            variant="outline"
            className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10"
          >
            <Link to="/decoracao">
              Explorar Produtos
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
