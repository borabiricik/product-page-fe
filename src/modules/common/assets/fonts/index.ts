import localFont from "@next/font/local";

export const avant = localFont({
  src: [
    {
      path: "../../../../../public/fonts/ITCAvantGardeStd-XLt.otf",
      weight: "300",
    },
    {
      path: "../../../../../public/fonts/ITCAvantGardeStd-Bk.otf",
      weight: "400",
    },
    {
      path: "../../../../../public/fonts/ITCAvantGardeStd-Md.otf",
      weight: "500",
    },
    {
      path: "../../../../../public/fonts/ITCAvantGardeStd-Demi.otf",
      weight: "600",
    },
    {
      path: "../../../../../public/fonts/ITCAvantGardeStd-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-avant",
  adjustFontFallback: "Arial",
});

export const avenir = localFont({
  src: [
    {
      path: "../../../../../public/fonts/Avenir-Light.ttf",
      weight: "200",
    },
    {
      path: "../../../../../public/fonts/Avenir-Book.ttf",
      weight: "300",
    },
    {
      path: "../../../../../public/fonts/Avenir-Roman.ttf",
      weight: "400",
    },
    {
      path: "../../../../../public/fonts/Avenir-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../../../../public/fonts/Avenir-Heavy.ttf",
      weight: "600",
    },
    {
      path: "../../../../../public/fonts/Avenir-Black.ttf",
      weight: "700",
    },
  ],
  variable: "--font-avenir",
  adjustFontFallback: "Arial",
});
