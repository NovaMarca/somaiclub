import { Link } from "react-router-dom";
import { SomaiHeader } from "@/components/somai/SomaiHeader";
import { SomaiFooter } from "@/components/somai/SomaiFooter";
import { ShoppingBag, Cpu, Printer, Mail, Lightbulb } from "lucide-react";

const shopCategories = [
  {
    title: "Produtos Parceiros",
    description: "Produtos exclusivos de nossos parceiros do ecossistema SOMAi",
    icon: ShoppingBag,
    href: "/produtos-parceiros",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Projetos Parceiros",
    description: "Conheça projetos inovadores desenvolvidos no ecossistema SOMAi",
    icon: Lightbulb,
    href: "/projetos-parceiros",
    color: "from-amber-500 to-yellow-600",
  },
  {
    title: "Produtos Tecnológicos",
    description: "Soluções tecnológicas inovadoras desenvolvidas em nossos squads",
    icon: Cpu,
    href: "/produtos-tecnologicos",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "NeoPress",
    description: "Comunicação visual, brindes personalizados e materiais para PDV",
    icon: Printer,
    href: "/neopress",
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "Contato",
    description: "Entre em contato para orçamentos e informações personalizadas",
    icon: Mail,
    href: "/contato",
    color: "from-orange-500 to-red-600",
  },
];

export default function SomaiShop() {
  return (
    <div className="min-h-screen flex flex-col somai-theme">
      <SomaiHeader />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-background via-somai-dark to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                SOMAi <span className="text-primary">Shop</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Explore nosso ecossistema de produtos e soluções. De inovações tecnológicas 
                a produtos parceiros e comunicação visual personalizada.
              </p>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {shopCategories.map((category) => (
                <Link
                  key={category.title}
                  to={category.href}
                  className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6`}>
                      <category.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {category.title}
                    </h2>
                    
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                    
                    <div className="mt-6 flex items-center text-primary font-medium">
                      Explorar
                      <svg
                        className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SomaiFooter />
    </div>
  );
}
