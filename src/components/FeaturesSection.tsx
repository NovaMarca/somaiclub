import { CheckCircle, Truck, Headphones, Palette } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Personalização Total",
    description: "Cada produto é único e feito sob medida para suas necessidades.",
  },
  {
    icon: CheckCircle,
    title: "Alta Qualidade",
    description: "Materiais premium e acabamento impecável em todas as impressões.",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Prazos competitivos para que seu projeto não pare.",
  },
  {
    icon: Headphones,
    title: "Suporte Dedicado",
    description: "Equipe especializada para auxiliar em todos os projetos.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que escolher a Neopress?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Compromisso com qualidade, inovação e satisfação do cliente em cada projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center p-6 rounded-xl hover:bg-secondary transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-7 w-7 text-accent" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
