import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { personal, socials } from "@/lib/data";
import { SiteBackground } from "@/components/shared/site-background";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://kapil-badgujjar.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kapil Badgujjar — Software Engineer",
    template: "%s · Kapil Badgujjar",
  },
  description:
    "Kapil Badgujjar is a Software Engineer specializing in cloud-native architecture, backend automation, and full-stack development — building zero-touch DevOps pipelines on AWS and shipping revenue-generating MVPs.",
  applicationName: "Kapil Badgujjar — Portfolio",
  authors: [{ name: "Kapil Badgujjar", url: siteUrl }],
  creator: "Kapil Badgujjar",
  publisher: "Kapil Badgujjar",
  category: "technology",
  keywords: [
    "Kapil Badgujjar",
    "Software Engineer",
    "Full Stack Developer",
    "Backend Developer",
    "Cloud Engineer",
    "DevOps",
    "Next.js Developer",
    "Node.js",
    "FastAPI",
    "AWS",
    "Rancholabs",
    "Jhajjar",
    "Haryana",
    "India",
    "Portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Kapil Badgujjar",
    title: "Kapil Badgujjar — Software Engineer",
    description:
      "Cloud-native architect, full-stack developer, and DevOps enthusiast.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kapil Badgujjar — Software Engineer",
    description: "Cloud-native architect, full-stack developer.",
    creator: "@kapil_badgujjar",
  },
};

export const viewport: Viewport = {
  themeColor: "#050507",
  width: "device-width",
  initialScale: 1,
};

function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.name,
    url: siteUrl,
    image: `${siteUrl}${personal.photo}`,
    jobTitle: personal.title,
    email: `mailto:${personal.email}`,
    telephone: personal.phone,
    worksFor: {
      "@type": "Organization",
      name: "Rancholabs",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jhajjar",
      addressRegion: "Haryana",
      addressCountry: "IN",
    },
    sameAs: socials.map((s) => s.href),
    knowsAbout: [
      "Cloud-native architecture",
      "Event-Driven Architecture",
      "TypeScript",
      "Node.js",
      "Next.js",
      "Python",
      "FastAPI",
      "AWS",
      "Docker",
      "PostgreSQL",
      "DevOps",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${spaceGrotesk.variable} ${jetbrains.variable} dark scroll-pt-20`}
    >
      <body className="bg-background text-foreground min-h-screen antialiased">
        <PersonJsonLd />
        <SiteBackground />
        {children}
      </body>
    </html>
  );
}
