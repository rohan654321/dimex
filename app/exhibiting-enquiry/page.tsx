"use client"
import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const TransRussiaExhibitPage: React.FC = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const backToTopRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Simulate intro loader removal
    const timer = setTimeout(() => {
      if (introRef.current) {
        introRef.current.style.display = 'none';
      }
    }, 1000);

    // Back to top functionality
    const handleScroll = () => {
      if (backToTopRef.current) {
        if (window.scrollY > 300) {
          backToTopRef.current.style.opacity = '1';
          backToTopRef.current.style.transform = 'translateY(0)';
          backToTopRef.current.style.pointerEvents = 'auto';
        } else {
          backToTopRef.current.style.opacity = '0';
          backToTopRef.current.style.transform = 'translateY(10px)';
          backToTopRef.current.style.pointerEvents = 'none';
        }
      }
    };

    // Scroll to top functionality
    const handleBackToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', handleScroll);
    if (backToTopRef.current) {
      backToTopRef.current.addEventListener('click', handleBackToTop);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      if (backToTopRef.current) {
        backToTopRef.current.removeEventListener('click', handleBackToTop);
      }
    };
  }, []);

  const partners = [
    { name: 'Apace Digital Cargo', logo: '/APACE_Digital_Cargo_523bc2c2a2.webp', slug: 'apace-digital-cargo' },
    { name: 'Cargo Insights', logo: '/Cargo_Insights_e965193be1.webp', slug: 'cargo-insights' },
    { name: 'International Coordinating Council for Trans-Eurasian Transportation', logo: '/International_Coordinating_for_Trans0_Eurasian_Transportation_965b26881c.webp', slug: 'international-coordinating-council-for-trans-eurasian-transportation' },
    { name: 'LOGIRUS', logo: '/LOGIRUS_34da1707d5.webp', slug: 'logirus' },
    { name: 'CargoTalk', logo: '/Cargo_Talk_ME_logo_final_ff5213a4fd.jpg', slug: 'cargo-talk' },
    { name: 'Logistics 360 Magazine', logo: '/Logisics_360_magazine_a74756752e.webp', slug: 'logistics-360-magazine' },
    { name: 'BizToday', logo: '/Logo_Biz_Today_International_JPG_dd5d3adcb2.jpg', slug: 'trans-russia-partner-1' },
    { name: 'Logistics.ru', logo: '/Logistics_ru_12a920fd01.webp', slug: 'logistics-ru' },
    { name: 'TravTalkME', logo: '/Trav_Talk_6aedd6c627.webp', slug: 'trav-talk-me' },
    { name: 'The Council of Supply Chain Professionals', logo: '/Council_of_Supply_Chain_Professinoals_03e79f3b06.webp', slug: 'the-council-of-supply-chain-professionals' },
    { name: 'Moneta Tanitim', logo: '/Moneta_Tanitim_184cdc84c1.png', slug: 'trans-russia-partner-Moneta-Tanitim' },
    { name: 'Utikad', logo: '/Utikad_2dea1b273c.webp', slug: 'utikad' },
    { name: 'VTB', logo: '/VTB_16f0fc5875.webp', slug: 'vtb' },
    { name: 'Urban Transport News', logo: '/Urban_Transport_News_Logo_2bf4a1812c.png', slug: 'trans-russia-partner-2' },
    { name: 'WIFFA', logo: '/wiffa_1_971b62e54d.jpg', slug: 'trans-russia-partner-WIFFA' },
    { name: 'UND', logo: '/UND_f47b714866.webp', slug: 'und' },
    { name: 'RZD-Partner', logo: '/RZD_Partner_0ac7d0f0a3.webp', slug: 'rzd-partner' },
    { name: 'RZD Business Asset', logo: '/RZD_Business_Asset_aca7ff2f81.webp', slug: 'rzd-business-asset' },
    { name: 'Asia MH', logo: '/Asis_MH_dabd0b8a7b.webp', slug: 'asia-mh' },
    { name: 'The Business Year', logo: '/The_Business_Year_e20d1c0f9f.png', slug: 'the-business-year' },
    { name: 'ICIB', logo: '/thumbnail_ICIB_Logo_24_834a8e19c7.jpg', slug: 'trans-russia-partner-3' },
    { name: 'ATI.SU', logo: '/ati_su_b4828c6c22.webp', slug: 'ati-su' },
    { name: 'ACU Logo', logo: '/air_cargo_update_619deee571.webp', slug: 'acu-logo' },
    { name: 'CCL Logistics', logo: '/CCL_Logistics_03f22ff0ec.webp', slug: 'ccl-logistics' },
    { name: 'Delo', logo: '/delo_8f41577290.webp', slug: 'delo' },
    { name: 'Industry Outlook', logo: '/Industry_Outlook_675c960053.webp', slug: 'industry-outlook' },
    { name: 'Rail Analysis', logo: '/Rail_Analysis_4f6be2dfa1.webp', slug: 'rail-analysis' },
    { name: 'Plant & Equipment', logo: '/Plan_and_Equipment_e86fc0b547.webp', slug: 'plant-and-equipment' },
    { name: 'Indian Transport & Logistics News (ITLN)', logo: '/logo_bedd7fc0a0.png', slug: 'indian-transport-and-logistics-news-itln' },
    { name: 'ECARGOLOG', logo: '/Trans_Russia_Media_Partners_Logo_3_786e33bc12.png', slug: 'ecargolog' },
    { name: 'Northern Lights Communications', logo: '/Trans_Russia_Media_Partners_Logo_5_32b91a53eb.png', slug: 'northern-lights-communications' },
    { name: 'Dubai Exporters', logo: '/Trans_Russia_Media_Partners_Logo_2_643306cd6f.png', slug: 'dubai-exporters' },
    { name: 'Transport Advancement', logo: '/Trans_Russia_Media_Partners_Logo_1_472363416a.png', slug: 'transport-advancement' },
    { name: 'OEM Update', logo: '/Trans_Russia_Media_Partners_Logo_4_4f9087bdc6.png', slug: 'oem-update' },
    { name: 'Logistics Insider', logo: '/Insider_logistics_6983a0e400.png', slug: 'trans-russia-partner-logisitics-insider' }
  ];

  return (
    <>
      <Head>
        <title>Logistics Trade Show Expo | Exhibit at TransRussia</title>
        <meta name="description" content="Interested in exhibiting at TransRussia 2025? Complete the form for more information on exhibiting opportunities at Russia's premier logistics trade show expo." />
        <meta name="viewport" content="width=device-width" />
        <meta charSet="utf-8" />
        <meta property="og:title" content="Logistics Trade Show Expo | Exhibit at TransRussia" />
        <meta property="og:description" content="Interested in exhibiting at TransRussia 2025? Complete the form for more information on exhibiting opportunities at Russia's premier logistics trade show expo." />
        <link rel="canonical" href="/index.htm" />
      </Head>

      <div id="__next">
        <noscript>
          <div>
            <img
              alt=""
              loading="lazy"
              width="1"
              height="1"
              style={{ color: 'transparent' }}
              src="/watch/15004633"
            />
          </div>
        </noscript>

        <div className="relative min-h-screen font-parabolica antialiased __variable_646807 __variable_2c6616">
          {/* Intro Loader */}
          <div
            ref={introRef}
            id="intro"
            className="fixed inset-0 z-[100] grid place-content-center bg-mainColor1"
          >
            <div className="loader"></div>
          </div>

          {/* Back to Top Button */}
          <div className="fixed bottom-3 right-3 lg:bottom-10 lg:right-2 z-50 transition-all duration-300 opacity-0 translate-y-10 pointer-events-none">
            <button
              ref={backToTopRef}
              aria-label="Back to top"
              className="m-0 rounded-full border-none bg-white p-0 outline-none drop-shadow-lg"
            >
              <svg className="size-10 fill-mainColor1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22 12c0-5.522-4.476-10-10-10C6.479 2 2 6.479 2 12c0 5.524 4.478 10 10 10c5.524 0 10-4.476 10-10zm-14.53.28a.75.75 0 0 1-.073-.976l.073-.084l4-4a.75.75 0 0 1 .977-.073l.085.072l4 4.002a.75.75 0 0 1-.977 1.133l-.084-.073l-2.72-2.721v6.691a.75.75 0 0 1-.649.743l-.102.007a.75.75 0 0 1-.743-.648l-.007-.102v-6.69l-2.72 2.72a.75.75 0 0 1-.976.072l-.084-.072z"></path>
              </svg>
            </button>
          </div>

          {/* Main Content */}
          <div>
            <div className="page-spacing-wrapper">
              <div className="relative z-[1] flex flex-col justify-end bg-mainColor5 !pt-48">
                <div className="container flex flex-col justify-end !pt-0 !pb-10">
                  <h2 className="title-72 text-black">Enquiry to Exhibit</h2>
                  <p className="max-w-6xl whitespace-pre-line py-5">
                    If you'd like to exhibit at TransRussia 2026 or would like more information about exhibiting opportunities, please complete the form below and a member of our team will be in touch with you in the coming week.
                  </p>
                </div>
              </div>

              {/* Form Section */}
              <div className="animated-block">
                <div className="animated-block-target">
                  <div className="relative overflow-hidden">
                    <div className="container py-20">
                      <div className="grid gap-10 lg:grid-cols-2">
                        {/* Left Column */}
                        <div className="flex flex-col">
                          <div>
                            <h3 className="text-3xl font-semibold my-5 title-mainColor2 lg:text-6xl">
                              Be Part of Eurasia's Leading Transport & Logistics Exhibition
                            </h3>
                          </div>
                          <div>
                            <div className="rte-style [&amp;_h1]:lg:text-4xl [&amp;_h2]:lg:text-3xl [&amp;_h3]:lg:text-2xl [&amp;_ul]:list-disc [&amp;_ul]:pl-5 [&amp;_ol]:list-decimal [&amp;_ol]:pl-5 [&amp;_a]:underline [&amp;_blockquote]:relative [&amp;_blockquote]:italic [&amp;_blockquote]:bg-[#f9f9f9] [&amp;_blockquote]:text-xl [&amp;_blockquote]:w-fit [&amp;_blockquote]:border-l-4 [&amp;_blockquote]:border-black [&amp;_blockquote]:p-5 [&amp;_blockquote]:ml-5 my-5"></div>
                          </div>
                          <div>
                            <div className="rte-style [&amp;_h1]:lg:text-4xl [&amp;_h2]:lg:text-3xl [&amp;_h3]:lg:text-2xl [&amp;_ul]:list-disc [&amp;_ul]:pl-5 [&amp;_ol]:list-decimal [&amp;_ol]:pl-5 [&amp;_a]:underline [&amp;_blockquote]:relative [&amp;_blockquote]:italic [&amp;_blockquote]:bg-[#f9f9f9] [&amp;_blockquote]:text-xl [&amp;_blockquote]:w-fit [&amp;_blockquote]:border-l-4 [&amp;_blockquote]:border-black [&amp;_blockquote]:p-5 [&amp;_blockquote]:ml-5 my-5">
                              <p>Showcase your freight, logistics, transport, and supply chain solutions to the companies driving Eurasia's <strong>$110B+</strong> logistics market.</p>
                              <p>&nbsp;</p>
                              <p>From freight forwarding and warehousing to digital platforms and smart supply chain technologies, TransRussia is the gateway to connect with buyers seeking partners to strengthen and expand their logistics networks.</p>
                              <p>&nbsp;</p>
                              <p>Position your business at the heart of Eurasia's transport corridors and unlock new growth opportunities.</p>
                              <p>&nbsp;</p>
                              <hr />
                            </div>
                            <div className="grid grid-cols-2 gap-x-5 gap-y-10">
                              <div className="font-semibold">
                                <h4 className="text-mainColor1 mb-2 text-3xl lg:text-5xl">30,500</h4>
                                <p className="text-xl">Visitors</p>
                              </div>
                              <div className="font-semibold">
                                <h4 className="text-mainColor1 mb-2 text-3xl lg:text-5xl">600+</h4>
                                <p className="text-xl">Exhibitors</p>
                              </div>
                              <div className="font-semibold">
                                <h4 className="text-mainColor1 mb-2 text-3xl lg:text-5xl">160+</h4>
                                <p className="text-xl">Speakers</p>
                              </div>
                              <div className="font-semibold">
                                <h4 className="text-mainColor1 mb-2 text-3xl lg:text-5xl">50+</h4>
                                <p className="text-xl">Countries Represented</p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="rte-style [&amp;_h1]:lg:text-4xl [&amp;_h2]:lg:text-3xl [&amp;_h3]:lg:text-2xl [&amp;_ul]:list-disc [&amp;_ul]:pl-5 [&amp;_ol]:list-decimal [&amp;_ol]:pl-5 [&amp;_a]:underline [&amp;_blockquote]:relative [&amp;_blockquote]:italic [&amp;_blockquote]:bg-[#f9f9f9] [&amp;_blockquote]:text-xl [&amp;_blockquote]:w-fit [&amp;_blockquote]:border-l-4 [&amp;_blockquote]:border-black [&amp;_blockquote]:p-5 [&amp;_blockquote]:ml-5 my-5">
                              <p>&nbsp;</p>
                              <hr />
                              <p>&nbsp;</p>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-3xl font-semibold my-5 title-mainColor2 lg:text-5xl">Who You'll Meet?</h3>
                            <div className="rte-style [&amp;_h1]:lg:text-4xl [&amp;_h2]:lg:text-3xl [&amp;_h3]:lg:text-2xl [&amp;_ul]:list-disc [&amp;_ul]:pl-5 [&amp;_ol]:list-decimal [&amp;_ol]:pl-5 [&amp;_a]:underline [&amp;_blockquote]:relative [&amp;_blockquote]:italic [&amp;_blockquote]:bg-[#f9f9f9] [&amp;_blockquote]:text-xl [&amp;_blockquote]:w-fit [&amp;_blockquote]:border-l-4 [&amp;_blockquote]:border-black [&amp;_blockquote]:p-5 [&amp;_blockquote]:ml-5 my-5">
                              <ul>
                                <li>Freight Forwarders &amp; Transport Operators<br />&nbsp;</li>
                                <li>Logistics Service Providers &amp; 3PLs<br />&nbsp;</li>
                                <li>Warehousing &amp; Distribution Companies<br />&nbsp;</li>
                                <li>Retailers, Manufacturers &amp; Importers<br />&nbsp;</li>
                                <li>Customs Brokers &amp; Trade Agents<br />&nbsp;</li>
                                <li>IT &amp; Digital Supply Chain Solution Providers<br />&nbsp;</li>
                                <li>Government &amp; Infrastructure Decision-Makers</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Right Column - Form */}
                        <div className="flex flex-col">
                          <div className="container form-style !py-0">
                            <div dangerouslySetInnerHTML={{
                              __html: `
                                <div class="_form_196"></div>
                                <script src="https://ite681.activehosted.com/f/embed.php?id=196" charset="utf-8"></script>
                                <p>
                                  <span style="background-color:rgb(255,255,255);color:rgb(13,13,13);font-family:ui-sans-serif, -apple-system, system-ui, 'Segoe UI', Roboto, Ubuntu, Cantarell, 'Noto Sans', sans-serif, Helvetica, 'Apple Color Emoji', Arial, 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:11px;">
                                    T&amp;Cs: By submitting the TransRussia form, you agree to receive marketing communications, updates, and promotional materials from us. You can unsubscribe anytime by clicking the "unsubscribe" link in our emails. For more information on how we handle your data, please refer to our
                                  </span>
                                  <a href="https://ite.group/en/privacy/">
                                    <span style="background-color:rgb(255,255,255);color:rgb(13,13,13);font-family:ui-sans-serif, -apple-system, system-ui, 'Segoe UI', Roboto, Ubuntu, Cantarell, 'Noto Sans', sans-serif, Helvetica, 'Apple Color Emoji', Arial, 'Segoe UI Emoji', 'Segoe UI Symbol';font-size:11px;">
                                      Privacy Policy
                                    </span>
                                  </a>.
                                </p>
                              `
                            }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Partners & Sponsors Section */}
              <div className="animated-block">
                <div className="animated-block-target">
                  <div>
                    <div className="relative container" role="region" aria-roledescription="carousel">
                      <div className="mb-10 flex flex-col items-center">
                        <h2 className="title-72 text-black mt-5">Partners & Sponsors</h2>
                      </div>
                      <div className="overflow-hidden">
                        <div className="flex -ml-4 items-stretch">
                          {partners.map((partner, index) => (
                            <div
                              key={index}
                              role="group"
                              aria-roledescription="slide"
                              className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                            >
                              <Link
                                href={`/partner/${partner.slug}`}
                                className="flex w-full flex-col items-center gap-5 text-center"
                              >
                                <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                                  <Image
                                    alt="TransRussia©24"
                                    width={500}
                                    height={500}
                                    className="size-full object-contain"
                                    style={{ color: 'transparent' }}
                                    src={partner.logo}
                                  />
                                </div>
                                <small className="text-sm">{partner.name}</small>
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
          </div>

        </div>
      </div>
    </>
  );
};

export default TransRussiaExhibitPage;