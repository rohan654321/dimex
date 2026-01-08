// components/ArticlesSection.tsx
export default function ArticlesSection() {
  const articles = [
    {
      title: 'Why Is Rail Freight Becoming a Stronger Alternative for Long-Haul Cargo in 2026?',
      slug: 'why-is-rail-freight-becoming-a-stronger-alternative-for-long-haul-cargo-in-2026',
      excerpt: 'Rail freight for long-haul cargo offers reliable schedules, lower emissions, and optimized corridor operations. Digital planning, terminal upgrades, and sea–land integration help shippers move goods efficiently across Eurasia in 2026.',
      image: '/images/image.png',
      date: 'November 20, 2025'
    },
    {
      title: 'How Are Ports Preparing for Increased Freight Handling Demands in 2026?',
      slug: 'how-are-ports-preparing-for-increased-freight-handling-demands-in-2026',
      excerpt: 'Freight handling in ports is evolving with infrastructure upgrades, digital operations, and sea–land integration. Ports in Eurasia enhance berth productivity, reduce dwell, and ensure reliable inland handoffs to meet growing 2026 cargo demands.',
      image: '/images/image.png',
      date: 'November 05, 2025'
    },
    {
      title: 'What’s Next for Oversized Cargo Handling in the Global Logistics Industry?',
      slug: 'what-s-next-for-oversized-cargo-handling-in-the-global-logistics-industry',
      excerpt: 'Oversized cargo handling is evolving with digital planning, IoT monitoring, and coordinated sea–land operations. Operators reduce risk, improve speed, and ensure predictable delivery for turbines, bridge spans, and other large project freight across Eurasia.',
      image: '/images/image.png',
      date: 'October 23, 2025'
    }
  ]

  return (
    <section className="bg-[#F4F4F4] py-32">
      <div className="container">
        <div className="mb-20">
          <div className="mb-8">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-black leading-[0.85] tracking-tight mb-6">
              Event Insights & Industry Trends
            </h2>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-6 max-w-3xl">
              <p className="text-lg md:text-xl leading-relaxed">
                Stay up to date with the latest in the industry and the show
              </p>
            </div>
            
            <a href="/articles" className="block">
              <button className="flex items-center justify-center group gap-2 overflow-hidden rounded-full px-10 py-4 font-jakarta text-[16px] font-semibold transition-all duration-300 bg-[#0092D7] text-white hover:bg-[#33A8DF] w-fit">
                View all articles
              </button>
            </a>
          </div>
        </div>

        <div className="grid gap-12 xl:grid-cols-2">
          {/* Featured Article */}
          <div className="flex flex-col gap-6">
            <img 
              src={articles[0].image} 
              alt={articles[0].title} 
              className="size-auto rounded-2xl object-cover lg:h-96 w-full"
            />
            <span className="text-base text-[#33A8DF] font-medium">{articles[0].date}</span>
            <a href={`/articles/${articles[0].slug}`} className="text-black">
              <h4 className="text-3xl font-bold hover:text-[#0092D7] transition-colors leading-tight mb-4">
                {articles[0].title}
              </h4>
            </a>
            <p className="text-lg leading-relaxed">{articles[0].excerpt}</p>
          </div>

          {/* Two smaller articles */}
          <div className="flex flex-col justify-between gap-8">
            {articles.slice(1).map((article, index) => (
              <div key={index} className="grid items-center gap-8 lg:grid-cols-2 bg-white p-6 rounded-2xl">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="size-full rounded-xl object-cover h-48 w-full"
                />
                <div className="flex flex-col gap-4">
                  <span className="text-base text-[#33A8DF] font-medium">{article.date}</span>
                  <a href={`/articles/${article.slug}`} className="text-black">
                    <h4 className="text-xl font-bold hover:text-[#0092D7] transition-colors leading-tight">
                      {article.title}
                    </h4>
                  </a>
                  <p className="text-base leading-relaxed">{article.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}