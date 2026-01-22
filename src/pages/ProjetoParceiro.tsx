import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { SomaiHeader } from "@/components/somai/SomaiHeader";
import { SomaiFooter } from "@/components/somai/SomaiFooter";
import { Button } from "@/components/ui/button";
import { fetchProductByHandle } from "@/lib/shopify";
import { ArrowLeft, MessageCircle, ExternalLink, Users, Target, Lightbulb } from "lucide-react";

interface ProjectProduct {
  id: string;
  title: string;
  description: string;
  handle: string;
  images: {
    edges: Array<{
      node: {
        url: string;
        altText: string | null;
      };
    }>;
  };
}

export default function ProjetoParceiro() {
  const { handle } = useParams<{ handle: string }>();
  const [project, setProject] = useState<ProjectProduct | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProject = async () => {
      if (!handle) return;
      try {
        const data = await fetchProductByHandle(handle);
        setProject(data);
      } catch (error) {
        console.error("Error loading project:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProject();
  }, [handle]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col somai-theme">
        <SomaiHeader />
        <main className="flex-1 pt-16 flex items-center justify-center">
          <div className="animate-pulse text-muted-foreground">Carregando...</div>
        </main>
        <SomaiFooter />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col somai-theme">
        <SomaiHeader />
        <main className="flex-1 pt-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Projeto não encontrado</h1>
            <Button asChild>
              <Link to="/projetos-parceiros">Voltar aos Projetos</Link>
            </Button>
          </div>
        </main>
        <SomaiFooter />
      </div>
    );
  }

  const image = project.images.edges[0]?.node;
  const encodedTitle = encodeURIComponent(project.title);

  return (
    <div className="min-h-screen flex flex-col somai-theme">
      <SomaiHeader />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-background via-somai-dark to-background">
          <div className="container mx-auto px-4">
            <Link
              to="/projetos-parceiros"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar aos Projetos
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="aspect-video rounded-2xl overflow-hidden bg-card border border-border">
                {image ? (
                  <img
                    src={image.url}
                    alt={image.altText || project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <Lightbulb className="w-16 h-16" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                  <Target className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Projeto Parceiro</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  {project.title}
                </h1>

                {project.description && (
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                )}

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" asChild>
                    <Link to={`/contato?assunto=${encodedTitle}`}>
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Entrar em contato
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="#sobre">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Saber mais
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8">Sobre o Projeto</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="p-6 bg-card border border-border rounded-xl">
                  <Users className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Equipe</h3>
                  <p className="text-sm text-muted-foreground">
                    Desenvolvido por squads multidisciplinares do SOMAi
                  </p>
                </div>
                <div className="p-6 bg-card border border-border rounded-xl">
                  <Target className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Objetivo</h3>
                  <p className="text-sm text-muted-foreground">
                    Resolver problemas reais com soluções inovadoras
                  </p>
                </div>
                <div className="p-6 bg-card border border-border rounded-xl">
                  <Lightbulb className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Inovação</h3>
                  <p className="text-sm text-muted-foreground">
                    Tecnologias de ponta aplicadas a desafios do mercado
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-8 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Interessado neste projeto?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Entre em contato para saber mais sobre como podemos colaborar ou 
                  como este projeto pode beneficiar sua organização.
                </p>
                <Button size="lg" asChild>
                  <Link to={`/contato?assunto=${encodedTitle}`}>
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Fale Conosco
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SomaiFooter />
    </div>
  );
}
