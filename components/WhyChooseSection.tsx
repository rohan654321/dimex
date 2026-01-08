// components/WhyChooseSection.tsx
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WhyChooseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const reasons = [
    {
      number: '01',
      title: 'Connect with over 30,000 industry professionals',
      description: 'Access a highly targeted audience of transport and logistics professionals, including decision-makers actively seeking new solutions and partnerships.',
      icon: '👥'
    },
    {
      number: '02',
      title: 'Expand your market presence at TransRussia',
      description: 'Gain a market share the 12 countries part of the CIS region by showcasing your brand to a selected and highly engaged audience.',
      icon: '🌍'
    },
    {
      number: '03',
      title: 'Meet decision-makers and build instantly trust',
      description: 'Showcase your innovative solutions and establish your brand as a market leader in this rapidly growing sector.',
      icon: '🤝'
    }
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

      // Cards animation
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { 
            y: 80, 
            opacity: 0,
            scale: 0.9,
            rotationX: -15
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationX: 0,
            duration: 1,
            delay: 0.2 * i,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            }
          }
        );

        // Hover effect
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -15,
            scale: 1.02,
            boxShadow: '0 25px 50px -12px rgba(0, 51, 102, 0.25)',
            duration: 0.4,
            ease: 'power2.out'
          });
          
          // Animate icon
          const icon = card.querySelector('.reason-icon');
          gsap.to(icon, {
            scale: 1.2,
            rotation: 360,
            duration: 0.6,
            ease: 'back.out(1.2)'
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            duration: 0.4,
            ease: 'power2.out'
          });
          
          // Reset icon
          const icon = card.querySelector('.reason-icon');
          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.4,
            ease: 'power2.out'
          });
        });
      });

      // Background color animation
      const bgSection = document.querySelector('.bg-section');
      gsap.to(bgSection, {
        backgroundColor: '#003366',
        duration: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToCardsRef = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} className="bg-[#F4F4F4] py-0 overflow-hidden">
      <div className="bg-section bg-[#003366] py-24 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${4 + Math.random() * 4}s infinite ease-in-out ${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        
        <div className="container relative z-10 space-y-5">
          <h2 
            ref={titleRef}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.85] tracking-tight max-w-4xl opacity-0"
          >
            Why choose TransRussia 2026
          </h2>
        </div>
      </div>
      
      <div className="container -mt-16 relative z-20">
        <div className="grid lg:grid-cols-3 bg-white rounded-2xl shadow-xl overflow-hidden">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              ref={addToCardsRef}
              className="flex flex-col p-10 border-r border-gray-200 last:border-r-0 hover:bg-gradient-to-br hover:from-white hover:to-blue-50/30 transition-all duration-300 group cursor-pointer relative overflow-hidden opacity-0"
            >
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              
              <div className="flex flex-col h-full relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="reason-icon text-4xl transform transition-transform duration-300">
                    {reason.icon}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-[#0092D7]">{reason.number}</h3>
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-black mb-6 leading-tight group-hover:text-[#003366] transition-colors duration-300">
                  {reason.title}
                </h4>
                <p className="text-lg leading-relaxed mt-auto text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  {reason.description}
                </p>
                
                {/* Animated arrow */}
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                  <svg className="w-6 h-6 text-[#0092D7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
      `}</style>
    </section>
  );
}