import localFont from 'next/font/local';

export const parabolica = localFont({
  src: [
    {
      path: '../public/fonts/parabolica-light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/parabolica-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/parabolica-medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/parabolica-bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/parabolica-black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-parabolica',
  display: 'swap',
});