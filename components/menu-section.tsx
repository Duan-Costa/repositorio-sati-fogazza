import MenuCard from "@/components/menu-card"

interface MenuItem {
  title: string
  description: string
  price: string
  imageSrc: string
  imagePosition: string
}

interface MenuSectionProps {
  title: string
  items: MenuItem[]
}

export default function MenuSection({ title, items }: MenuSectionProps) {
  return (
    <div>
      <h3 className="mb-8 text-3xl font-bold text-center text-orange-700">{title}</h3>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <MenuCard
            key={index}
            title={item.title}
            description={item.description}
            price={item.price}
            imageSrc={item.imageSrc}
            imagePosition={item.imagePosition}
          />
        ))}
      </div>
    </div>
  )
}

