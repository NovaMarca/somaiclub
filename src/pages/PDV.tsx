import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductGrid } from "@/components/ProductGrid";
import { ShopifyProduct, fetchProducts } from "@/lib/shopify";
import { Flag, Signpost } from "lucide-react";

const subcategories = [
  { icon: Signpost, title: "Banners Corporativos", description: "Comunicação visual profissional" },
  { icon: Flag, title: "Wind Banners", description: "Destaque em eventos e lojas" },
];

export default function PDVPage() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts(20, "tag:pdv OR product_type:PDV");
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">PDV - Ponto de Venda</h1>
              <p className="text-lg text-primary-foreground/80">
                Maximize a visibilidade da sua marca no ponto de venda. 
                Nossos materiais de comunicação visual são projetados para 
                atrair atenção e converter visitantes em clientes.
              </p>
            </div>
          </div>
        </section>

        {/* Subcategories */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
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
            <h2 className="text-2xl font-bold text-foreground mb-8">Materiais para PDV</h2>
            
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
                emptyMessage="Novos materiais de PDV em breve! Entre em contato para um orçamento personalizado."
              />
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
