import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SomaiHeader } from "@/components/somai/SomaiHeader";
import { SomaiFooter } from "@/components/somai/SomaiFooter";
import { ProductGrid } from "@/components/ProductGrid";
import { ShopifyProduct, fetchProducts } from "@/lib/shopify";

export default function ProdutosParceiros() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const categoria = searchParams.get("categoria");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const query = categoria ? `tag:${categoria} AND product_type:"Produto Parceiro"` : 'product_type:"Produto Parceiro"';
        const data = await fetchProducts(20, query);
        setProducts(data);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [categoria]);

  return (
    <div className="min-h-screen flex flex-col somai-theme">
      <SomaiHeader />
      <main className="flex-1 pt-16">
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-foreground mb-4">Produtos Parceiros</h1>
            <p className="text-muted-foreground">{categoria ? `Categoria: ${categoria}` : "Produtos de parceiros do ecossistema SOMAi"}</p>
          </div>
        </section>
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (<div key={i} className="animate-pulse"><div className="aspect-square bg-muted rounded-lg mb-4" /><div className="h-4 bg-muted rounded w-3/4 mb-2" /></div>))}
              </div>
            ) : (
              <ProductGrid products={products} emptyMessage="Nenhum produto parceiro encontrado." />
            )}
          </div>
        </section>
      </main>
      <SomaiFooter />
    </div>
  );
}
