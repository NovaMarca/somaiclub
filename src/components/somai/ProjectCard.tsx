import { Link } from "react-router-dom";
import { ShopifyProduct } from "@/lib/shopify";
import { Button } from "@/components/ui/button";
import { ExternalLink, MessageCircle } from "lucide-react";

interface ProjectCardProps {
  product: ShopifyProduct;
}

export function ProjectCard({ product }: ProjectCardProps) {
  const { node } = product;
  const image = node.images.edges[0]?.node;
  const encodedTitle = encodeURIComponent(node.title);

  return (
    <div className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
      <div className="aspect-video overflow-hidden bg-muted">
        {image ? (
          <img
            src={image.url}
            alt={image.altText || node.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            Sem imagem
          </div>
        )}
      </div>

      <div className="p-5 space-y-4">
        <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
          {node.title}
        </h3>

        {node.description && (
          <p className="text-sm text-muted-foreground line-clamp-3">
            {node.description}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-2">
          <Button asChild className="flex-1">
            <Link to={`/projeto/${node.handle}`}>
              <ExternalLink className="h-4 w-4 mr-2" />
              Conhecer mais
            </Link>
          </Button>
          <Button variant="outline" asChild className="flex-1">
            <Link to={`/contato?assunto=${encodedTitle}`}>
              <MessageCircle className="h-4 w-4 mr-2" />
              Entrar em contato
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
