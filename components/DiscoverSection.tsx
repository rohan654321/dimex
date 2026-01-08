// components/DiscoverSection.tsx
export default function DiscoverSection() {
  return (
    <section className="relative z-1 mx-auto overflow-hidden bg-[#003366] text-white py-32">
      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="flex h-fit flex-col gap-8 lg:col-span-7 lg:border-l lg:border-white/20 lg:pl-14">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.85] tracking-tight">
              Discover TransRussia
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed">
                Download our comprehensive post-show report to unlock the details of CIS's premier transport and logistics exhibition. Discover how exhibiting at TransRussia can help you expand your business into the growing market and connect with key decision-makers shaping the future of logistics.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                Download now and start planning your success!
              </p>
            </div>
            
            <a href="/post-show-report" className="block mt-8">
              <button className="flex items-center justify-center group gap-2 overflow-hidden rounded-full px-10 py-4 font-jakarta text-[16px] font-semibold transition-all duration-300 bg-white text-[#0092D7] hover:bg-[#0092D7] hover:text-white w-fit">
                Download the 2025 Post Show Report
              </button>
            </a>
          </div>
          
          <div className="grid min-h-96 place-content-center lg:col-span-5">
            <img 
              src="/images/image.png" 
              alt="TransRussia Brochure" 
              className="size-full object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}