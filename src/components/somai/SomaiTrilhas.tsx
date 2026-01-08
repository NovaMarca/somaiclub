import { Compass, MessageSquare, GraduationCap, Cpu, Calendar, Gamepad2, Globe } from "lucide-react";

const trilhas = [
  { icon: Compass, name: "Estratégia" },
  { icon: MessageSquare, name: "Comunicação" },
  { icon: GraduationCap, name: "Educação" },
  { icon: Cpu, name: "Tecnologia" },
  { icon: Calendar, name: "Eventos" },
  { icon: Gamepad2, name: "Gamificação" },
  { icon: Globe, name: "Internacionalização" },
];

export function SomaiTrilhas() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trilhas e Temas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Áreas de atuação e especialização dentro do ecossistema SOMAi.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {trilhas.map(({ icon: Icon, name }) => (
            <div
              key={name}
              className="flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors"
            >
              <Icon className="h-6 w-6 text-primary" />
              <span className="font-medium text-foreground">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
