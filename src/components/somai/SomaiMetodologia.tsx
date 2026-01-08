import { ArrowRight } from "lucide-react";

const steps = [
  "Triagem",
  "Primeira Mentoria",
  "Conexão com Centros/Hub",
  "Análise",
  "Ações Especializadas",
  "Conexão com o Mercado",
];

const trilhas = [
  "Jurídico/Financeiro",
  "Plano de Negócios/Pitch",
  "Exposição de Tecnologia",
  "Clube de Negócios",
];

const outcomes = [
  "Embrionar",
  "Transferir Tecnologia",
  "Startup",
];

export function SomaiMetodologia() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Metodologia SOMAi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Um fluxo estruturado para transformar ideias em resultados concretos.
          </p>
        </div>

        {/* Main Flow */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center">
                <div className="px-4 py-2 md:px-6 md:py-3 bg-card border border-border rounded-xl text-sm md:text-base font-medium text-foreground">
                  {step}
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="h-5 w-5 text-primary mx-1 md:mx-2 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Trilhas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-6 border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Trilhas Complementares
            </h3>
            <div className="flex flex-wrap gap-2">
              {trilhas.map((trilha) => (
                <span
                  key={trilha}
                  className="px-3 py-1 bg-secondary text-sm text-muted-foreground rounded-full"
                >
                  {trilha}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Outcomes
            </h3>
            <div className="flex flex-wrap gap-2">
              {outcomes.map((outcome) => (
                <span
                  key={outcome}
                  className="px-4 py-2 bg-primary/10 text-primary font-medium rounded-full"
                >
                  {outcome}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
