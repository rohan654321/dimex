// components/AboutSection.tsx
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRefs = useRef<HTMLParagraphElement[]>([]);
  const statsRefs = useRef<HTMLDivElement[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const stats = [
    { value: '30,500', label: 'Visitors' },
    { value: '600+', label: 'Exhibitors' },
    { value: '50+', label: 'Countries Represented' },
    { value: '13', label: 'Event Sectors' },
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

      // Text animation
      textRefs.current.forEach((text, i) => {
        gsap.fromTo(
          text,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.1 * i,
            scrollTrigger: {
              trigger: text,
              start: 'top 85%',
            }
          }
        );
      });

      // Stats animation
      statsRefs.current.forEach((stat, i) => {
        const valueElement = stat.querySelector('h3');
        const labelElement = stat.querySelector('p');
        
        gsap.fromTo(
          stat,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.1 * i,
            scrollTrigger: {
              trigger: stat,
              start: 'top 90%',
            }
          }
        );

        // Animate numbers counting up
        if (valueElement) {
          const targetValue = stats[i].value.replace(/,/g, '');
          if (targetValue.includes('+')) {
            const num = parseInt(targetValue);
            gsap.fromTo(
              valueElement,
              { innerText: 0 },
              {
                innerText: num,
                duration: 2,
                delay: 0.5 + 0.1 * i,
                scrollTrigger: {
                  trigger: stat,
                  start: 'top 90%',
                },
                snap: { innerText: 1 },
                onUpdate: function() {
                  valueElement.innerText = Math.floor(this.targets()[0].innerText) + (targetValue.includes('+') ? '+' : '');
                }
              }
            );
          }
        }
      });

      // Button animation
      gsap.fromTo(
        buttonRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          delay: 0.5,
          scrollTrigger: {
            trigger: buttonRef.current,
            start: 'top 85%',
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToTextRefs = (el: HTMLParagraphElement | null) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  const addToStatsRefs = (el: HTMLDivElement | null) => {
    if (el && !statsRefs.current.includes(el)) {
      statsRefs.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} className="relative z-1 overflow-hidden py-32">
      <div className="container">
        <div className="flex flex-col gap-8">
          <h2 
            ref={titleRef}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-black leading-[0.85] tracking-tight mb-4 opacity-0"
          >
            Russia's Leading Transport and Logistics Event
          </h2>
          <div className="space-y-6 max-w-4xl">
            <p 
              ref={addToTextRefs}
              className="text-lg md:text-xl leading-relaxed opacity-0"
            >
              TransRussia 2026 is the premier international exhibition for transport and logistics services, warehouse equipment, and advanced technologies. Taking place from 17–19 March 2026 at Crocus Expo, it brings together industry leaders, decision-makers, and innovators from across 50 countries.
            </p>
            <p 
              ref={addToTextRefs}
              className="text-lg md:text-xl leading-relaxed opacity-0"
            >
              Whether you're looking to meet new clients, strengthen existing relationships, or explore cutting-edge industry advancements, TransRussia is the place to be.
            </p>
          </div>
          <a href="/about-transrussia" className="block mt-6">
            <button 
              ref={buttonRef}
              className="flex items-center justify-center group gap-2 overflow-hidden rounded-full px-10 py-4 font-jakarta text-[16px] font-semibold transition-all duration-300 bg-gradient-to-r from-[#0092D7] to-[#33A8DF] text-white hover:from-[#33A8DF] hover:to-[#0092D7] w-fit hover:scale-105 hover:shadow-xl hover:shadow-[#33A8DF]/30 opacity-0"
            >
              Learn More
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </a>
        </div>
      </div>
      
      <div className="mt-32 bg-[#F4F4F4] py-20">
        <div className="container grid sm:grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              ref={addToStatsRefs}
              className="flex flex-col items-center lg:justify-center opacity-0"
            >
              <div className="flex flex-col border-b border-black/10 pb-5 sm:w-fit text-center">
                <h3 className="text-5xl md:text-6xl leading-none mb-3 font-bold text-[#0092D7]">
                  {stat.value}
                </h3>
                <p className="text-lg md:text-xl font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}