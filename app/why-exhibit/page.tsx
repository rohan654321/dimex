import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WhyExhibitPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="page-spacing-wrapper">
        <div className="relative z-[1] flex flex-col justify-end bg-mainColor5 !pt-96">
          <div className="container flex flex-col justify-end !pt-0 !pb-10 text-white">
            <h2 className="title-72 text-white">Unlock New Opportunities at TransRussia</h2>
            <p className="max-w-6xl whitespace-pre-line py-5">Discover new possibilities at TransRussia 2026. Be where the logistics industry gathers to innovate, collaborate, and be at the forefront of logistics excellence.</p>
            
            <div className="flex w-fit flex-wrap gap-5 pb-5">
              <div className="flex items-center gap-1 ">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="size-5 shrink-0 fill-mainColor2 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm106.5 150.5L228.8 332.8h-.1c-1.7 1.7-6.3 5.5-11.6 5.5-3.8 0-8.1-2.1-11.7-5.7l-56-56c-1.6-1.6-1.6-4.1 0-5.7l17.8-17.8c.8-.8 1.8-1.2 2.8-1.2 1 0 2 .4 2.8 1.2l44.4 44.4 122-122.9c.8-.8 1.8-1.2 2.8-1.2 1.1 0 2.1.4 2.8 1.2l17.5 18.1c1.8 1.7 1.8 4.2.2 5.8z"></path>
                </svg>
                <p>17 - 19 March 2026</p>
              </div>
              <div className="flex items-center gap-1 ">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="size-5 shrink-0 fill-mainColor2 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm106.5 150.5L228.8 332.8h-.1c-1.7 1.7-6.3 5.5-11.6 5.5-3.8 0-8.1-2.1-11.7-5.7l-56-56c-1.6-1.6-1.6-4.1 0-5.7l17.8-17.8c.8-.8 1.8-1.2 2.8-1.2 1 0 2 .4 2.8 1.2l44.4 44.4 122-122.9c.8-.8 1.8-1.2 2.8-1.2 1.1 0 2.1.4 2.8 1.2l17.5 18.1c1.8 1.7 1.8 4.2.2 5.8z"></path>
                </svg>
                <p>Crocus Expo, Moscow</p>
              </div>
            </div>
            
            <Link href="/exhibiting-enquiry" className="block w-fit pb-5">
              <button className="flex-center group w-fit gap-2 overflow-hidden rounded-full px-10 py-3 font-jakarta text-[16px] font-semibold global-transition bg-mainColor2 text-white hover:bg-mainColor4">Enquire to Exhibit</button>
            </Link>
          </div>
          
          <div className="absolute inset-0 z-[-1] size-full !py-0">
            <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
            <Image 
              alt="TransRussia©24" 
              src="/Trans_Russia_heading_c711a6e7b3.webp"
              fill
              className="size-full object-cover"
              style={{ color: 'transparent' }}
            />
          </div>
        </div>
      </div>

      {/* Industry Comes Together Section */}
      <div className="animated-block">
        <div className="animated-block-target">
          <div className="container">
            <h2 className="title-72 text-black mb-10">Where the Transport &amp; Logistics Industry Comes Together</h2>
            <div className="grid size-full grid-cols-1 gap-5 md:grid-cols-2">
              <div className="z-[1] relative flex size-full min-h-[500px] flex-col p-5 lg:p-10">
                <div className="flex flex-col z-[1] gap-5">
                  <div className="rte-style">
                    <p>TransRussia is a prime gateway to tap into the thriving logistics and transport sector within one of the world's largest economies.</p>
                    <p>With Russia's strategic location and a market size of over 145 million people, the country presents significant growth potential for companies looking to expand their operations and optimize supply chains.</p>
                    <ul>
                      <li><h2><strong>30,500 Visitors</strong></h2></li>
                      <li><h2><strong>600+ Exhibitors</strong></h2></li>
                      <li><h2><strong>50+ Countries Represented</strong></h2></li>
                    </ul>
                  </div>
                  
                  <div className="flex w-full flex-wrap gap-5">
                    <Link href="/exhibiting-enquiry">
                      <button className="flex-center group w-fit gap-2 overflow-hidden rounded-full px-10 py-3 font-jakarta text-[16px] font-semibold global-transition bg-mainColor2 text-white hover:bg-mainColor4">Enquire to Exhibit</button>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="z-[1] relative flex size-full min-h-[500px] flex-col p-5 lg:p-10">
                <Image 
                  alt="TransRussia©24" 
                  src="/Trans_Russia_670_x_500_4_86ec0c31db.webp"
                  fill
                  className="absolute inset-0 size-full object-cover"
                  style={{ color: 'transparent' }}
                />
                <div className="flex flex-col z-[1] gap-5">
                  <div className="flex w-full flex-wrap gap-5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="animated-block">
        <div className="animated-block-target">
          <div className="container mx-auto">
            <div>
              <div className="flex-center w-fit gap-2 py-2 pe-5 pl-1 capitalize">
                <Image 
                  alt="TransRussia©24" 
                  src="/imgs/logo-icon-3.png"
                  width={20}
                  height={20}
                  className="size-auto w-5"
                  style={{ color: 'transparent' }}
                />
                <span>Key Benefits</span>
              </div>
              <h2 className="title-72 text-black my-5">Reasons Why You Should Exhibit</h2>
              <p className="whitespace-pre-line">TransRussia provides an unmatched platform for professionals in the transportation and logistics sector to present cutting-edge solutions to a qualified audience of industry leaders and decision-makers. With budgets dedicated to optimising supply chains and expanding operational efficiency, exhibiting at TransRussia offers you the opportunity to make valuable connections, establish strategic partnerships, and drive growth in a competitive market.</p>
            </div>
            
            <div className="mt-8 h-px w-full bg-mainColor5"></div>
            
            <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-20">
              <div className="flex flex-col gap-5">
                <div className="flex-between">
                  <h3 className="font-semibold text-black">Want to grow internationally?</h3>
                  <Image 
                    alt="TransRussia©24" 
                    src="/social_impact_16871280_aa26919271.png"
                    width={40}
                    height={40}
                    className="size-10"
                    style={{ color: 'transparent' }}
                  />
                </div>
                <p>Connect with buyers and partners from over 50 countries who attend TransRussia to discover global solutions.</p>
              </div>
              
              <div className="flex flex-col gap-5">
                <div className="flex-between">
                  <h3 className="font-semibold text-black">Facing challenges entering the market?</h3>
                  <Image 
                    alt="TransRussia©24" 
                    src="/buyer_2640543_cf26288352.png"
                    width={40}
                    height={40}
                    className="size-10"
                    style={{ color: 'transparent' }}
                  />
                </div>
                <p>Gain direct access to decision-makers and partners across Eurasia's logistics and transportation sectors</p>
              </div>
              
              <div className="flex flex-col gap-5">
                <div className="flex-between">
                  <h3 className="font-semibold text-black">Need better lead generation?</h3>
                  <Image 
                    alt="TransRussia©24" 
                    src="/filtering_17929669_e485cd3789.png"
                    width={40}
                    height={40}
                    className="size-10"
                    style={{ color: 'transparent' }}
                  />
                </div>
                <p>Build a pipeline of leads from industries such as freight forwarding, manufacturing, and e-commerce logistics.</p>
              </div>
              
              <div className="flex flex-col gap-5">
                <div className="flex-between">
                  <h3 className="font-semibold text-black">Struggling to measure impact?</h3>
                  <Image 
                    alt="TransRussia©24" 
                    src="/conversion_12914581_4afbefb14b.png"
                    width={40}
                    height={40}
                    className="size-10"
                    style={{ color: 'transparent' }}
                  />
                </div>
                <p>TransRussia delivers tangible results, from new leads to direct sales and strengthened partnerships</p>
              </div>
              
              <div className="flex flex-col gap-5">
                <div className="flex-between">
                  <h3 className="font-semibold text-black">Concerned about the cost and complexity of logistics in Eurasia?</h3>
                  <Image 
                    alt="TransRussia©24" 
                    src="/opportunity_12031315_930cd3c845.png"
                    width={40}
                    height={40}
                    className="size-10"
                    style={{ color: 'transparent' }}
                  />
                </div>
                <p>Meet partners to simplify your supply chain and operations.</p>
              </div>
              
              <div className="flex flex-col gap-5">
                <div className="flex-between">
                  <h3 className="font-semibold text-black">Is your brand struggling to get noticed?</h3>
                  <Image 
                    alt="TransRussia©24" 
                    src="/worldwide_750473_9e738dea0d.png"
                    width={40}
                    height={40}
                    className="size-10"
                    style={{ color: 'transparent' }}
                  />
                </div>
                <p>Showcase your unique solutions in front of a targeted audience in a competitive environment.</p>
              </div>
            </div>
            
            <Link href="/exhibiting-enquiry" className="mt-10 block">
              <button className="flex-center group w-fit gap-2 overflow-hidden rounded-full px-10 py-3 font-jakarta text-[16px] font-semibold global-transition bg-mainColor2 text-white hover:bg-mainColor4">Enquire to Exhibit</button>
            </Link>
          </div>
        </div>
      </div>

      {/* CIS Growth Section */}
      <div className="animated-block">
        <div className="animated-block-target">
          <div className="container">
            <h2 className="title-72 text-black mb-10">Why Expand to the CIS?</h2>
            <div className="grid size-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              <div className="z-[1] relative flex size-full min-h-[500px] flex-col p-5 lg:p-10 before:content-[''] text-white before:absolute before:inset-0 before:z-[1] before:from-black before:bg-gradient-to-b">
                <Image 
                  alt="TransRussia©24" 
                  src="/logistics_transportation_container_cargo_ship_cargo_plane_with_working_crane_bridge_shipyard_sunrise_logistic_import_export_transport_industry_background_ai_generative_2d16d2f122.jpg"
                  fill
                  className="absolute inset-0 size-full object-cover"
                  style={{ color: 'transparent' }}
                />
                <div className="flex flex-col z-[1] gap-7">
                  <h2 className="title-40 font-semibold text-white">$88.38 Billion by 2024</h2>
                  <div className="rte-style"></div>
                </div>
              </div>
              
              <div className="z-[1] relative flex size-full min-h-[500px] flex-col p-5 lg:p-10 before:content-[''] text-white before:absolute before:inset-0 before:z-[1] before:from-black before:bg-gradient-to-b">
                <Image 
                  alt="TransRussia©24" 
                  src="/view_full_warehouse_with_forklift_cc41fba80e.jpg"
                  fill
                  className="absolute inset-0 size-full object-cover"
                  style={{ color: 'transparent' }}
                />
                <div className="flex flex-col z-[1] gap-7">
                  <h2 className="title-40 font-semibold text-white">Growth in Demand</h2>
                  <div className="rte-style"></div>
                </div>
              </div>
              
              <div className="z-[1] relative flex size-full min-h-[500px] flex-col p-5 lg:p-10 before:content-[''] text-white before:absolute before:inset-0 before:z-[1] before:from-black before:bg-gradient-to-b">
                <Image 
                  alt="TransRussia©24" 
                  src="/ship_drydock_061f5880cd.jpg"
                  fill
                  className="absolute inset-0 size-full object-cover"
                  style={{ color: 'transparent' }}
                />
                <div className="flex flex-col z-[1] gap-7">
                  <h2 className="title-40 font-semibold text-white">$108.78 Billion by 2029</h2>
                  <div className="rte-style"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Event Sectors Section */}
      <div className="animated-block">
        <div className="animated-block-target">
          <div className="container">
            <div className="grid gap-5 lg:grid-cols-12 lg:items-end lg:gap-10">
              <div className="lg:col-span-9">
                <div className="flex-center w-fit gap-2 py-2 pe-5 pl-1 capitalize">
                  <Image 
                    alt="TransRussia©24" 
                    src="/imgs/logo-icon-3.png"
                    width={20}
                    height={20}
                    className="size-auto w-5"
                    style={{ color: 'transparent' }}
                  />
                  <span>Event Sectors</span>
                </div>
                <h2 className="title-72 text-black my-3">From Freight to Technology Discover our Core Sectors</h2>
              </div>
              <div className="flex lg:col-span-3 lg:justify-end">
                <Link href="/sectors" className="block">
                  <button className="flex-center group w-fit gap-2 overflow-hidden rounded-full px-10 py-3 font-jakarta text-[16px] font-semibold global-transition bg-mainColor2 text-white hover:bg-mainColor4">Explore Our 13 Sectors</button>
                </Link>
              </div>
            </div>
            
            <div className="mt-10 grid max-md:gap-5 md:grid-cols-2 lg:grid-cols-3">
              <Link href="/sectors/complex-logistics-services-and-freight-forwarding" className="group relative flex min-h-[600px] w-full flex-col justify-end overflow-hidden p-5 text-white">
                <Image 
                  alt="TransRussia©24" 
                  src="/Untitled_design_16_ff2396a005.png"
                  fill
                  className="absolute inset-0 z-[-2] size-full object-cover"
                  style={{ color: 'transparent' }}
                />
                <div className="absolute inset-0 z-[-2] bg-gradient-to-t from-black/90 from-10%"></div>
                <h5 className="title-32 font-semibold">Complex Logistics Services &amp; Freight Forwarding</h5>
                <p className="global-transition line-clamp-2 lg:h-0 lg:opacity-0 group-hover:lg:h-[60px] group-hover:lg:opacity-100">Leading Russian and international freight forwarders will showcase comprehensive logistics solutions at the event.</p>
              </Link>
              
              <Link href="/sectors/maritime-and-inland-waterway-transport" className="group relative flex min-h-[600px] w-full flex-col justify-end overflow-hidden p-5 text-white">
                <Image 
                  alt="TransRussia©24" 
                  src="/TRU_Sectors_Images_7_c75137da32.png"
                  fill
                  className="absolute inset-0 z-[-2] size-full object-cover"
                  style={{ color: 'transparent' }}
                />
                <div className="absolute inset-0 z-[-2] bg-gradient-to-t from-black/90 from-10%"></div>
                <h5 className="title-32 font-semibold">Maritime &amp; Inland Waterway Transport</h5>
                <p className="global-transition line-clamp-2 lg:h-0 lg:opacity-0 group-hover:lg:h-[60px] group-hover:lg:opacity-100">Maritime cargo transportation offers cost-effective, high-capacity solutions for intercontinental shipments of diverse cargo types.</p>
              </Link>
              
              <Link href="/sectors/air-freight" className="group relative flex min-h-[600px] w-full flex-col justify-end overflow-hidden p-5 text-white">
                <Image 
                  alt="TransRussia©24" 
                  src="/TRU_Sectors_Images_3_9089d75ec1.png"
                  fill
                  className="absolute inset-0 z-[-2] size-full object-cover"
                  style={{ color: 'transparent' }}
                />
                <div className="absolute inset-0 z-[-2] bg-gradient-to-t from-black/90 from-10%"></div>
                <h5 className="title-32 font-semibold">Air Freight</h5>
                <p className="global-transition line-clamp-2 lg:h-0 lg:opacity-0 group-hover:lg:h-[60px] group-hover:lg:opacity-100">Air transportation is crucial for fast delivery of time-sensitive cargo like perishables, medicines, and e-commerce, overcoming topographical limitations that affect road or rail.</p>
              </Link>
              
              <Link href="/sectors/ports-and-terminals-freight-handling-services-in-ports" className="group relative flex min-h-[600px] w-full flex-col justify-end overflow-hidden p-5 text-white">
                <Image 
                  alt="TransRussia©24" 
                  src="/httpstransrussia_preview_prismetic_comterms_of_visiting_1200_x_490_px_a78a81f1aa.png"
                  fill
                  className="absolute inset-0 z-[-2] size-full object-cover"
                  style={{ color: 'transparent' }}
                />
                <div className="absolute inset-0 z-[-2] bg-gradient-to-t from-black/90 from-10%"></div>
                <h5 className="title-32 font-semibold">Ports &amp; Terminals, Freight Handling Services In Ports</h5>
                <p className="global-transition line-clamp-2 lg:h-0 lg:opacity-0 group-hover:lg:h-[60px] group-hover:lg:opacity-100">Discover expert stevedoring, logistics, and storage solutions for seamless port operations at TransRussia.</p>
              </Link>
              
              <Link href="/sectors/rail-freight" className="group relative flex min-h-[600px] w-full flex-col justify-end overflow-hidden p-5 text-white">
                <Image 
                  alt="TransRussia©24" 
                  src="/TRU_Sectors_Images_4_b89e6f82a3.png"
                  fill
                  className="absolute inset-0 z-[-2] size-full object-cover"
                  style={{ color: 'transparent' }}
                />
                <div className="absolute inset-0 z-[-2] bg-gradient-to-t from-black/90 from-10%"></div>
                <h5 className="title-32 font-semibold">Rail Freight</h5>
                <p className="global-transition line-clamp-2 lg:h-0 lg:opacity-0 group-hover:lg:h-[60px] group-hover:lg:opacity-100">Explore rail transport solutions for diverse cargo types, showcasing efficiency and versatility at TransRussia.</p>
              </Link>
              
              <Link href="/sectors/road-freight-transportation" className="group relative flex min-h-[600px] w-full flex-col justify-end overflow-hidden p-5 text-white">
                <Image 
                  alt="TransRussia©24" 
                  src="/TRU_Sectors_Images_5_46a97403ad.png"
                  fill
                  className="absolute inset-0 z-[-2] size-full object-cover"
                  style={{ color: 'transparent' }}
                />
                <div className="absolute inset-0 z-[-2] bg-gradient-to-t from-black/90 from-10%"></div>
                <h5 className="title-32 font-semibold">Road Freight Transportation</h5>
                <p className="global-transition line-clamp-2 lg:h-0 lg:opacity-0 group-hover:lg:h-[60px] group-hover:lg:opacity-100"></p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Brochure Download Section */}
      <div className="animated-block">
        <div className="animated-block-target">
          <div className="container text-white ">
            <div className="relative z-[1] min-h-[300px] w-full space-y-5 overflow-hidden rounded-3xl bg-mainColor1 p-5 max-lg:pb-60 lg:p-10">
              <Image 
                alt="TransRussia©24" 
                src="/Brochure_Mockup_8_f53822fd4a.png"
                width={400}
                height={300}
                className="size-auto absolute bottom-0 right-0"
                style={{ color: 'transparent' }}
              />
              <h2 className="title-72 text-white">Download Your Event Brochure</h2>
              <p className="max-w-6xl whitespace-pre-line">Get a comprehensive look at the event's attendees, the sectors on display, and the key industry players present.</p>
              <Link href="/event-brochure" className="block">
                <button className="flex-center group w-fit gap-2 overflow-hidden rounded-full px-10 py-3 font-jakarta text-[16px] font-semibold global-transition bg-white text-mainColor2 hover:bg-mainColor2 hover:text-white">Download Now</button>
              </Link>
              <div className="circles flex-center absolute bottom-[-40%] end-[-3%] z-[-1] size-[400px]">
                <div className="absolute size-full rounded-full bg-mainColor2 opacity-50"></div>
                <div className="absolute size-2/3 rounded-full bg-mainColor2 opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="animated-block">
        <div className="animated-block-target">
          <div className="relative container" role="region" aria-roledescription="carousel">
            <div className="mb-10 flex justify-between max-lg:flex-col lg:items-end">
              <div className="lg:basis-2/3">
                <div className="flex-center w-fit gap-2 py-2 pe-5 pl-1 capitalize">
                  <Image 
                    alt="TransRussia©24" 
                    src="/imgs/logo-icon-3.png"
                    width={20}
                    height={20}
                    className="size-auto w-5"
                    style={{ color: 'transparent' }}
                  />
                  <span>Testimonials</span>
                </div>
                <h2 className="title-72 text-black my-3">Trusted by Industry Leaders</h2>
              </div>
              <div>
                <Image 
                  alt="TransRussia©24" 
                  src="/imgs/quote-img.png"
                  width={100}
                  height={100}
                  className="size-auto max-lg:hidden"
                  style={{ color: 'transparent' }}
                />
                <div className="mt-5 flex w-fit items-center justify-center gap-1">
                  <button className="flex-center group w-fit gap-2 overflow-hidden px-10 py-3 font-jakarta text-[16px] font-semibold text-mainColor1 aspect-square rounded-full bg-mainColor2 !p-4 !text-white rotate-180" disabled>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="size-4 lg:size-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                    </svg>
                  </button>
                  <button className="flex-center group w-fit gap-2 overflow-hidden px-10 py-3 font-jakarta text-[16px] font-semibold text-mainColor1 aspect-square rounded-full bg-mainColor2 !p-4 !text-white" disabled>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="size-4 lg:size-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="overflow-hidden">
              <div className="flex -ml-4">
                <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 flex gap-10 max-lg:flex-col lg:items-center lg:gap-20">
                  <Image 
                    alt="TransRussia©24" 
                    src="/Untitled_500_x_500_px_09501a15d8.png"
                    width={330}
                    height={330}
                    className="size-auto w-full object-cover lg:size-[330px]"
                    style={{ color: 'transparent' }}
                  />
                  <div className="">
                    <p className="title-24 mb-5 whitespace-pre-line border-b pb-5">We participate and will continue to participate at TransRussia because of the year-on-year growth</p>
                    <h5 className="font-semibold text-black">ALEXEY KRAVCHENKO</h5>
                    <p>Sales Director, FESCO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visitor Profile Section */}
      <div className="animated-block">
        <div className="animated-block-target">
          <div className="relative z-[1] overflow-hidden">
            <div className="container">
              <div className="flex flex-col gap-5">
                <h2 className="title-72 text-black">Visitor Profile</h2>
                <p className="whitespace-pre-line">Discover the professionals shaping the future of logistics and transportation. TransRussia attracts a highly targeted audience of decision-makers, industry leaders, and innovators from across the globe. From senior executives in freight and supply chain management to specialists in e-commerce logistics and technology, our visitors come with clear objectives—to find solutions, forge partnerships, and drive businesses forward.</p>
                <Link href="/post-show-report" className="block">
                  <button className="flex-center group w-fit gap-2 overflow-hidden rounded-full px-10 py-3 font-jakarta text-[16px] font-semibold global-transition bg-mainColor2 text-white hover:bg-mainColor4">Know More Insights - Download Your Post-Show Report</button>
                </Link>
              </div>
            </div>
            
            <div className="mt-10 bg-mainColor5 py-10">
              <div className="container grid sm:grid-cols-2 gap-10 lg:grid-cols-4">
                <div className="grid items-stretch lg:justify-center">
                  <div className="flex flex-col border-b border-black/10 pb-5 max-lg:pb-5 sm:w-fit">
                    <h3 className="title-60 mb-1 font-bold text-mainColor2">48%</h3>
                    <p>Transportation and Logistics Companies</p>
                  </div>
                </div>
                <div className="grid items-stretch lg:justify-center">
                  <div className="flex flex-col border-b border-black/10 pb-5 max-lg:pb-5 sm:w-fit">
                    <h3 className="title-60 mb-1 font-bold text-mainColor2">40%</h3>
                    <p>Cargo Owners, Manufacturers, Wholesales, Retail</p>
                  </div>
                </div>
                <div className="grid items-stretch lg:justify-center">
                  <div className="flex flex-col border-b border-black/10 pb-5 max-lg:pb-5 sm:w-fit">
                    <h3 className="title-60 mb-1 font-bold text-mainColor2">31%</h3>
                    <p>Head of Departments</p>
                  </div>
                </div>
                <div className="grid items-stretch lg:justify-center">
                  <div className="flex flex-col border-b border-black/10 pb-5 max-lg:pb-5 sm:w-fit">
                    <h3 className="title-60 mb-1 font-bold text-mainColor2">12%</h3>
                    <p>IT Solutions, Insurance, Foreign Trade Agencies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Exhibitors Snapshot Section */}
      <div className="animated-block">
        <div className="animated-block-target">
          <div className="container">
            <h2 className="title-72 text-black mb-10">A Snapshot of Our Exhibitors</h2>
            <div className="grid size-full grid-cols-1 gap-5">
              <div className="z-[1] relative flex size-full min-h-[500px] flex-col p-5 lg:p-10">
                <div className="flex flex-col z-[1] gap-5">
                  <div className="flex w-full flex-wrap gap-5">
                    <Link href="/exhibitor-list">
                      <button className="flex-center group w-fit gap-2 overflow-hidden rounded-full px-10 py-3 font-jakarta text-[16px] font-semibold global-transition bg-mainColor2 text-white hover:bg-mainColor4">View The 2026 Exhibitor List</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Travel Info Section */}
      <div className="animated-block">
        <div className="animated-block-target">
          <div className="xl:!py-62 relative !py-40">
            <Image 
              alt="TransRussia©24" 
              src="/Frame_1707480883_b10f284c3d.jpg"
              fill
              className="absolute inset-0 z-[-1] size-full object-cover"
              style={{ color: 'transparent' }}
            />
            <div className="flex-center container max-w-[1300px] flex-col gap-5 text-center text-white">
              <h2 className="title-72 text-white">Your Journey Starts Here: Essential Travel Info for TransRussia 2026</h2>
              <p className="whitespace-pre-line">Whether you're travelling from across the globe or nearby, we've got you covered. Find all the essential information to ensure a smooth and hassle-free trip to TransRussia Moscow 2026.</p>
              <Link href="/plan-your-travel" className="block">
                <button className="flex-center group w-fit gap-2 overflow-hidden rounded-full px-10 py-3 font-jakarta text-[16px] font-semibold global-transition bg-mainColor2 text-white hover:bg-mainColor4">Plan Your Travel</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Navigation Section */}
      <div className="animated-block">
        <div className="animated-block-target">
          <div className="container overflow-hidden">
            <div className="mb-14 flex flex-wrap justify-between gap-10 lg:items-end">
              <div className="lg:basis-2/3">
                <div className="flex-center w-fit gap-2 py-2 pe-5 pl-1 capitalize">
                  <Image 
                    alt="TransRussia©24" 
                    src="/imgs/logo-icon-3.png"
                    width={20}
                    height={20}
                    className="size-auto w-5"
                    style={{ color: 'transparent' }}
                  />
                  <span>TransRussia/ Skladtech</span>
                </div>
                <h2 className="title-72 text-black my-3">Quick Navigation</h2>
                <p className="whitespace-pre-line">Simplifying Your Participation Journey</p>
              </div>
            </div>
            
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              <div className="group flex flex-col gap-5 rounded-2xl border border-black/10 bg-white p-5 xl:p-7">
                <div className="flex-between">
                  <Image 
                    alt="TransRussia©24" 
                    src="/TR_24_IMG_1001i_81aab0ef5c.jpg"
                    width={64}
                    height={64}
                    className="mb-5 size-16 rounded-full object-cover"
                    style={{ color: 'transparent' }}
                  />
                  <h4 className="title-32">01</h4>
                </div>
                <h4 className="title-32 font-semibold text-black">Become an Exhibitor</h4>
                <p className="mb-10 whitespace-pre-line">Connect with 30,500+ logistics professionals across 3 days for unparalleled networking opportunities.</p>
                <Link href="/exhibiting-enquiry" className="mt-auto block w-full">
                  <button className="flex-center group gap-2 overflow-hidden rounded-full px-10 py-3 font-jakarta text-[16px] font-semibold global-transition bg-mainColor2 text-white hover:bg-mainColor4 w-full">Book a Stand</button>
                </Link>
              </div>
              
              <div className="group flex flex-col gap-5 rounded-2xl border border-black/10 bg-white p-5 xl:p-7">
                <div className="flex-between">
                  <Image 
                    alt="TransRussia©24" 
                    src="/Brochure_Mockup_8_f53822fd4a.png"
                    width={64}
                    height={64}
                    className="mb-5 size-16 rounded-full object-cover"
                    style={{ color: 'transparent' }}
                  />
                  <h4 className="title-32">02</h4>
                </div>
                <h4 className="title-32 font-semibold text-black">Download Event Brochure</h4>
                <p className="mb-10 whitespace-pre-line">Find out what we do and how best we can help you achieve your strategic business goals all wrapped up in our event brochure.</p>
                <Link href="/event-brochure" className="mt-auto block w-full">
                  <button className="flex-center group gap-2 overflow-hidden rounded-full px-10 py-3 font-jakarta text-[16px] font-semibold global-transition bg-mainColor2 text-white hover:bg-mainColor4 w-full">Download Now</button>
                </Link>
              </div>
              
              <div className="group flex flex-col gap-5 rounded-2xl border border-black/10 bg-white p-5 xl:p-7">
                <div className="flex-between">
                  <Image 
                    alt="TransRussia©24" 
                    src="/main_2669dac4e0.jpg"
                    width={64}
                    height={64}
                    className="mb-5 size-16 rounded-full object-cover"
                    style={{ color: 'transparent' }}
                  />
                  <h4 className="title-32">03</h4>
                </div>
                <h4 className="title-32 font-semibold text-black">Become a Visitor</h4>
                <p className="mb-10 whitespace-pre-line">Not ready to become an exhibitor? Why not visit the exhibition for free and find out what to expect for the following edition</p>
                <Link href="/visitor-registration" className="mt-auto block w-full">
                  <button className="flex-center group gap-2 overflow-hidden rounded-full px-10 py-3 font-jakarta text-[16px] font-semibold global-transition bg-mainColor2 text-white hover:bg-mainColor4 w-full">Visitor Registration</button>
                </Link>
              </div>
            </div>
            
            <Image 
              alt="TransRussia©24" 
              src="/imgs/shape.png"
              width={900}
              height={900}
              className="absolute right-0 top-0 z-[-1] size-[900px] object-contain"
              style={{ color: 'transparent' }}
            />
          </div>
        </div>
      </div>

      {/* When and Where Section */}
      <div className="animated-block">
        <div className="animated-block-target">
          <div className="container flex flex-col items-start gap-5 py-10 text-black">
            <h2 className="title-72 text-black mb-5">When and Where</h2>
            <div className="grid w-full gap-5 lg:grid-cols-2">
              <div className="rounded-xl bg-mainColor5 p-5">
                <div className="rte-style">
                  <h3>Venue</h3>
                  <h4 className="font-semibold">Russia, Moscow, Crocus Expo IEC, Pavilion 3</h4>
                </div>
              </div>
              <div className="rounded-xl bg-mainColor5 p-5">
                <div className="rte-style">
                  <h3>Opening Hours</h3>
                  <h4 className="font-semibold">17, 18 March 2026: 10:00 -18:00</h4>
                  <h4 className="font-semibold">19 March 2026: 10:00 -16:00</h4>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div>Loading....</div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="animated-block">
        <div className="animated-block-target">
          <div>
            <div className="relative container" role="region" aria-roledescription="carousel">
              <div className="mb-10 flex flex-col items-center">
                <h2 className="title-72 text-black mt-5">Partners &amp; Sponsors</h2>
              </div>
              
              <div className="overflow-hidden">
                <div className="flex -ml-4 items-stretch">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <Link href="/partner/apace-digital-cargo" className="flex w-full flex-col items-center gap-5 text-center">
                        <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                          <Image 
                            alt="TransRussia©24" 
                            src="/APACE_Digital_Cargo_523bc2c2a2.webp"
                            width={200}
                            height={80}
                            className="size-full object-contain"
                            style={{ color: 'transparent' }}
                          />
                        </div>
                        <small className="text-sm">Apace Digital Cargo</small>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyExhibitPage;