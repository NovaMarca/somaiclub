import { BookOpen, Bot, Lightbulb, Key } from "lucide-react";

const pilares = [
  {
    icon: BookOpen,
    title: "Educação Viva",
    description: "Aprendizado prático através de projetos reais e mentorias especializadas.",
  },
  {
    icon: Bot,
    title: "IA como Ferramenta",
    description: "Inteligência artificial integrada para potencializar resultados.",
  },
  {
    icon: Lightbulb,
    title: "Inovação com Impacto",
    description: "Soluções que geram valor real para empresas e sociedade.",
  },
  {
    icon: Key,
    title: "Acesso e Oportunidades Reais",
    description: "Conexões diretas com o mercado e oportunidades concretas.",
  },
];

export function SomaiPilares() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pilares do SOMAi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Os fundamentos que guiam nossa metodologia e garantem resultados transformadores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pilares.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
