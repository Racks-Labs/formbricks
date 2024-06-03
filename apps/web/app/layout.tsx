import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Nogues Abogados",
    default: "Formulario",
  },
  description: "Formulario de registro de NOGUÉS ABOGADOS expertos en derecho bancario",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      {process.env.VERCEL === "1" && <SpeedInsights sampleRate={0.1} />}
      <body className="flex h-dvh flex-col transition-all ease-in-out">{children}</body>
    </html>
  );
};

export default RootLayout;
