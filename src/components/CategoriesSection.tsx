import { Link } from "react-router-dom";
import categoryDecoracaoImg from "@/assets/category-decoracao.jpg";
import categoryBrindesImg from "@/assets/category-brindes.jpg";
import categoryPdvImg from "@/assets/category-pdv.jpg";

const categories = [
  {
    title: "Decoração",
    description: "Adesivos, quadros e objetos personalizados para transformar ambientes.",
    image: categoryDecoracaoImg,
    href: "/decoracao",
  },
  {
    title: "Brindes",
    description: "Eletrônicos, camisetas e itens promocionais para sua marca.",
    image: categoryBrindesImg,
    href: "/brindes",
  },
  {
    title: "PDV",
    description: "Banners, wind banners e materiais para ponto de venda.",
    image: categoryPdvImg,
    href: "/pdv",
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
              className="group overflow-hidden bg-card rounded-xl border border-border hover:border-accent transition-all duration-300 hover:shadow-xl"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-accent transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
