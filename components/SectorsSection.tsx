// components/SectorsSection.tsx
export default function SectorsSection() {
  const sectors = [
    {
      title: 'Complex Logistics Services & Freight Forwarding',
      slug: 'complex-logistics-services-and-freight-forwarding',
      description: 'Leading Russian and international freight forwarders will showcase comprehensive logistics solutions at the event.',
      image: '/images/image.png'
    },
    {
      title: 'Road Freight Transportation',
      slug: 'road-freight-transportation',
      description: '',
      image: '/images/image.png'
    },
    {
      title: 'Rail Freight',
      slug: 'rail-freight',
      description: 'Explore rail transport solutions for diverse cargo types, showcasing efficiency and versatility at TransRussia.',
      image: '/images/image.png'
    },
    {
      title: 'Air Freight',
      slug: 'air-freight',
      description: 'Air transportation is crucial for fast delivery of time-sensitive cargo like perishables, medicines, and e-commerce, overcoming topographical limitations that affect road or rail.',
      image: '/images/image.png'
    },
    {
      title: 'Maritime & Inland Waterway Transport',
      slug: 'maritime-and-inland-waterway-transport',
      description: 'Maritime cargo transportation offers cost-effective, high-capacity solutions for intercontinental shipments of diverse cargo types.',
      image: '/images/image.png'
    },
    {
      title: 'Ports & Terminals, Freight Handling Services In Ports',
      slug: 'ports-and-terminals-freight-handling-services-in-ports',
      description: 'Discover expert stevedoring, logistics, and storage solutions for seamless port operations at TransRussia.',
      image: '/images/image.png'
    }
  ]

  return (
    <section className="py-32">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12 mb-20">
          <div className="lg:col-span-9">
            <div className="flex items-center justify-center w-fit gap-3 py-2 pe-5 pl-3 bg-[#F4F4F4] rounded-full mb-6">
              <img src="/images/logo-icon-3.png" alt="TransRussia" className="size-auto w-6" />
              <span className="text-sm font-medium">Sectors</span>
            </div>
            
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-black leading-[0.85] tracking-tight">
              Discover 13 Product Sectors In-Demand
            </h2>
          </div>
          
          <div className="flex lg:col-span-3 lg:justify-end">
            <a href="/sectors" className="block">
              <button className="flex items-center justify-center group gap-2 overflow-hidden rounded-full px-10 py-4 font-jakarta text-[16px] font-semibold transition-all duration-300 bg-[#0092D7] text-white hover:bg-[#33A8DF] w-fit">
                Explore Sectors
              </button>
            </a>
          </div>
        </div>

        <div className="grid max-md:gap-6 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <a 
              key={index}
              href={`/sectors/${sector.slug}`}
              className="group relative flex min-h-96 w-full flex-col justify-end overflow-hidden rounded-2xl p-8 text-white transition-transform duration-300 hover:scale-[1.02]"
            >
              <div 
                className="absolute inset-0 z-[-2] size-full object-cover"
                style={{
                  backgroundImage: `url(${sector.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: '50% 50%'
                }}
              />
              <div className="absolute inset-0 z-[-1] bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              
              <h5 className="text-2xl md:text-3xl font-bold mb-4">{sector.title}</h5>
              {sector.description && (
                <p className="text-lg leading-relaxed opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300">
                  {sector.description}
                </p>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}