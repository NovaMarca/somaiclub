import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">NEOPRESS</h3>
            <p className="text-sm text-primary-foreground/80">
              Especialistas em produtos personalizados e impressos para decoração, brindes corporativos e materiais de PDV.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/decoracao" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Decoração
                </Link>
              </li>
              <li>
                <Link to="/brindes" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Brindes
                </Link>
              </li>
              <li>
                <Link to="/pdv" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  PDV
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold">Categorias</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">Adesivos Personalizados</li>
              <li className="text-primary-foreground/80">Quadros Decorativos</li>
              <li className="text-primary-foreground/80">Eletrônicos Personalizados</li>
              <li className="text-primary-foreground/80">Wind Banners</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                contato@neopress.com.br
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                (11) 1234-5678
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5" />
                São Paulo, SP - Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Neopress. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
