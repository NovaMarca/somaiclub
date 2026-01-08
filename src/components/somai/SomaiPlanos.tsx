import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const planos = [
  { name: "Bronze", highlight: false },
  { name: "Prata", highlight: false },
  { name: "Ouro", highlight: true },
];

const beneficios = [
  {
    name: "Acesso a eventos",
    bronze: true,
    prata: true,
    ouro: true,
  },
  {
    name: "Logo no site",
    bronze: true,
    prata: true,
    ouro: true,
  },
  {
    name: "Menção na revista",
    bronze: "Citação simples",
    prata: "1/4 página",
    ouro: "Matéria 1-2 páginas",
  },
  {
    name: "Site da revista",
    bronze: false,
    prata: "Menção",
    ouro: "Destaque com link",
  },
  {
    name: "Rádio Comunicativa FM",
    bronze: "1 inserção/dia - 3 meses",
    prata: "1 inserção/dia - 3 meses",
    ouro: "3 inserções/dia - 6 meses",
  },
  {
    name: "Luminoso",
    bronze: false,
    prata: "Pequeno",
    ouro: "Grande em destaque",
  },
  {
    name: "Podcast FalaSanca",
    bronze: false,
    prata: false,
    ouro: "Participação em episódio",
  },
  {
    name: "Descontos",
    bronze: "5%",
    prata: "10%",
    ouro: "15%",
  },
  {
    name: "Mentorias prioritárias",
    bronze: false,
    prata: false,
    ouro: true,
  },
];

function renderCell(value: boolean | string) {
  if (value === true) return <Check className="h-5 w-5 text-primary mx-auto" />;
  if (value === false) return <X className="h-5 w-5 text-muted-foreground mx-auto" />;
  return <span className="text-sm text-foreground">{value}</span>;
}

export function SomaiPlanos() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Planos de Patrocínio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para sua empresa e faça parte do ecossistema SOMAi.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full max-w-5xl mx-auto">
            <thead>
              <tr>
                <th className="text-left p-4 text-foreground font-semibold">Benefício</th>
                {planos.map((plano) => (
                  <th
                    key={plano.name}
                    className={`p-4 text-center ${
                      plano.highlight
                        ? "bg-primary text-primary-foreground rounded-t-xl"
                        : "text-foreground"
                    }`}
                  >
                    <span className="text-lg font-bold">{plano.name}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {beneficios.map((beneficio, index) => (
                <tr
                  key={beneficio.name}
                  className={index % 2 === 0 ? "bg-secondary" : "bg-background"}
                >
                  <td className="p-4 text-foreground font-medium">{beneficio.name}</td>
                  <td className="p-4 text-center">{renderCell(beneficio.bronze)}</td>
                  <td className="p-4 text-center">{renderCell(beneficio.prata)}</td>
                  <td
                    className={`p-4 text-center ${
                      planos[2].highlight ? "bg-primary/5" : ""
                    }`}
                  >
                    {renderCell(beneficio.ouro)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-8">
          <Button asChild size="lg">
            <Link to="/contato?assunto=Interesse%20em%20patrocínio">
              Quero ser patrocinador
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
