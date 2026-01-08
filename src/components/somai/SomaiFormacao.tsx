import { Code, Brain, Palette, Shield } from "lucide-react";

const trilhas = [
  { icon: Code, name: "Web", description: "Desenvolvimento frontend e backend" },
  { icon: Brain, name: "IA", description: "Machine learning e automação" },
  { icon: Palette, name: "Design", description: "UI/UX e design de produto" },
  { icon: Shield, name: "Cibersegurança", description: "Proteção e segurança digital" },
];

export function SomaiFormacao() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trilhas de Formação
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Aprender fazendo — formação prática em tecnologias essenciais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {trilhas.map(({ icon: Icon, name, description }) => (
            <div
              key={name}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{name}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
