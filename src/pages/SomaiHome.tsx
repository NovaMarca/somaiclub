import { SomaiHeader } from "@/components/somai/SomaiHeader";
import { SomaiFooter } from "@/components/somai/SomaiFooter";
import { SomaiHero } from "@/components/somai/SomaiHero";
import { SomaiOQueE } from "@/components/somai/SomaiOQueE";
import { SomaiPilares } from "@/components/somai/SomaiPilares";
import { SomaiMetodologia } from "@/components/somai/SomaiMetodologia";
import { SomaiSquads } from "@/components/somai/SomaiSquads";
import { SomaiTrilhas } from "@/components/somai/SomaiTrilhas";
import { SomaiEspecialistas } from "@/components/somai/SomaiEspecialistas";
import { SomaiParcerias } from "@/components/somai/SomaiParcerias";
import { SomaiCacauCafe } from "@/components/somai/SomaiCacauCafe";
import { SomaiFormacao } from "@/components/somai/SomaiFormacao";
import { SomaiProjetos } from "@/components/somai/SomaiProjetos";
import { SomaiInvestir } from "@/components/somai/SomaiInvestir";
import { SomaiPlanos } from "@/components/somai/SomaiPlanos";

export default function SomaiHome() {
  return (
    <div className="min-h-screen flex flex-col somai-theme">
      <SomaiHeader />
      <main className="flex-1 pt-16">
        <SomaiHero />
        <SomaiOQueE />
        <SomaiPilares />
        <SomaiMetodologia />
        <SomaiSquads />
        <SomaiTrilhas />
        <SomaiEspecialistas />
        <SomaiParcerias />
        <SomaiCacauCafe />
        <SomaiFormacao />
        <SomaiProjetos />
        <SomaiInvestir />
        <SomaiPlanos />
      </main>
      <SomaiFooter />
    </div>
  );
}
