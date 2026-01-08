import { Stethoscope, FileSearch, Home, Mic, Clock, Zap } from "lucide-react";

const services = [
  { icon: Stethoscope, name: "Clínicas Técnicas" },
  { icon: FileSearch, name: "Revisões" },
  { icon: Home, name: "Residências" },
  { icon: Mic, name: "Talks" },
  { icon: Clock, name: "Office Hours" },
  { icon: Zap, name: "Match" },
];

export function SomaiEspecialistas() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Rede de Especialistas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Profissionais experientes disponíveis para orientar e acelerar seu desenvolvimento.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {services.map(({ icon: Icon, name }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-3 p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors"
            >
              <Icon className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium text-foreground text-center">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
