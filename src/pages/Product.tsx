import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { SomaiHeader } from "@/components/somai/SomaiHeader";
import { SomaiFooter } from "@/components/somai/SomaiFooter";
import { Button } from "@/components/ui/button";
import { fetchProductByHandle } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { ShoppingCart, ChevronLeft, Minus, Plus } from "lucide-react";
import { toast } from "sonner";

export default function ProductPage() {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    const loadProduct = async () => {
      if (!handle) return;
      try {
        const data = await fetchProductByHandle(handle);
        setProduct(data);
        if (data?.variants?.edges?.[0]) {
          setSelectedVariant(data.variants.edges[0].node);
        }
      } catch (error) {
        console.error("Error loading product:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [handle]);

  const handleAddToCart = () => {
    if (!product || !selectedVariant) return;

    addItem({
      product: { node: product },
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity,
      selectedOptions: selectedVariant.selectedOptions,
    });

    toast.success("Produto adicionado ao carrinho", {
      position: "top-center",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col somai-theme">
        <SomaiHeader />
        <main className="flex-1 pt-16">
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="aspect-square bg-card rounded-2xl animate-pulse border border-border" />
              <div className="space-y-4">
                <div className="h-8 bg-card rounded w-3/4 animate-pulse" />
                <div className="h-6 bg-card rounded w-1/4 animate-pulse" />
                <div className="h-24 bg-card rounded animate-pulse" />
              </div>
            </div>
          </div>
        </main>
        <SomaiFooter />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col somai-theme">
        <SomaiHeader />
        <main className="flex-1 pt-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Produto não encontrado</h1>
            <Button asChild>
              <Link to="/somai-shop">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Voltar à loja
              </Link>
            </Button>
          </div>
        </main>
        <SomaiFooter />
      </div>
    );
  }

  const images = product.images?.edges || [];
  const currentImage = images[selectedImage]?.node;

  return (
    <div className="min-h-screen flex flex-col somai-theme">
      <SomaiHeader />
      
      <main className="flex-1 pt-16 bg-background">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link to="/somai-shop" className="text-muted-foreground hover:text-primary text-sm flex items-center transition-colors">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Voltar à loja
            </Link>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-card rounded-2xl overflow-hidden border border-border">
                {currentImage ? (
                  <img
                    src={currentImage.url}
                    alt={currentImage.altText || product.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    Sem imagem
                  </div>
                )}
              </div>
              
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {images.map((img: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-colors ${
                        selectedImage === index ? "border-primary" : "border-border hover:border-primary/50"
                      }`}
                    >
                      <img
                        src={img.node.url}
                        alt={img.node.altText || `Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{product.title}</h1>
                <p className="text-2xl font-bold text-primary">
                  R$ {parseFloat(selectedVariant?.price?.amount || product.priceRange.minVariantPrice.amount).toFixed(2)}
                </p>
              </div>

              {product.description && (
                <p className="text-muted-foreground">{product.description}</p>
              )}

              {/* Variants */}
              {product.options && product.options.length > 0 && product.options[0].values.length > 1 && (
                <div className="space-y-4">
                  {product.options.map((option: any) => (
                    <div key={option.name}>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        {option.name}
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {option.values.map((value: string) => (
                          <button
                            key={value}
                            className={`px-4 py-2 border rounded-xl text-sm transition-colors ${
                              selectedVariant?.selectedOptions?.some(
                                (opt: any) => opt.name === option.name && opt.value === value
                              )
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-border hover:border-primary/50"
                            }`}
                            onClick={() => {
                              const variant = product.variants.edges.find((v: any) =>
                                v.node.selectedOptions.some(
                                  (opt: any) => opt.name === option.name && opt.value === value
                                )
                              );
                              if (variant) setSelectedVariant(variant.node);
                            }}
                          >
                            {value}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Quantity */}
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Quantidade
                </label>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Add to Cart */}
              <Button
                size="lg"
                className="w-full"
                onClick={handleAddToCart}
                disabled={!selectedVariant?.availableForSale}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                {selectedVariant?.availableForSale ? "Adicionar ao Carrinho" : "Indisponível"}
              </Button>

              {/* Contact CTA */}
              <div className="p-6 bg-card rounded-2xl border border-border">
                <p className="text-sm text-muted-foreground mb-3">
                  Precisa de personalização especial ou quantidade maior?
                </p>
                <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">
                  <Link to="/contato">Solicitar Orçamento</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <SomaiFooter />
    </div>
  );
}
