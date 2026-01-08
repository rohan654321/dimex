// components/CountriesSection.tsx
export default function CountriesSection() {
  const countries = [
    { name: 'Russia', flag: '/images/russia.png' },
    { name: 'Türkiye', flag: '/images/turkey.png' },
    { name: 'United Arab Emirates', flag: '/images/uae.png' },
    { name: 'United Kingdom', flag: '/images/uk.png' },
    { name: 'Uzbekistan', flag: '/images/uzbekistan.png' },
    { name: 'Armenia', flag: '/images/armenia.webp' },
    { name: 'Azerbaijan', flag: '/images/azerbaijan.png' },
    { name: 'Belarus', flag: '/images/belarus.webp' },
    { name: 'China', flag: '/images/china.png' },
    { name: 'India', flag: '/images/india.webp' },
    { name: 'Pakistan', flag: '/images/pakistan.png' }
  ]

  return (
    <section className="bg-[#F4F4F4] py-32">
      <div className="container mx-auto mb-16 flex max-w-6xl flex-col gap-8 lg:items-center lg:text-center">
        <div className="flex items-center justify-center w-fit gap-3 py-2 pe-5 pl-3 bg-white rounded-full mx-auto lg:mx-0">
          <img src="/images/logo-icon-3.png" alt="TransRussia" className="size-auto w-6" />
          <span className="text-sm font-medium">Countries Represented</span>
        </div>
        
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-black mb-8 leading-[0.85] tracking-tight">
          Discover the Global Reach of TransRussia
        </h2>
        
        <div className="space-y-6 max-w-3xl">
          <p className="text-lg md:text-xl leading-relaxed">
            TransRussia brings together solution providers in the logistics and warehousing sector from all corners of the world to assemble and do business across 3 days of the exhibition.
          </p>
        </div>
        
        <a href="https://catalogue.ite-expo.ru/ru-RU/exhibitorlist.aspx?project_id=535" target="_blank" rel="noopener noreferrer" className="block mt-6">
          <button className="flex items-center justify-center group gap-2 overflow-hidden rounded-full px-10 py-4 font-jakarta text-[16px] font-semibold transition-all duration-300 bg-[#0092D7] text-white hover:bg-[#33A8DF] w-fit">
            Explore the 2025 Exhibitor List
          </button>
        </a>
      </div>
      
      <div className="container">
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {countries.map((country, index) => (
            <div key={index} className="flag flex items-center justify-center gap-4 rounded-full bg-white px-6 py-3 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src={country.flag} 
                alt={country.name} 
                className="size-8 rounded-full object-cover"
              />
              <span className="text-base font-medium">{country.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}