import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import Script from "next/script";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://atuldhakar.com"),
  title: "Dr. Atul Dhakar | Assistant Professor, Researcher & Ph.D. Mechanical Engineer",
  description: "Official academic portfolio of Dr. Atul Dhakar — Assistant Professor at UIT-RGPV Shivpuri, Ph.D. in Mechanical Engineering (JUET Guna), researcher in fault diagnosis and machine learning, with 11 published papers and 6 design patents.",
  keywords: [
    // --- Name & Spelling Variations ---
    "Dr. Atul Dhakar",
    "Dr Atul Dhakar",
    "Atul Dhakar",
    "Atul Dhakar Professor",
    "Atul Dhakar PhD",
    "Atul Dhakar Mechanical Engineering",
    "Atul Sir",
    "Atul Sir RGPV",
    "Atul Sir Shivpuri",
    "Atul Sir The College Coach",
    "Atul Sir MP DTE",
    "Dr. Atul Dhakar Indore",
    "Dr. Atul Dhakar Shivpuri",
    "Dr. Atul Dhakar Gwalior",
    "Dr. Atul Dhakar Guna",
    "Atul Dhakad",
    "Atul Dhakad RGPV",
    "Atul Dhakad Shivpuri",
    "Atul Dhakad College Coach",
    "Dr Atul Dhakad",
    "Dr. Atul Dhakar Contact",
    "Dr. Atul Dhakar Email",
    "Dr. Atul Dhakar Phone Number",
    "Dr. Atul Dhakar Resume",

    // --- The College Coach & Admissions ---
    "The College Coach",
    "The College Coach 24x7",
    "The College Coach 24×7",
    "The College Coach YouTube",
    "The College Coach Atul Dhakar",
    "The College Coach Atul Sir",
    "The College Coach MP DTE",
    "MP DTE",
    "MP DTE Counselling",
    "MP DTE Choice Filling",
    "MP DTE Choice Filling 2026",
    "MP DTE Choice Filling 2025",
    "MP DTE Seat Allotment",
    "MP DTE Registration",
    "MP DTE College Predictor",
    "MP DTE Reporting Process",
    "MP DTE cut off BTech",
    "Engineering Admission MP",
    "Choice Filling Strategy",
    "College Choice Filling Tips",
    "Counselling Coordinator SVCE",
    "Counselling Coordinator SKITM",
    "BTech Counseling MP DTE",
    "DTE Choice Filling Guidance",
    "Best Engineering Colleges in MP",
    "MP Engineering Admission Portal",
    "DTE MP Online Choice Filling",
    "How to get admission in SGSITS Indore",
    "How to get admission in IET DAVV Indore",
    "How to get admission in MITS Gwalior",
    "How to get admission in JEC Jabalpur",

    // --- Affiliations & Academic Profile ---
    "Assistant Professor UIT-RGPV Shivpuri",
    "UIT-RGPV Shivpuri Research Cell",
    "Mechanical Engineering Professor Indore",
    "SKITM Indore Mechanical Department",
    "SVCE Indore Mechanical Department",
    "UIT RGPV Shivpuri Mechanical Department",
    "IIIT Ranchi AI MTech",
    "IIIT Ranchi Artificial Intelligence and Data Science",
    "JUET Guna Mechanical Engineering Ph.D",
    "Jaypee University Guna PhD",
    "Research Cell Coordinator UIT Shivpuri",
    "AITR Indore Mechanical Lecturer",
    "GICTS Gwalior Assistant Professor",
    "Govt Excellence School Shivpuri",
    "Madhav Institute of Technology and Science Gwalior",
    "MITS Gwalior solar energy",

    // --- Subjects Taught ---
    "Engineering Graphics RGPV",
    "ED RGPV",
    "Basic Mechanical Engineering RGPV",
    "BME RGPV",
    "Thermodynamics RGPV",
    "Theory of Machines RGPV",
    "TOM RGPV",
    "Strength of Materials RGPV",
    "SOM RGPV",
    "Mechanical Vibration RGPV",
    "MATLAB Software researcher",
    "WEKA Software research",

    // --- Patents & Robotics ---
    "Robotics Patents Atul Dhakar",
    "Serving Robot Patent",
    "Sprayer Robot Patent",
    "Carrier Lifting Robot Patent",
    "Fire Fighting Robot Patent",
    "Atul Dhakar Robot Patents",
    "469221-001",
    "469222-001",
    "469218-001",
    "469220-001",
    "Robotics Design Patent India",

    // --- Research & Publications ---
    "SCI Journals Atul Dhakar",
    "Scopus Author Atul Dhakar",
    "ORCID 0000-0003-3457-4662",
    "Scopus ID 58866418000",
    "Shodhganga thesis Atul Dhakar",
    "Fault Diagnosis Reciprocating Air Compressor",
    "Machine Learning Fault Diagnosis",
    "Signal Processing Fault Diagnosis",
    "Local Mean Decomposition",
    "LMD Signal Processing",
    "Empirical Mode Decomposition EMD",
    "Support Vector Machine Fault Diagnosis",
    "Decision Tree J48 Algorithm Air Compressor",
    "K-Nearest Neighbor Compressor Faults",
    "Solar water distillation Paraffin wax",
    "Phase change material solar distillation",
    "PCM solar water distillation",
    "Solar power plants for farmers case study"
  ],
  authors: [{ name: "Dr. Atul Dhakar" }],
  robots: "index, follow",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/atul-sir.jpg",
  },
  openGraph: {
    title: "Dr. Atul Dhakar | Assistant Professor, Researcher & Ph.D. Mechanical Engineer",
    description: "Academic portfolio of Dr. Atul Dhakar — Assistant Professor at UIT-RGPV Shivpuri, Ph.D. Mechanical Engineer, AI & Data Science researcher at IIIT Ranchi.",
    url: "https://atuldhakar.com",
    siteName: "Dr. Atul Dhakar Portfolio",
    images: [{ url: "/atul-sir.jpg", width: 800, height: 800, alt: "Dr. Atul Dhakar" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Atul Dhakar | Assistant Professor, Researcher & Ph.D. Mechanical Engineer",
    description: "Academic portfolio of Dr. Atul Dhakar — Assistant Professor at UIT-RGPV Shivpuri, Ph.D. Mechanical Engineer, AI & Data Science researcher at IIIT Ranchi.",
    images: ["/atul-sir.jpg"],
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://atuldhakar.com/#person",
      "name": "Dr. Atul Dhakar",
      "jobTitle": "Assistant Professor & Lead Mentor",
      "worksFor": {
        "@type": "EducationalOrganization",
        "name": "UIT-RGPV Shivpuri"
      },
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "Jaypee University of Engineering and Technology (JUET), Guna"
        },
        {
          "@type": "EducationalOrganization",
          "name": "Indian Institute of Information Technology (IIIT), Ranchi"
        }
      ],
      "knowsAbout": [
        "Mechanical Engineering",
        "Signal Processing",
        "Machine Learning",
        "Fault Diagnosis",
        "Solar Water Distillation",
        "Robotics Design Patents"
      ],
      "url": "https://atuldhakar.com",
      "sameAs": [
        "https://orcid.org/0000-0003-3457-4662",
        "https://www.scopus.com/authid/detail.uri?authorId=58866418000",
        "http://hdl.handle.net/10603/659555"
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-bg-light dark:bg-bg-dark text-foreground">
        <SmoothScroll />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
        <Script
          id="theme-initializer"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />
        <ScrollProgressBar />
        {children}
      </body>
    </html>
  );
}
