import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ShoppingCart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CartDrawer } from "@/components/CartDrawer";
import { useCartStore } from "@/stores/cartStore";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navItems = [
  { label: "Início", href: "/" },
  {
    label: "SOMAi Shop",
    href: "/somai-shop",
    children: [
      { label: "Produtos Parceiros", href: "/produtos-parceiros" },
      { label: "Produtos Tecnológicos", href: "/produtos-tecnologicos" },
      { label: "NeoPress", href: "/neopress" },
      { label: "Contato", href: "/contato" },
    ],
  },
  { label: "Sobre o SOMAi", href: "/sobre-somai" },
  { label: "Contato", href: "/contato" },
];

export function SomaiHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">SOMAi</span>
            <span className="text-xs font-medium text-muted-foreground">CLUB</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navItems.map((item) =>
                item.children ? (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuTrigger className="bg-transparent text-foreground hover:text-primary">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-48 gap-1 p-2">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="block px-3 py-2 text-sm font-medium hover:bg-secondary rounded-md"
                            >
                              Ver Todos
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={child.href}
                                className="block px-3 py-2 text-sm hover:bg-secondary rounded-md"
                              >
                                {child.label}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={item.href}
                        className={cn(
                          "px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                          location.pathname === item.href
                            ? "text-primary"
                            : "text-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <CartDrawer />

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <div key={item.label}>
                      <Link
                        to={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "block py-2 text-lg font-medium transition-colors hover:text-primary",
                          location.pathname === item.href
                            ? "text-primary"
                            : "text-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                      {item.children && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="block py-1 text-sm text-muted-foreground hover:text-primary"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
