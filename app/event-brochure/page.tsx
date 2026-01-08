import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BrochurePageContent: React.FC = () => {
  return (
    <>
      <div className="page-spacing-wrapper">
        <div className="relative z-[1] flex flex-col justify-end bg-mainColor5 !pt-48">
          <div className="container flex flex-col justify-end !pt-0 !pb-10">
            <h2 className="title-72 text-black">Browse Through Your Event Brochure</h2>
            <p className="max-w-6xl whitespace-pre-line py-5">
              Almost there, your brochure is waiting for you to download
            </p>
          </div>
        </div>
        
        <div className="animated-block">
          <div className="animated-block-target">
            <div className="relative overflow-hidden">
              <div className="container py-20">
                <div className="grid gap-10 lg:grid-cols-2">
                  {/* Left Content Column */}
                  <div className="flex flex-col">
                    <div>
                      <h3 className="text-3xl font-semibold my-5 title-mainColor2 lg:text-6xl">
                        Your Roadmap to TransRussia 2026
                      </h3>
                      <div className="rte-style [&_h1]:lg:text-4xl [&_h2]:lg:text-3xl [&_h3]:lg:text-2xl [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_a]:underline [&_blockquote]:relative [&_blockquote]:italic [&_blockquote]:bg-[#f9f9f9] [&_blockquote]:text-xl [&_blockquote]:w-fit [&_blockquote]:border-l-4 [&_blockquote]:border-black [&_blockquote]:p-5 [&_blockquote]:ml-5 my-5">
                        <p>
                          Position your brand at the heart of Russia and Eurasia's logistics market. 
                          As the region's leading B2B exhibition for transport and logistics services, 
                          <strong>TransRussia</strong> connects international freight forwarders, carriers, 
                          and logistics technology providers with thousands of qualified buyers from 
                          across 50+ countries.
                        </p>
                        <p>&nbsp;</p>
                        <hr />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-3xl font-semibold my-5 title-mainColor2 lg:text-5xl">
                        Download the Event Brochure to:
                      </h3>
                      <div className="rte-style [&_h1]:lg:text-4xl [&_h2]:lg:text-3xl [&_h3]:lg:text-2xl [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_a]:underline [&_blockquote]:relative [&_blockquote]:italic [&_blockquote]:bg-[#f9f9f9] [&_blockquote]:text-xl [&_blockquote]:w-fit [&_blockquote]:border-l-4 [&_blockquote]:border-black [&_blockquote]:p-5 [&_blockquote]:ml-5 my-5">
                        <p>
                          • Explore exhibitor opportunities and participation packages.<br />
                          <br />
                          • Understand visitor demographics, cargo volumes, and purchasing trends.<br />
                          <br />
                          • Discover how TransRussia delivers measurable ROI and long-term business growth.<br />
                          &nbsp;
                        </p>
                        <hr />
                      </div>
                    </div>
                    
                    <div>
                      <div className="rte-style [&_h1]:lg:text-4xl [&_h2]:lg:text-3xl [&_h3]:lg:text-2xl [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_a]:underline [&_blockquote]:relative [&_blockquote]:italic [&_blockquote]:bg-[#f9f9f9] [&_blockquote]:text-xl [&_blockquote]:w-fit [&_blockquote]:border-l-4 [&_blockquote]:border-black [&_blockquote]:p-5 [&_blockquote]:ml-5 my-5">
                        <h2>
                          <strong>Success In Numbers</strong>
                          <br />
                          &nbsp;
                        </h2>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-x-5 gap-y-10">
                        <div className="font-semibold">
                          <h4 className="text-mainColor1 mb-2 text-3xl lg:text-5xl">30,500</h4>
                          <p className="text-xl">Visitors</p>
                        </div>
                        <div className="font-semibold">
                          <h4 className="text-mainColor1 mb-2 text-3xl lg:text-5xl">600+</h4>
                          <p className="text-xl">Exhibitor</p>
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
                      <div className="rte-style [&_h1]:lg:text-4xl [&_h2]:lg:text-3xl [&_h3]:lg:text-2xl [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_a]:underline [&_blockquote]:relative [&_blockquote]:italic [&_blockquote]:bg-[#f9f9f9] [&_blockquote]:text-xl [&_blockquote]:w-fit [&_blockquote]:border-l-4 [&_blockquote]:border-black [&_blockquote]:p-5 [&_blockquote]:ml-5 my-5">
                        <p style={{ textAlign: 'center' }}>
                          <Image
                            src="/Brochure_Mockup_8_f53822fd4a.png"
                            alt="Brochure Mockup (8).png"
                            width={1080}
                            height={1080}
                            className="image_resized"
                            style={{ aspectRatio: '1080/1080', width: '45.62%' }}
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Form Column */}
                  <div className="flex flex-col">
                    <div className="container form-style !py-0">
                      <div>
                        {/* ActiveCampaign Form */}
                        <div className="raw-html-embed">
                          <div className="_form_202"></div>
                          <script src="https://ite681.activehosted.com/f/embed.php?id=202" charSet="utf-8"></script>
                        </div>
                        
                        <p>
                          <span style={{
                            backgroundColor: 'rgb(255,255,255)',
                            color: 'rgb(13,13,13)',
                            fontFamily: 'ui-sans-serif, -apple-system, system-ui, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, Helvetica, "Apple Color Emoji", Arial, "Segoe UI Emoji", "Segoe UI Symbol"',
                            fontSize: '11px'
                          }}>
                            T&amp;Cs: By submitting a TransRussia form, you agree to receive marketing communications, updates, and promotional materials from us. You can unsubscribe anytime by clicking the "unsubscribe" link in our emails. For more information on how we handle your data, please refer to our{' '}
                          </span>
                          <a href="https://ite.group/en/privacy/">
                            <span style={{
                              backgroundColor: 'rgb(255,255,255)',
                              color: 'rgb(13,13,13)',
                              fontFamily: 'ui-sans-serif, -apple-system, system-ui, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, Helvetica, "Apple Color Emoji", Arial, "Segoe UI Emoji", "Segoe UI Symbol"',
                              fontSize: '11px'
                            }}>
                              Privacy Policy
                            </span>
                          </a>
                          <span style={{
                            backgroundColor: 'rgb(255,255,255)',
                            color: 'rgb(13,13,13)',
                            fontFamily: 'ui-sans-serif, -apple-system, system-ui, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, Helvetica, "Apple Color Emoji", Arial, "Segoe UI Emoji", "Segoe UI Symbol"',
                            fontSize: '11px'
                          }}>
                            .
                          </span>
                        </p>
                      </div>
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
                    {/* Partner 1 */}
                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <Link href="/partner/apace-digital-cargo" className="flex w-full flex-col items-center gap-5 text-center">
                        <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                          <Image
                            src="/APACE_Digital_Cargo_523bc2c2a2.webp"
                            alt="TransRussia©24"
                            width={500}
                            height={500}
                            className="size-full object-contain"
                          />
                        </div>
                        <small className="text-sm">Apace Digital Cargo</small>
                      </Link>
                    </div>
                    
                    {/* Partner 2 */}
                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <Link href="/partner/cargo-insights" className="flex w-full flex-col items-center gap-5 text-center">
                        <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                          <Image
                            src="/Cargo_Insights_e965193be1.webp"
                            alt="TransRussia©24"
                            width={500}
                            height={500}
                            className="size-full object-contain"
                          />
                        </div>
                        <small className="text-sm">Cargo Insights</small>
                      </Link>
                    </div>
                    
                    {/* Partner 3 */}
                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <Link href="/partner/international-coordinating-council-for-trans-eurasian-transportation" className="flex w-full flex-col items-center gap-5 text-center">
                        <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                          <Image
                            src="/International_Coordinating_for_Trans0_Eurasian_Transportation_965b26881c.webp"
                            alt="TransRussia©24"
                            width={500}
                            height={500}
                            className="size-full object-contain"
                          />
                        </div>
                        <small className="text-sm">International Coordinating Council for Trans-Eurasian Transportation</small>
                      </Link>
                    </div>
                    
                    {/* Partner 4 */}
                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <Link href="/partner/logirus" className="flex w-full flex-col items-center gap-5 text-center">
                        <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                          <Image
                            src="/LOGIRUS_34da1707d5.webp"
                            alt="TransRussia©24"
                            width={500}
                            height={500}
                            className="size-full object-contain"
                          />
                        </div>
                        <small className="text-sm">LOGIRUS</small>
                      </Link>
                    </div>
                    
                    {/* Partner 5 */}
                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <Link href="/partner/cargo-talk" className="flex w-full flex-col items-center gap-5 text-center">
                        <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                          <Image
                            src="/Cargo_Talk_ME_logo_final_ff5213a4fd.jpg"
                            alt="TransRussia©24"
                            width={500}
                            height={500}
                            className="size-full object-contain"
                          />
                        </div>
                        <small className="text-sm">CargoTalk</small>
                      </Link>
                    </div>
                    
                    {/* Partner 6 */}
                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <Link href="/partner/logistics-360-magazine" className="flex w-full flex-col items-center gap-5 text-center">
                        <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                          <Image
                            src="/Logisics_360_magazine_a74756752e.webp"
                            alt="TransRussia©24"
                            width={500}
                            height={500}
                            className="size-full object-contain"
                          />
                        </div>
                        <small className="text-sm"> Logistics 360 Magazine</small>
                      </Link>
                    </div>
                    
                    {/* Partner 7 */}
                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <Link href="/partner/trans-russia-partner-1" className="flex w-full flex-col items-center gap-5 text-center">
                        <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                          <Image
                            src="/Logo_Biz_Today_International_JPG_dd5d3adcb2.jpg"
                            alt="TransRussia©24"
                            width={500}
                            height={500}
                            className="size-full object-contain"
                          />
                        </div>
                        <small className="text-sm">BizToday</small>
                      </Link>
                    </div>
                    
                    {/* Partner 8 */}
                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <Link href="/partner/logistics-ru" className="flex w-full flex-col items-center gap-5 text-center">
                        <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                          <Image
                            src="/Logistics_ru_12a920fd01.webp"
                            alt="TransRussia©24"
                            width={500}
                            height={500}
                            className="size-full object-contain"
                          />
                        </div>
                        <small className="text-sm">Logistics.ru</small>
                      </Link>
                    </div>
                    
                    {/* Partner 9 */}
                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <Link href="/partner/trav-talk-me" className="flex w-full flex-col items-center gap-5 text-center">
                        <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                          <Image
                            src="/Trav_Talk_6aedd6c627.webp"
                            alt="TransRussia©24"
                            width={500}
                            height={500}
                            className="size-full object-contain"
                          />
                        </div>
                        <small className="text-sm">TravTalkME</small>
                      </Link>
                    </div>
                    
                    {/* Partner 10 */}
                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <Link href="/partner/the-council-of-supply-chain-professionals" className="flex w-full flex-col items-center gap-5 text-center">
                        <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                          <Image
                            src="/Council_of_Supply_Chain_Professinoals_03e79f3b06.webp"
                            alt="TransRussia©24"
                            width={500}
                            height={500}
                            className="size-full object-contain"
                          />
                        </div>
                        <small className="text-sm">The Council of Supply Chain Professionals</small>
                      </Link>
                    </div>
                    
                    {/* Partner 11 */}
                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <Link href="/partner/trans-russia-partner-Moneta-Tanitim" className="flex w-full flex-col items-center gap-5 text-center">
                        <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                          <Image
                            src="/Moneta_Tanitim_184cdc84c1.png"
                            alt="TransRussia©24"
                            width={500}
                            height={500}
                            className="size-full object-contain"
                          />
                        </div>
                        <small className="text-sm">Moneta Tanitim</small>
                      </Link>
                    </div>
                    
                    {/* Partner 12 */}
                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <Link href="/partner/utikad" className="flex w-full flex-col items-center gap-5 text-center">
                        <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                          <Image
                            src="/Utikad_2dea1b273c.webp"
                            alt="TransRussia©24"
                            width={500}
                            height={500}
                            className="size-full object-contain"
                          />
                        </div>
                        <small className="text-sm">Utikad</small>
                      </Link>
                    </div>
                    
                    {/* Partner 13 */}
                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <Link href="/partner/vtb" className="flex w-full flex-col items-center gap-5 text-center">
                        <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                          <Image
                            src="/VTB_16f0fc5875.webp"
                            alt="TransRussia©24"
                            width={500}
                            height={500}
                            className="size-full object-contain"
                          />
                        </div>
                        <small className="text-sm">VTB</small>
                      </Link>
                    </div>
                    
                    {/* Partner 14 */}
                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <Link href="/partner/trans-russia-partner-2" className="flex w-full flex-col items-center gap-5 text-center">
                        <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                          <Image
                            src="/Urban_Transport_News_Logo_2bf4a1812c.png"
                            alt="TransRussia©24"
                            width={500}
                            height={500}
                            className="size-full object-contain"
                          />
                        </div>
                        <small className="text-sm">Urban Transport News</small>
                      </Link>
                    </div>
                    
                    {/* Partner 15 */}
                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <Link href="/partner/trans-russia-partner-WIFFA" className="flex w-full flex-col items-center gap-5 text-center">
                        <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                          <Image
                            src="/wiffa_1_971b62e54d.jpg"
                            alt="TransRussia©24"
                            width={500}
                            height={500}
                            className="size-full object-contain"
                          />
                        </div>
                        <small className="text-sm">WIFFA</small>
                      </Link>
                    </div>
                    
                    {/* Partner 16 */}
                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <Link href="/partner/und" className="flex w-full flex-col items-center gap-5 text-center">
                        <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                          <Image
                            src="/UND_f47b714866.webp"
                            alt="TransRussia©24"
                            width={500}
                            height={500}
                            className="size-full object-contain"
                          />
                        </div>
                        <small className="text-sm">UND</small>
                      </Link>
                    </div>
                    
                    {/* Partner 17 */}
                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <Link href="/partner/rzd-partner" className="flex w-full flex-col items-center gap-5 text-center">
                        <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                          <Image
                            src="/RZD_Partner_0ac7d0f0a3.webp"
                            alt="TransRussia©24"
                            width={500}
                            height={500}
                            className="size-full object-contain"
                          />
                        </div>
                        <small className="text-sm">RZD-Partner</small>
                      </Link>
                    </div>
                    
                    {/* Partner 18 */}
                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <Link href="/partner/rzd-business-asset" className="flex w-full flex-col items-center gap-5 text-center">
                        <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                          <Image
                            src="/RZD_Business_Asset_aca7ff2f81.webp"
                            alt="TransRussia©24"
                            width={500}
                            height={500}
                            className="size-full object-contain"
                          />
                        </div>
                        <small className="text-sm">RZD Business Asset</small>
                      </Link>
                    </div>
                    
                    {/* Partner 19 */}
                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <Link href="/partner/asia-mh" className="flex w-full flex-col items-center gap-5 text-center">
                        <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                          <Image
                            src="/Asis_MH_dabd0b8a7b.webp"
                            alt="TransRussia©24"
                            width={500}
                            height={500}
                            className="size-full object-contain"
                          />
                        </div>
                        <small className="text-sm">Asia MH</small>
                      </Link>
                    </div>
                    
                    {/* Partner 20 */}
                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <Link href="/partner/the-business-year" className="flex w-full flex-col items-center gap-5 text-center">
                        <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                          <Image
                            src="/The_Business_Year_e20d1c0f9f.png"
                            alt="TransRussia©24"
                            width={500}
                            height={500}
                            className="size-full object-contain"
                          />
                        </div>
                        <small className="text-sm">The Business Year</small>
                      </Link>
                    </div>
                    
                    {/* Partner 21 */}
                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <Link href="/partner/trans-russia-partner-3" className="flex w-full flex-col items-center gap-5 text-center">
                        <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                          <Image
                            src="/thumbnail_ICIB_Logo_24_834a8e19c7.jpg"
                            alt="TransRussia©24"
                            width={500}
                            height={500}
                            className="size-full object-contain"
                          />
                        </div>
                        <small className="text-sm"> ICIB</small>
                      </Link>
                    </div>
                    
                    {/* Partner 22 */}
                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <Link href="/partner/ati-su" className="flex w-full flex-col items-center gap-5 text-center">
                        <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                          <Image
                            src="/ati_su_b4828c6c22.webp"
                            alt="TransRussia©24"
                            width={500}
                            height={500}
                            className="size-full object-contain"
                          />
                        </div>
                        <small className="text-sm">ATI.SU</small>
                      </Link>
                    </div>
                    
                    {/* Partner 23 */}
                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <Link href="/partner/acu-logo" className="flex w-full flex-col items-center gap-5 text-center">
                        <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                          <Image
                            src="/air_cargo_update_619deee571.webp"
                            alt="TransRussia©24"
                            width={500}
                            height={500}
                            className="size-full object-contain"
                          />
                        </div>
                        <small className="text-sm">ACU Logo</small>
                      </Link>
                    </div>
                    
                    {/* Partner 24 */}
                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <Link href="/partner/ccl-logistics" className="flex w-full flex-col items-center gap-5 text-center">
                        <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                          <Image
                            src="/CCL_Logistics_03f22ff0ec.webp"
                            alt="TransRussia©24"
                            width={500}
                            height={500}
                            className="size-full object-contain"
                          />
                        </div>
                        <small className="text-sm">CCL Logistics</small>
                      </Link>
                    </div>
                    
                    {/* Partner 25 */}
                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <Link href="/partner/delo" className="flex w-full flex-col items-center gap-5 text-center">
                        <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                          <Image
                            src="/delo_8f41577290.webp"
                            alt="TransRussia©24"
                            width={500}
                            height={500}
                            className="size-full object-contain"
                          />
                        </div>
                        <small className="text-sm">Delo</small>
                      </Link>
                    </div>
                    
                    {/* Partner 26 */}
                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <Link href="/partner/industry-outlook" className="flex w-full flex-col items-center gap-5 text-center">
                        <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                          <Image
                            src="/Industry_Outlook_675c960053.webp"
                            alt="TransRussia©24"
                            width={500}
                            height={500}
                            className="size-full object-contain"
                          />
                        </div>
                        <small className="text-sm">Industry Outlook</small>
                      </Link>
                    </div>
                    
                    {/* Partner 27 */}
                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <Link href="/partner/rail-analysis" className="flex w-full flex-col items-center gap-5 text-center">
                        <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                          <Image
                            src="/Rail_Analysis_4f6be2dfa1.webp"
                            alt="TransRussia©24"
                            width={500}
                            height={500}
                            className="size-full object-contain"
                          />
                        </div>
                        <small className="text-sm">Rail Analysis</small>
                      </Link>
                    </div>
                    
                    {/* Partner 28 */}
                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <Link href="/partner/plant-and-equipment" className="flex w-full flex-col items-center gap-5 text-center">
                        <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                          <Image
                            src="/Plan_and_Equipment_e86fc0b547.webp"
                            alt="TransRussia©24"
                            width={500}
                            height={500}
                            className="size-full object-contain"
                          />
                        </div>
                        <small className="text-sm">Plant & Equipment</small>
                      </Link>
                    </div>
                    
                    {/* Partner 29 */}
                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <Link href="/partner/indian-transport-and-logistics-news-itln" className="flex w-full flex-col items-center gap-5 text-center">
                        <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                          <Image
                            src="/logo_bedd7fc0a0.png"
                            alt="TransRussia©24"
                            width={500}
                            height={500}
                            className="size-full object-contain"
                          />
                        </div>
                        <small className="text-sm">Indian Transport & Logistics News (ITLN) </small>
                      </Link>
                    </div>
                    
                    {/* Partner 30 */}
                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <Link href="/partner/ecargolog" className="flex w-full flex-col items-center gap-5 text-center">
                        <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                          <Image
                            src="/Trans_Russia_Media_Partners_Logo_3_786e33bc12.png"
                            alt="TransRussia©24"
                            width={500}
                            height={500}
                            className="size-full object-contain"
                          />
                        </div>
                        <small className="text-sm">ECARGOLOG</small>
                      </Link>
                    </div>
                    
                    {/* Partner 31 */}
                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <Link href="/partner/northern-lights-communications" className="flex w-full flex-col items-center gap-5 text-center">
                        <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                          <Image
                            src="/Trans_Russia_Media_Partners_Logo_5_32b91a53eb.png"
                            alt="TransRussia©24"
                            width={500}
                            height={500}
                            className="size-full object-contain"
                          />
                        </div>
                        <small className="text-sm">Northern Lights Communications</small>
                      </Link>
                    </div>
                    
                    {/* Partner 32 */}
                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <Link href="/partner/dubai-exporters" className="flex w-full flex-col items-center gap-5 text-center">
                        <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                          <Image
                            src="/Trans_Russia_Media_Partners_Logo_2_643306cd6f.png"
                            alt="TransRussia©24"
                            width={500}
                            height={500}
                            className="size-full object-contain"
                          />
                        </div>
                        <small className="text-sm">Dubai Exporters</small>
                      </Link>
                    </div>
                    
                    {/* Partner 33 */}
                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <Link href="/partner/transport-advancement" className="flex w-full flex-col items-center gap-5 text-center">
                        <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                          <Image
                            src="/Trans_Russia_Media_Partners_Logo_1_472363416a.png"
                            alt="TransRussia©24"
                            width={500}
                            height={500}
                            className="size-full object-contain"
                          />
                        </div>
                        <small className="text-sm">Transport Advancement</small>
                      </Link>
                    </div>
                    
                    {/* Partner 34 */}
                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <Link href="/partner/oem-update" className="flex w-full flex-col items-center gap-5 text-center">
                        <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                          <Image
                            src="/Trans_Russia_Media_Partners_Logo_4_4f9087bdc6.png"
                            alt="TransRussia©24"
                            width={500}
                            height={500}
                            className="size-full object-contain"
                          />
                        </div>
                        <small className="text-sm">OEM Update</small>
                      </Link>
                    </div>
                    
                    {/* Partner 35 */}
                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <Link href="/partner/trans-russia-partner-logisitics-insider" className="flex w-full flex-col items-center gap-5 text-center">
                        <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                          <Image
                            src="/Insider_logistics_6983a0e400.png"
                            alt="TransRussia©24"
                            width={500}
                            height={500}
                            className="size-full object-contain"
                          />
                        </div>
                        <small className="text-sm">Logistics Insider</small>
                      </Link>
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

export default BrochurePageContent;