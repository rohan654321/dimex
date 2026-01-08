// components/PartnersSection.tsx
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PartnersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  const partners = [
    { name: 'Apace Digital Cargo', logo: '/images/partner1.png', url: 'https://apace-cargo.com' },
    { name: 'Cargo Insights', logo: '/images/partner2.png', url: 'https://cargoinsights.com' },
    { name: 'International Coordinating Council for Trans-Eurasian Transportation', logo: '/images/partner3.png', url: 'https://icctet.org' },
    { name: 'LOGIRUS', logo: '/images/partner4.png', url: 'https://logirus.ru' },
    { name: 'CargoTalk', logo: '/images/partner5.png', url: 'https://cargotalk.com' },
    { name: 'Logistics 360 Magazine', logo: '/images/partner6.png', url: 'https://logistics360.com' },
    { name: 'BizToday', logo: '/images/partner7.png', url: 'https://biztoday.com' },
    { name: 'Logistics.ru', logo: '/images/partner8.png', url: 'https://logistics.ru' },
    { name: 'TravTalkME', logo: '/images/partner9.png', url: 'https://travtalkme.com' },
    { name: 'The Council of Supply Chain Professionals', logo: '/images/partner10.png', url: 'https://cscp.org' },
    { name: 'Freight Forwarders Association', logo: '/images/partner11.png', url: 'https://ffa.org' },
    { name: 'Global Logistics Network', logo: '/images/partner12.png', url: 'https://gln.com' },
    { name: 'Eurasian Transport Alliance', logo: '/images/partner13.png', url: 'https://eta.org' },
    { name: 'Digital Logistics Platform', logo: '/images/partner14.png', url: 'https://dlp.com' },
    { name: 'Supply Chain Analytics', logo: '/images/partner15.png', url: 'https://scanalytics.com' },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
          }
        }
      );

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: 'top 85%',
          }
        }
      );

      // Floating animation for partner logos
      const partners = document.querySelectorAll('.partner-card');
      partners.forEach((partner, i) => {
        gsap.fromTo(
          partner,
          { y: 30, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: 0.05 * i,
            scrollTrigger: {
              trigger: partner,
              start: 'top 90%',
              toggleActions: 'play none none reverse'
            }
          }
        );

        // Hover animation
        partner.addEventListener('mouseenter', () => {
          gsap.to(partner, {
            y: -10,
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        partner.addEventListener('mouseleave', () => {
          gsap.to(partner, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/10 to-white/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="mb-16 flex flex-col items-center">
          <div 
            ref={subtitleRef}
            className="flex items-center justify-center w-fit gap-3 py-2 pe-5 pl-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full mb-8 opacity-0"
          >
            <div className="w-2 h-2 bg-[#33A8DF] rounded-full animate-pulse" />
            <span className="text-sm font-medium text-[#003366]">Partners & Sponsors</span>
          </div>
          
          <h2 
            ref={titleRef}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-black mb-12 leading-[0.85] tracking-tight text-center opacity-0"
          >
            Driving Success Together
          </h2>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden lg:block relative">
          <Swiper
            modules={[Autoplay,]}
            spaceBetween={30}
            slidesPerView={5}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={1000}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            className="partners-slider"
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <a 
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner-card block group"
                >
                  <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-white to-blue-50 p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-200/50 border border-blue-100">
                    {/* Logo container */}
                    <div className="relative h-full w-full flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                      <div className="relative w-full h-24 flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative p-4 bg-white rounded-xl shadow-inner group-hover:scale-110 transition-transform duration-500">
                          <div className="w-24 h-24 flex items-center justify-center">
                            <div className="text-2xl font-bold text-[#003366] opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                              {partner.name.split(' ').map(word => word[0]).join('')}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Partner name */}
                    <div className="mt-6 text-center">
                      <span className="text-sm font-medium text-gray-700 group-hover:text-[#0092D7] transition-colors duration-300 line-clamp-2">
                        {partner.name}
                      </span>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation buttons */}
          
        </div>

        {/* Mobile/Tablet Grid */}
        <div className="lg:hidden">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {partners.slice(0, 6).map((partner, index) => (
              <a 
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-card block group"
              >
                <div className="relative h-40 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-white to-blue-50 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-200/30 border border-blue-100">
                  <div className="relative h-full w-full flex flex-col items-center justify-center">
                    <div className="relative w-full h-16 flex items-center justify-center mb-4">
                      <div className="relative p-3 bg-white rounded-lg shadow-inner group-hover:scale-105 transition-transform duration-300">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <div className="text-lg font-bold text-[#003366]">
                            {partner.name.split(' ').map(word => word[0]).join('').slice(0, 3)}
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-gray-700 group-hover:text-[#0092D7] transition-colors duration-300 text-center line-clamp-2">
                      {partner.name}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          {/* Mobile Swiper for remaining partners */}
          <div className="mt-8">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              speed={800}
              loop={true}
              className="mobile-partners-slider"
            >
              {partners.slice(6).map((partner, index) => (
                <SwiperSlide key={index}>
                  <a 
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="partner-card block group"
                  >
                    <div className="relative h-40 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-white to-blue-50 p-6 shadow-lg transition-all duration-300 hover:shadow-xl border border-blue-100">
                      <div className="relative h-full w-full flex flex-col items-center justify-center">
                        <div className="relative w-full h-16 flex items-center justify-center mb-4">
                          <div className="relative p-3 bg-white rounded-lg shadow-inner">
                            <div className="w-12 h-12 flex items-center justify-center">
                              <div className="text-lg font-bold text-[#003366]">
                                {partner.name.split(' ').map(word => word[0]).join('').slice(0, 3)}
                              </div>
                            </div>
                          </div>
                        </div>
                        <span className="text-xs font-medium text-gray-700 text-center line-clamp-2">
                          {partner.name}
                        </span>
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .partners-slider {
          padding: 20px 10px 40px;
        }
        
        .mobile-partners-slider {
          padding: 10px 0 30px;
        }
        
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #CBD5E1;
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active {
          background: #0092D7;
          width: 30px;
          border-radius: 5px;
        }
        
        .swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  );
}