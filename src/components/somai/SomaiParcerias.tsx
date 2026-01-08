import { Briefcase, Users, FlaskConical, Building, Target } from "lucide-react";

const parcerias = [
  { icon: Target, title: "Trilhas Patrocinadas", description: "Programas customizados para sua empresa" },
  { icon: Users, title: "Banco de Talentos", description: "Acesso a profissionais qualificados" },
  { icon: FlaskConical, title: "Squads P&D", description: "Times dedicados à inovação" },
  { icon: Building, title: "In Company", description: "Programas exclusivos para sua equipe" },
  { icon: Briefcase, title: "Captação", description: "Conexão com investidores e oportunidades" },
];

export function SomaiParcerias() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Parcerias com Empresas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Modelos flexíveis para empresas que querem inovar e desenvolver talentos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {parcerias.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors text-center"
            >
              <Icon className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
