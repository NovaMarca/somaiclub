import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SomaiHeader } from "@/components/somai/SomaiHeader";
import { SomaiFooter } from "@/components/somai/SomaiFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactSchema = z.object({
  nome: z.string().trim().min(1, "Nome é obrigatório").max(100, "Nome deve ter no máximo 100 caracteres"),
  sobrenome: z.string().trim().min(1, "Sobrenome é obrigatório").max(100, "Sobrenome deve ter no máximo 100 caracteres"),
  assunto: z.string().trim().min(1, "Assunto é obrigatório").max(200, "Assunto deve ter no máximo 200 caracteres"),
  email: z.string().trim().email("E-mail inválido").max(255, "E-mail deve ter no máximo 255 caracteres"),
  aceitoDados: z.boolean().refine((val) => val === true, {
    message: "Você precisa aceitar o envio dos dados",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContatoPage() {
  const [searchParams] = useSearchParams();
  const assuntoParam = searchParams.get("assunto");
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nome: "",
      sobrenome: "",
      assunto: assuntoParam || "",
      email: "",
      aceitoDados: false,
    },
  });

  useEffect(() => {
    if (assuntoParam) {
      form.setValue("assunto", assuntoParam);
    }
  }, [assuntoParam, form]);

  const onSubmit = (data: ContactFormData) => {
    // In production, this would send to a backend
    setSubmitted(true);
    toast.success("Mensagem enviada com sucesso!", {
      description: "Entraremos em contato em breve.",
      position: "top-center",
    });
  };

  return (
    <div className="min-h-screen flex flex-col somai-theme">
      <SomaiHeader />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-somai-teal py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contato</h1>
              <p className="text-lg text-white/80">
                Entre em contato conosco. Nossa equipe está pronta para ajudar 
                a transformar suas ideias em realidade.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Informações de Contato
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Entre em contato conosco por qualquer um dos canais abaixo 
                    ou preencha o formulário.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">E-mail</h3>
                      <p className="text-muted-foreground">somaiclub@somaiclub.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Telefone</h3>
                      <p className="text-muted-foreground">(16) 99782-2667</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Endereço</h3>
                      <p className="text-muted-foreground">São Carlos, SP - Brasil</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-card border border-border rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-card-foreground mb-6">
                    Envie sua Mensagem
                  </h2>

                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-card-foreground mb-2">
                        Mensagem Enviada!
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Recebemos sua mensagem e entraremos em contato em breve.
                      </p>
                      <Button onClick={() => { setSubmitted(false); form.reset(); }} variant="outline">
                        Enviar Nova Mensagem
                      </Button>
                    </div>
                  ) : (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="nome"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-foreground">Nome *</FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    placeholder="Seu nome"
                                    className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="sobrenome"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-foreground">Sobrenome *</FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    placeholder="Seu sobrenome"
                                    className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="assunto"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground">Assunto *</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="Assunto da mensagem"
                                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground">E-mail *</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  type="email"
                                  placeholder="seu@email.com"
                                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="aceitoDados"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                  className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="text-foreground font-normal cursor-pointer">
                                  Aceito enviar os dados *
                                </FormLabel>
                                <FormMessage />
                              </div>
                            </FormItem>
                          )}
                        />

                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                        >
                          <Send className="w-4 h-4 mr-2" />
                          Enviar Mensagem
                        </Button>
                      </form>
                    </Form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SomaiFooter />
    </div>
  );
}
