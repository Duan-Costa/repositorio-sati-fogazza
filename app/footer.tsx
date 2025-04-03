import Image from "next/image"

export default function Footer() {
  return (
    <footer className="py-8 text-white bg-orange-900">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <div className="relative w-32 h-16 mb-2">
              <Image src="/images/logo.png" alt="Fogazza Logo" fill className="object-contain" />
            </div>
            <p className="mt-2">O melhor sabor da cidade</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p>© {new Date().getFullYear()} Fogazza. Todos os direitos reservados.</p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-white hover:text-orange-300">
                Instagram
              </a>
              <a href="#" className="text-white hover:text-orange-300">
                Facebook
              </a>
              <a href="#" className="text-white hover:text-orange-300">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

