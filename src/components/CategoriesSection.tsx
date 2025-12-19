import { Link } from "react-router-dom";
import { ArrowRight, Palette, Gift, Flag } from "lucide-react";

const categories = [
  {
    title: "Decoração",
    description: "Adesivos, quadros e objetos personalizados para transformar ambientes.",
    icon: Palette,
    href: "/decoracao",
    color: "bg-accent/10 text-accent",
  },
  {
    title: "Brindes",
    description: "Eletrônicos, camisetas e itens promocionais para sua marca.",
    icon: Gift,
    href: "/brindes",
    color: "bg-accent/10 text-accent",
  },
  {
    title: "PDV",
    description: "Banners, wind banners e materiais para ponto de venda.",
    icon: Flag,
    href: "/pdv",
    color: "bg-accent/10 text-accent",
  },
];

export function CategoriesSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Nossas Categorias
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em produtos personalizados para todas as suas necessidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.title}
              to={category.href}
              className="group p-8 bg-card rounded-xl border border-border hover:border-accent transition-all duration-300 hover:shadow-xl"
            >
              <div className={`w-14 h-14 rounded-lg ${category.color} flex items-center justify-center mb-6`}>
                <category.icon className="h-7 w-7" />
              </div>
              
              <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-accent transition-colors">
                {category.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {category.description}
              </p>
              
              <span className="inline-flex items-center text-sm font-medium text-accent">
                Ver produtos
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
