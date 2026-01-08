// components/ImpactSection.tsx
export default function ImpactSection() {
  const impacts = [
    {
      title: 'Find the right platform to propel your business forward',
      content: 'TransRussia offers an unmatched opportunity for visitors to discover new suppliers and innovative logistics solutions under one roof.',
      image: '/images/impact1.jpg',
      stat: { value: '76%', label: 'Of visitors attend the exhibition to find new suppliers' }
    },
    {
      title: 'Expand your business with the right partners',
      content: 'Visitors to TransRussia leave with actionable insights and connections to trusted suppliers. The event showcases tailored solutions, and 72% of attendees plan to conclude purchases and implement new services afterwards.',
      image: '/images/impact2.jpg',
      stat: { value: '72%', label: 'Of visitors plan to purchase products and services post event' }
    },
    {
      title: 'The industry\'s go-to event for comprehensive solutions',
      content: 'TransRussia and SkladTech stand as the only choice for industry professionals seeking unparalleled transport, logistics, and warehouse solutions.',
      image: '/images/impact3.jpg',
      stat: { value: '79%', label: 'Of visitors only attend TransRussia and SkladTech among other industry events' }
    },
    {
      title: 'Your gateway to high-quality business leads',
      content: 'TransRussia delivers tangible results for exhibitors, with many securing over 100 qualified leads during the event. Engage directly with decision-makers, build meaningful connections, and lay the groundwork for lucrative partnerships that drive your business forward.',
      image: '/images/impact4.jpg',
      stat: { value: '74%', label: 'Of exhibitors generated more than 100 qualified leads during the event' }
    }
  ]

  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-16">
          <div className="lg:basis-2/3">
            <div className="flex items-center justify-center w-fit gap-3 py-2 pe-5 pl-3 bg-[#F4F4F4] rounded-full mb-6">
              <img src="/images/logo-icon-3.png" alt="TransRussia" className="size-auto w-6" />
              <span className="text-sm font-medium">Numbers</span>
            </div>
            
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-black leading-[0.85] tracking-tight mb-8">
              TransRussia Impact
            </h2>
            
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl">
              Discover the scale and reach of TransRussia and SkladTech. From global exhibitors to thousands of visitors, explore the numbers behind the event's success
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {impacts.map((impact, index) => (
            <div key={index} className="overflow-hidden rounded-2xl bg-[#003366] text-white">
              <div className="flex flex-col gap-6 p-8">
                <h3 className="text-2xl md:text-3xl font-bold leading-tight">{impact.title}</h3>
                <div className="min-h-24">
                  <p className="text-lg leading-relaxed">{impact.content}</p>
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="relative h-80">
                  <div 
                    className="size-full object-cover"
                    style={{
                      backgroundImage: `url(${impact.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: '50% 50%'
                    }}
                  />
                </div>
                
                <div className="flex justify-between bg-[#003366] p-8">
                  <div className="flex grow flex-col">
                    <h4 className="text-4xl md:text-5xl font-bold mb-2">{impact.stat.value}</h4>
                    <p className="text-lg">{impact.stat.label}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}