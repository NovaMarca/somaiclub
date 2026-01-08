import { Link } from "react-router-dom";
import { Mail, Globe } from "lucide-react";

export function SomaiFooter() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-primary">SOMAi</span>
              <span className="text-xs font-medium text-muted-foreground">CLUB</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Soluções, Oportunidades, Mentoria e IA. Conectando empresas, pesquisadores e jovens talentos.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/produtos-parceiros" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Produtos Parceiros
                </Link>
              </li>
              <li>
                <Link to="/projetos-parceiros" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Projetos Parceiros
                </Link>
              </li>
              <li>
                <Link to="/neopress" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  NeoPress
                </Link>
              </li>
            </ul>
          </div>

          {/* Institucional */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Institucional</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre-somai" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sobre o SOMAi
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                somaiclub@somaiclub.com.br
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="h-4 w-4 text-primary" />
                somaiclub.com.br
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SOMAi CLUB. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
