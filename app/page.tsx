import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import MenuCard from "@/components/menu-card"
import WhatsAppButton from "@/components/whatsapp-button"
import Footer from "./footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/hero-fogazzas.jpeg"
              alt="Deliciosas Fogazzas"
              fill
              priority
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
          </div>
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
            <span className="block text-orange-400">Fogazzas</span>
            <span className="block">Sabor Inigualável</span>
          </h1>
          <p className="max-w-lg mx-auto mt-6 text-xl text-gray-200">
            Experimente nossas fogazzas artesanais, preparadas com ingredientes selecionados e muito amor.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Link href="#menu" className="flex items-center gap-2">
                Ver Cardápio <ArrowRight size={16} />
              </Link>
            </Button>
            <WhatsAppButton />
          </div>
        </div>
      </section>

      {/* Menu Section - Salgadas */}
      <section id="menu" className="pt-20 bg-orange-50">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-center text-orange-800">Nosso Cardápio</h2>

          <h3 className="mb-8 text-3xl font-bold text-center text-orange-700">Fogazzas Salgadas</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <MenuCard
              title="Fogazza Margherita"
              description="Nossa receita tradicional com molho de tomate, mussarela e manjericão fresco."
              price="R$ 25,90"
              imageSrc="/images/fogazza-margherita.jpeg"
            />
            <MenuCard
              title="Fogazza Calabresa"
              description="Recheada com calabresa fatiada, cebola e mussarela especial."
              price="R$ 28,90"
              imageSrc="/images/fogazza-calabresa.jpeg"
            />
            <MenuCard
              title="Fogazza Pepperoni"
              description="Com pepperoni fatiado, molho de tomate e mussarela especial."
              price="R$ 30,90"
              imageSrc="/images/fogazza-pepperoni.jpeg"
            />
            <MenuCard
              title="Fogazza Frango com Catupiry"
              description="Frango desfiado temperado com catupiry cremoso."
              price="R$ 32,90"
              imageSrc="/images/fogazza-frango-com-catupiry.jpeg"
            />
            <MenuCard
              title="Fogazza Vegetariana"
              description="Mix de legumes frescos, champignon, pimentão e abobrinha."
              price="R$ 29,90"
              imageSrc="/images/fogazza-vegetariana.jpeg"
            />
            <MenuCard
              title="Fogazza Quatro Queijos"
              description="Deliciosa combinação de quatro queijos selecionados derretidos."
              price="R$ 31,90"
              imageSrc="/images/fogazza-quatro-queijos.jpeg"
            />
          </div>
        </div>
      </section>

      {/* Menu Section - Doces */}
      <section className="py-20 bg-orange-50">
        <div className="container px-4 mx-auto">
          <h3 className="mb-8 text-3xl font-bold text-center text-orange-700">Fogazzas Doces</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <MenuCard
              title="Fogazza de Nutella"
              description="Recheada com creme de avelã e chocolate Nutella."
              price="R$ 24,90"
              imageSrc="/images/fogazza de nutella.jpg"
              imagePosition="0% 0%"
            />
            <MenuCard
              title="Fogazza Doce de Leite"
              description="Recheada com doce de leite cremoso."
              price="R$ 22,90"
              imageSrc="/images/fogazza de doce de leite.jpg"
              imagePosition="50% 0%"
            />
            <MenuCard
              title="Fogazza Chocolate com Morango"
              description="Combinação perfeita de chocolate e morangos frescos."
              price="R$ 26,90"
              imageSrc="/images/fogazza chocolate morango.jpg"
              imagePosition="100% 0%"
            />
            <MenuCard
              title="Fogazza de Banana"
              description="Recheada com banana caramelizada e canela."
              price="R$ 21,90"
              imageSrc="/images/fogazza de banana.jpg"
              imagePosition="0% 100%"
            />
            <MenuCard
              title="Fogazza de Maçã"
              description="Recheada com maçã caramelizada e canela."
              price="R$ 23,90"
              imageSrc="/images/fogazza de maçã.jpg"
              imagePosition="50% 100%"
            />
            <MenuCard
              title="Fogazza de Goiabada"
              description="Recheada com goiabada cremosa e queijo."
              price="R$ 22,90"
              imageSrc="/images/fogazza de goiabada.jpg"
              imagePosition="100% 100%"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-white">
  <div className="container px-4 mx-auto">
    <div className="flex flex-col items-center gap-12 lg:flex-row">
      {/* Texto à esquerda */}
      <div className="w-full lg:w-1/2">
        <h2 className="mb-6 text-4xl font-bold text-orange-800">Sobre Nós</h2>
        <p className="mb-4 text-lg text-gray-400">
          A Fogazaria nasceu da paixão por sabores autênticos e da vontade de oferecer algo único. Nossa história começou em 2015, quando o chef Antonio descobriu uma antiga receita familiar de fogazza e decidiu compartilhar esse tesouro culinário com o mundo.
        </p>
        <p className="mb-4 text-lg text-gray-400">
          Cada fogazza é preparada artesanalmente, com ingredientes selecionados e seguindo rigorosamente a tradição que faz nosso produto ser tão especial.
        </p>
        <p className="text-lg text-gray-400">
          Nosso compromisso é proporcionar uma experiência gastronômica inesquecível, combinando sabor, qualidade e atendimento excepcional.
        </p>
      </div>
      
      {/* Imagem à direita */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img 
          src="/images/estabelecimento.jpg" 
          alt="Imagem representativa da Fogazaria" 
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</section>
      {/* Location Section */}
      <section id="localizacao" className="py-20 bg-orange-100">
  <div className="container px-4 mx-auto">
    <h2 className="mb-12 text-4xl font-bold text-center text-orange-800">Onde Estamos</h2>
    <div className="flex flex-col gap-8 lg:flex-row">
      
      {/* Mapa */}
      <div className="w-full lg:w-1/2">
        <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902268290975!2d-46.63594678521962!3d-23.548902967372287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5854e14df2cf%3A0x21785adf73fef252!2sAv.%20Paulista%2C%20São%20Paulo%20-%20SP!5e0!3m2!1sen!2sbr!4v1645137887149!5m2!1sen!2sbr"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
            <div className="w-full lg:w-1/2">
              <div className="p-8 bg-white rounded-lg shadow-md">
                <h3 className="mb-6 text-2xl font-bold text-orange-800">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="mr-4 text-orange-500" />
                    <p className="text-gray-500">
                      Av. das Delícias, 123
                      <br />
                      Bairro Gastronômico
                      <br />
                      São Paulo - SP
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-4 text-orange-800" />
                    <p className="text-gray-800">(11) 99999-9999</p>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-4 text-orange-800" />
                    <div>
                      <p className="text-gray-800">Segunda a Sexta: 11h às 22h</p>
                      <p className="text-gray-800">Sábados e Domingos: 11h às 23h</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <WhatsAppButton text="Fale Conosco" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}


