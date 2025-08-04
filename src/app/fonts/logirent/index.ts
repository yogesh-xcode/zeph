import localFont from "next/font/local";

export const Logirent = localFont({
  src: [
    {
      path: "./logirent-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./logirent-bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-logirent",
  display: "swap",
});
