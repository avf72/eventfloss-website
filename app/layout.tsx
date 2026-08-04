import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { metadataBase: new URL("https://www.eventfloss.ch"), title: { default: "Eventfloss Zürichsee | Ihr privates Hausboot", template: "%s | Eventfloss Zürichsee" }, description: "Ihr privater Anlass auf dem Zürichsee: Eventfloss für Feiern, Dinner und Workshops bis 12 Personen." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="de-CH"><body>{children}</body></html>; }
