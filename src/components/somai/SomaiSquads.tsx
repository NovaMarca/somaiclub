import { Users, Target, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Papéis Definidos",
    description: "Cada membro tem responsabilidades claras e contribuições específicas.",
  },
  {
    icon: Target,
    title: "Backlog + OKRs",
    description: "Gestão ágil com metas claras e acompanhamento de resultados.",
  },
  {
    icon: MessageCircle,
    title: "Mentorias Sob Demanda",
    description: "Acesso a especialistas quando você mais precisa.",
  },
];

export function SomaiSquads() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como Funcionam os Squads
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Times multidisciplinares focados em entregar resultados reais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="text-center p-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
