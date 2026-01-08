import { GraduationCap, GitBranch, Lightbulb, Shield, Map } from "lucide-react";

const motivos = [
  {
    icon: GraduationCap,
    title: "Formação Aplicada",
    description: "Talentos capacitados em projetos reais",
  },
  {
    icon: GitBranch,
    title: "Pipeline de Inovação",
    description: "Fluxo contínuo de novas soluções",
  },
  {
    icon: Lightbulb,
    title: "Soluções Sob Medida",
    description: "Desenvolvimento customizado para sua empresa",
  },
  {
    icon: Shield,
    title: "Governança",
    description: "Processos estruturados e transparentes",
  },
  {
    icon: Map,
    title: "Roadmap 3-6-12",
    description: "Planejamento estratégico de curto, médio e longo prazo",
  },
];

export function SomaiInvestir() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que Investir Agora?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Benefícios claros para empresas que apostam na inovação colaborativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {motivos.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="text-center p-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
