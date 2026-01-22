import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SomaiHome from "./pages/SomaiHome";
import SomaiShop from "./pages/SomaiShop";
import NeopressHome from "./pages/NeopressHome";
import Decoracao from "./pages/Decoracao";
import Brindes from "./pages/Brindes";
import PDV from "./pages/PDV";
import Contato from "./pages/Contato";
import Product from "./pages/Product";
import ProdutosParceiros from "./pages/ProdutosParceiros";
import ProdutosTecnologicos from "./pages/ProdutosTecnologicos";
import ProjetosParceiros from "./pages/ProjetosParceiros";
import ProjetoParceiro from "./pages/ProjetoParceiro";
import SobreSomai from "./pages/SobreSomai";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SomaiHome />} />
          <Route path="/somai-shop" element={<SomaiShop />} />
          <Route path="/neopress" element={<NeopressHome />} />
          <Route path="/decoracao" element={<Decoracao />} />
          <Route path="/brindes" element={<Brindes />} />
          <Route path="/pdv" element={<PDV />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/produto/:handle" element={<Product />} />
          <Route path="/produtos-parceiros" element={<ProdutosParceiros />} />
          <Route path="/produtos-tecnologicos" element={<ProdutosTecnologicos />} />
          <Route path="/projetos-parceiros" element={<ProjetosParceiros />} />
          <Route path="/projeto/:handle" element={<ProjetoParceiro />} />
          <Route path="/sobre-somai" element={<SobreSomai />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
