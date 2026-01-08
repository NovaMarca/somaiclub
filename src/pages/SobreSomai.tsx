import { SomaiHeader } from "@/components/somai/SomaiHeader";
import { SomaiFooter } from "@/components/somai/SomaiFooter";
import { SomaiOQueE } from "@/components/somai/SomaiOQueE";
import { SomaiPilares } from "@/components/somai/SomaiPilares";
import { SomaiMetodologia } from "@/components/somai/SomaiMetodologia";

export default function SobreSomai() {
  return (
    <div className="min-h-screen flex flex-col somai-theme">
      <SomaiHeader />
      <main className="flex-1 pt-16">
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-foreground mb-4">Sobre o SOMAi</h1>
            <p className="text-xl text-muted-foreground">Soluções, Oportunidades, Mentoria e IA</p>
          </div>
        </section>
        <SomaiOQueE />
        <SomaiPilares />
        <SomaiMetodologia />
      </main>
      <SomaiFooter />
    </div>
  );
}
