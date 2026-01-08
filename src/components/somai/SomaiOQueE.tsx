import { Building2, GraduationCap, Users } from "lucide-react";

export function SomaiOQueE() {
  const connections = [
    { icon: Building2, label: "Empresas" },
    { icon: GraduationCap, label: "Pesquisadores" },
    { icon: Users, label: "Jovens Talentos" },
  ];

  const methods = [
    "Ambientes colaborativos",
    "Experiências práticas",
    "Projetos reais",
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              O que é o SOMAi?
            </h2>
            <p className="text-xl text-muted-foreground">
              Um ecossistema inovador que conecta:
            </p>
          </div>

          {/* Connections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {connections.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-colors"
              >
                <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground">{label}</h3>
              </div>
            ))}
          </div>

          {/* Methods */}
          <div className="space-y-4">
            <p className="text-xl text-muted-foreground">Por meio de:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {methods.map((method) => (
                <span
                  key={method}
                  className="px-6 py-3 bg-primary/10 text-primary rounded-full text-lg font-medium"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
