// components/NewsletterSection.tsx
export default function NewsletterSection() {
  return (
    <section className="py-32">
      <div className="container text-white">
        <div className="relative z-1 min-h-96 w-full space-y-8 overflow-hidden rounded-3xl bg-[#003366] p-10 lg:p-16">
          <img 
            src="/images/image.png" 
            alt="Newsletter" 
            className="size-auto absolute bottom-0 right-0 max-w-md"
          />
          
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.85] tracking-tight max-w-3xl">
            Join our Newsletter
          </h2>
          
          <div className="space-y-6 max-w-2xl">
            <p className="text-lg md:text-xl leading-relaxed">
              Don't miss out on the latest with our weekly newsletter, bringing you not only the latest updates from the event but also cutting-edge insights from the entire industry. Don't miss out—subscribe now for more
            </p>
          </div>
          
          <a href="/newsletter" className="block mt-8">
            <button className="flex items-center justify-center group gap-2 overflow-hidden rounded-full px-10 py-4 font-jakarta text-[16px] font-semibold transition-all duration-300 bg-white text-[#0092D7] hover:bg-[#0092D7] hover:text-white w-fit">
              Sign up Today
            </button>
          </a>
          
          <div className="flex items-center justify-center absolute bottom-[-40%] end-[-3%] z-[-1] size-100">
            <div className="absolute size-full rounded-full bg-[#0092D7] opacity-30" />
            <div className="absolute size-2/3 rounded-full bg-[#0092D7] opacity-30" />
          </div>
        </div>
      </div>
    </section>
  )
}