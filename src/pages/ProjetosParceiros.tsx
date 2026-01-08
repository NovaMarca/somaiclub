import { useEffect, useState } from "react";
import { SomaiHeader } from "@/components/somai/SomaiHeader";
import { SomaiFooter } from "@/components/somai/SomaiFooter";
import { ProjectCard } from "@/components/somai/ProjectCard";
import { ShopifyProduct, fetchProducts } from "@/lib/shopify";

export default function ProjetosParceiros() {
  const [projects, setProjects] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProducts(20, 'product_type:"Projeto Parceiro"');
        setProjects(data);
      } catch (error) {
        console.error("Error loading projects:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  return (
    <div className="min-h-screen flex flex-col somai-theme">
      <SomaiHeader />
      <main className="flex-1 pt-16">
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-foreground mb-4">Projetos Parceiros</h1>
            <p className="text-muted-foreground">Conheça os projetos inovadores do ecossistema SOMAi</p>
          </div>
        </section>
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(3)].map((_, i) => (<div key={i} className="animate-pulse"><div className="aspect-video bg-muted rounded-lg mb-4" /><div className="h-6 bg-muted rounded w-3/4 mb-2" /></div>))}
              </div>
            ) : projects.length === 0 ? (
              <p className="text-center text-muted-foreground py-12">Nenhum projeto encontrado.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (<ProjectCard key={project.node.id} product={project} />))}
              </div>
            )}
          </div>
        </section>
      </main>
      <SomaiFooter />
    </div>
  );
}
