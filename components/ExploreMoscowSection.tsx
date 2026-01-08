// components/ExploreMoscowSection.tsx
export default function ExploreMoscowSection() {
  return (
    <section className="relative z-1 overflow-hidden py-32">
      <div className="container">
        <div className="flex flex-col gap-8">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-black leading-[0.85] tracking-tight">
            Explore Moscow Beyond the Exhibition
          </h2>
          <div className="space-y-6 max-w-3xl">
            <p className="text-lg md:text-xl leading-relaxed">
              Make the most of your visit to TransRussia by exploring the vibrant city of Moscow. Discover cultural landmarks, business districts, and networking opportunities that complement your exhibition experience.
            </p>
          </div>
          <a href="/explore-moscow" className="block mt-6">
            <button className="flex items-center justify-center group gap-2 overflow-hidden rounded-full px-10 py-4 font-jakarta text-[16px] font-semibold transition-all duration-300 bg-[#0092D7] text-white hover:bg-[#33A8DF] w-fit">
              City Guide
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}