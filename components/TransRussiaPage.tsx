// components/TransRussiaPage.tsx
"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Types
interface TextLink {
  id: string;
  Text: string;
  LinkTo: string;
  NewTab: boolean;
}

interface NavData {
  id: string;
  Title: string;
  LinkTo: string | null;
  MenuAttached: boolean;
  Links: TextLink[];
}

interface Button {
  id: string;
  Text: string;
  Theme: string;
  LinkTo: string;
  NewTab: boolean;
}

interface Partner {
  id: string;
  attributes: {
    Name: string;
    Logo: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    Slug: string;
  };
}

interface FooterColumnData {
  id: string;
  Title: string | null;
  Content: {
    Content: string;
  };
  Socials: Array<{
    LogoORBanner: {
      data: {
        attributes: {
          url: string;
          width: number;
          height: number;
        };
      };
    };
    Link: string;
    Target: string;
  }>;
}

interface FooterColumn {
  id: string;
  Data: FooterColumnData[];
}

interface Props {
  navbarData: {
    NavText: {
      Text1: string;
      Text2: string;
    };
    Data: NavData[];
    Buttons: Button[];
    Copyright: string;
    EndLinks: TextLink[];
  };
  pageData: {
    Header: {
      Title: string;
      Content: string;
    };
    Sections: Array<{
      __typename: string;
      id: string;
      Data?: string;
      Partners?: {
        data: Partner[];
      };
      PartnersSectionTitle?: string;
    }>;
  };
  footerData: {
    FooterColumns: FooterColumn[];
    CopyrightText: string;
    EndLinks: TextLink[];
  };
}

const TransRussiaPage: React.FC<Props> = ({ navbarData, pageData, footerData }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Handle back to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle back to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toggle dropdown
  const toggleDropdown = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  // Render navigation links
  const renderNavLinks = () => {
    return navbarData.Data.map((item) => {
      if (!item.MenuAttached) {
        return (
          <a
            key={item.id}
            href={item.LinkTo || '#'}
            className="hover-underlined relative"
            target={item.LinkTo?.startsWith('http') ? '_blank' : '_self'}
            rel={item.LinkTo?.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {item.Title}
          </a>
        );
      }

      return (
        <nav key={item.id} className="relative z-10 flex max-w-max flex-1 items-center justify-center group p-0">
          <div style={{ position: 'relative' }}>
            <ul className="group flex flex-1 list-none items-center justify-center space-x-1">
              <li>
                <button
                  onClick={() => toggleDropdown(item.id)}
                  className="bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group inline-flex h-9 w-max items-center justify-center rounded-md font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 group p-0"
                  data-radix-collection-item=""
                >
                  {item.Title}
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative top-px ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
                    aria-hidden="true"
                  >
                    <path
                      d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
          {activeDropdown === item.id && (
            <div className="absolute left-0 top-full flex justify-center">
              <div className="mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  {item.Links.map((link) => (
                    <a
                      key={link.id}
                      href={link.LinkTo}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      target={link.NewTab ? '_blank' : '_self'}
                      rel={link.NewTab ? 'noopener noreferrer' : undefined}
                    >
                      {link.Text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </nav>
      );
    });
  };

  // Render partners carousel
  const renderPartners = () => {
    if (!pageData.Sections[1]?.Partners?.data) return null;

    return (
      <div className="overflow-hidden">
        <div className="flex -ml-4 items-stretch">
          {pageData.Sections[1].Partners.data.map((partner) => (
            <div
              key={partner.id}
              role="group"
              aria-roledescription="slide"
              className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-auto md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <a
                href={`/partner/${partner.attributes.Slug}`}
                className="flex w-full flex-col items-center gap-5 text-center"
              >
                <div className="h-40 w-full overflow-hidden rounded-lg px-10 py-5 shadow-lg">
                  <div className="size-full object-contain relative">
                    {/* Replace with actual Image component if using Next.js Image */}
                    <img
                      src={partner.attributes.Logo.data.attributes.url}
                      alt={partner.attributes.Name}
                      className="size-full object-contain"
                    />
                  </div>
                </div>
                <small className="text-sm">{partner.attributes.Name}</small>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div id="__next">
      <noscript>
        <div>
          <img
            alt=""
            loading="lazy"
            width="1"
            height="1"
            decoding="async"
            className="pointer-events-none invisible absolute"
            style={{ color: 'transparent' }}
            src="/watch/15004633"
          />
        </div>
      </noscript>

      <div className="relative min-h-screen font-parabolica antialiased __variable_646807 __variable_2c6616">
        {/* Intro Loader */}
        <div id="intro" className="fixed inset-0 z-[100] grid place-content-center bg-mainColor1">
          <div className="loader"></div>
        </div>



        {/* Back to Top Button */}
        <div
          className={`fixed bottom-3 right-3 lg:bottom-10 lg:right-2 z-50 transition-all duration-300 ${
            showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
        >
          <button
            aria-label="Back to top"
            onClick={scrollToTop}
            className="m-0 rounded-full border-none bg-white p-0 outline-none drop-shadow-lg"
          >
            <svg className="size-10 fill-mainColor1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M22 12c0-5.522-4.476-10-10-10C6.479 2 2 6.479 2 12c0 5.524 4.478 10 10 10c5.524 0 10-4.476 10-10zm-14.53.28a.75.75 0 0 1-.073-.976l.073-.084l4-4a.75.75 0 0 1 .977-.073l.085.072l4 4.002a.75.75 0 0 1-.977 1.133l-.084-.073l-2.72-2.721v6.691a.75.75 0 0 1-.649.743l-.102.007a.75.75 0 0 1-.743-.648l-.007-.102v-6.69l-2.72 2.72a.75.75 0 0 1-.976.072l-.084-.072z" />
            </svg>
          </button>
        </div>

        {/* Main Content */}
        <div>
          <div className="page-spacing-wrapper">
            {/* Page Header */}
            <div className="relative z-[1] flex flex-col justify-end bg-mainColor5 !pt-48">
              <div className="container flex flex-col justify-end !pt-0 !pb-10">
                <h2 className="title-72 text-black">{pageData.Header.Title}</h2>
                <p className="max-w-6xl whitespace-pre-line py-5">{pageData.Header.Content}</p>
              </div>
            </div>

            {/* Registration Form */}
            <div className="animated-block">
              <div className="animated-block-target">
                <div className="container form-style !py-0">
                  <div dangerouslySetInnerHTML={{ __html: pageData.Sections[0]?.Data || '' }} />
                </div>
              </div>
            </div>

            {/* Partners Section */}
            <div className="animated-block">
              <div className="animated-block-target">
                <div>
                  <div className="relative container" role="region" aria-roledescription="carousel">
                    <div className="mb-10 flex flex-col items-center">
                      <h2 className="title-72 text-black mt-5">
                        {pageData.Sections[1]?.PartnersSectionTitle || 'Partners & Sponsors'}
                      </h2>
                    </div>
                    {renderPartners()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransRussiaPage;