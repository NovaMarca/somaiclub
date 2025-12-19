import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductGrid } from "@/components/ProductGrid";
import { ShopifyProduct, fetchProducts } from "@/lib/shopify";
import { Palette, Sofa, Frame, Home } from "lucide-react";

const subcategories = [
  { icon: Sofa, title: "Adesivos para Móveis", description: "Renove seus móveis com estilo" },
  { icon: Home, title: "Adesivos para Cômodos", description: "Transforme qualquer ambiente" },
  { icon: Frame, title: "Quadros Decorativos", description: "Arte personalizada para suas paredes" },
  { icon: Palette, title: "Objetos Domésticos", description: "Itens únicos para sua casa" },
];

export default function DecoracaoPage() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts(20, "tag:decoracao OR product_type:Decoração");
        setProducts(data);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Decoração</h1>
              <p className="text-lg text-primary-foreground/80">
                Transforme seus ambientes com produtos personalizados de alta qualidade. 
                Dos adesivos que renovam móveis aos quadros que dão vida às paredes, 
                temos a solução perfeita para cada espaço.
              </p>
            </div>
          </div>
        </section>

        {/* Subcategories */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {subcategories.map((sub) => (
                <div key={sub.title} className="p-6 bg-card rounded-xl border border-border hover:border-accent transition-colors">
                  <sub.icon className="h-8 w-8 text-accent mb-4" />
                  <h3 className="font-semibold text-card-foreground mb-2">{sub.title}</h3>
                  <p className="text-sm text-muted-foreground">{sub.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground mb-8">Produtos de Decoração</h2>
            
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="aspect-square bg-muted rounded-lg mb-4" />
                    <div className="h-4 bg-muted rounded w-3/4 mb-2" />
                    <div className="h-4 bg-muted rounded w-1/2" />
                  </div>
                ))}
              </div>
            ) : (
              <ProductGrid 
                products={products} 
                emptyMessage="Novos produtos de decoração em breve! Entre em contato para um orçamento personalizado."
              />
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
