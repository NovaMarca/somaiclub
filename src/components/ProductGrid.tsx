import { ShopifyProduct } from "@/lib/shopify";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: ShopifyProduct[];
  emptyMessage?: string;
}

export function ProductGrid({ products, emptyMessage = "Nenhum produto encontrado" }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-muted-foreground text-lg">{emptyMessage}</p>
        <p className="text-sm text-muted-foreground mt-2">
          Novos produtos em breve!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.node.id} product={product} />
      ))}
    </div>
  );
}
