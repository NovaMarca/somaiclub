import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductGrid } from "@/components/ProductGrid";
import { ShopifyProduct, fetchProducts } from "@/lib/shopify";
import { Headphones, Coffee, Shirt, PenTool, Gift } from "lucide-react";

const subcategories = [
  { icon: Headphones, title: "Eletrônicos Personalizados", description: "Tech com a sua marca" },
  { icon: Coffee, title: "Comestíveis Personalizados", description: "Cestas e kits corporativos" },
  { icon: Shirt, title: "Camisetas Personalizadas", description: "Vestuário promocional" },
  { icon: PenTool, title: "Porta-canetas", description: "Organização com estilo" },
  { icon: Gift, title: "Outros Brindes", description: "Itens promocionais diversos" },
];

export default function BrindesPage() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts(20, "tag:brindes OR product_type:Brindes");
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Brindes</h1>
              <p className="text-lg text-primary-foreground/80">
                Fortaleça o relacionamento com clientes e colaboradores através de brindes 
                personalizados de qualidade. De eletrônicos a cestas corporativas, 
                temos a solução ideal para suas ações de marketing e endomarketing.
              </p>
            </div>
          </div>
        </section>

        {/* Subcategories */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {subcategories.map((sub) => (
                <div key={sub.title} className="p-6 bg-card rounded-xl border border-border hover:border-accent transition-colors">
                  <sub.icon className="h-8 w-8 text-accent mb-4" />
                  <h3 className="font-semibold text-card-foreground mb-2 text-sm">{sub.title}</h3>
                  <p className="text-xs text-muted-foreground">{sub.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground mb-8">Brindes Corporativos</h2>
            
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
                emptyMessage="Novos brindes em breve! Entre em contato para um orçamento personalizado."
              />
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
