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
  metadataBase: new URL("https://dratuldhakar.vercel.app"),

  title: {
    default:
      "Dr. Atul Dhakar | Academic Portfolio | Assistant Professor & Researcher",
    template: "%s | Dr. Atul Dhakar",
  },

  description:
    "Official academic portfolio of Dr. Atul Dhakar — Assistant Professor & Research Cell Coordinator at UIT-RGPV Shivpuri. Ph.D. in Mechanical Engineering from JUET Guna (9.08 CGPA) and pursuing a second M.Tech in AI & Data Science from IIIT Ranchi. Features 11 published research papers, 6 design patents, and 13+ years of teaching experience. Includes educational counseling and admissions guidance from The College Coach 24x7.",

  keywords: [
    "Dr. Atul Dhakar","Dr Atul Dhakar","Atul Dhakar","Atul Dhakar Professor","Atul Dhakar PhD","Atul Dhakar Mechanical Engineering","Atul Dhakar researcher","Atul Dhakar UIT RGPV","Atul Dhakar Shivpuri","Atul Dhakar Indore","Atul Dhakar Gwalior","Atul Dhakar Guna","Atul Dhakar SKITM","Atul Dhakar SVCE","Atul Dhakar AITR","Atul Dhakar GICTS","Atul Dhakar JUET","Atul Dhakar IIIT Ranchi","Atul Sir","Atul Sir Professor","Atul Sir RGPV","Atul Sir Shivpuri","Atul Sir The College Coach","Atul Sir MP DTE","Atul Sir YouTube","Atul Sir Counselling","Atul Sir Mechanical","Atul Sir engineering","Dr Atul Dhakad","Dr. Atul Dhakad","Atul Dhakad","Atul Dhakad RGPV","Atul Dhakad Shivpuri","Atul Dhakad College Coach","Atul Dhakad YouTube","Dr. Atul Dhakar contact","Dr. Atul Dhakar email","Dr. Atul Dhakar phone number","Dr. Atul Dhakar website","Dr. Atul Dhakar portfolio","atuldhakar","dratuldhakar",
    "The College Coach","The College Coach 24x7","The College Coach YouTube","The College Coach YouTube channel","The College Coach channel","College Coach 24x7","College Coach Atul Dhakar","College Coach Atul Sir","College Coach MP DTE","College Coach counselling","College Coach choice filling","College Coach DTE","College Coach engineering admission","The College Coach DTE counselling","The College Coach seat allotment","The College Coach MP engineering","The College Coach BTech admission","YouTube The College Coach","@TheCollegeCoach","TheCollegeCoach YouTube","best college counselling YouTube","MP engineering admission YouTube","DTE counselling YouTube channel","DTE YouTube Atul Sir","best DTE guidance YouTube","The College Coach website",
    "MP DTE","MP DTE counselling","MP DTE 2025","MP DTE 2026","MP DTE counselling 2025","MP DTE counselling 2026","MP DTE choice filling","MP DTE choice filling 2025","MP DTE choice filling 2026","MP DTE choice filling strategy","MP DTE choice filling tips","MP DTE seat allotment","MP DTE seat allotment 2025","MP DTE seat allotment 2026","MP DTE registration","MP DTE reporting process","MP DTE college predictor","MP DTE college predictor 2025","MP DTE college predictor 2026","MP DTE cutoff","MP DTE BTech cutoff","MP DTE first round cutoff","MP DTE second round cutoff","MP DTE closing rank","MP DTE opening rank","MP DTE round 1","MP DTE round 2","MP DTE round 3","MP DTE document verification","MP DTE fees","MP DTE form filling","MP DTE admission process","DTE counselling MP","DTE choice filling","DTE seat allotment","DTE college predictor","DTE Madhya Pradesh","DTE MP engineering","DTE MP BTech","DTE Madhya Pradesh counselling 2025","DTE Madhya Pradesh counselling 2026","DTE MP admission","DTE MP reporting","DTE counselling expert","DTE choice filling expert","how to fill DTE choice","how to do DTE choice filling","DTE choice filling kaise kare","DTE seat allotment kaise milega","DTE counselling guide","best college in MP DTE","engineering admission MP","engineering admission guidance MP","engineering admission counselling Madhya Pradesh","BTech admission MP 2025","BTech admission MP 2026",
    "SGSITS Indore","SGSITS Indore admission","how to get admission in SGSITS Indore","SGSITS Indore cutoff","SGSITS Indore DTE","IET DAVV Indore","IET DAVV Indore admission","how to get admission in IET DAVV","DAVV engineering college Indore","MITS Gwalior","MITS Gwalior admission","how to get admission in MITS Gwalior","MITS Gwalior cutoff","JEC Jabalpur","JEC Jabalpur admission","how to get admission in JEC Jabalpur","MANIT Bhopal DTE","MANIT Bhopal admission","NIT Bhopal DTE","LNCT Bhopal admission","RGPV affiliated college admission","SATI Vidisha","VIT Bhopal","ITM Gwalior","SAGE University Indore","Indore Institute of Engineering","SVCE Indore admission","SKITM Indore admission","Shri Vaishnav Institute Indore","Medicaps Indore admission",
    "JEE Mains MP DTE","JEE Mains rank MP college","JEE Mains 2025 MP counselling","JEE Mains 2026 MP counselling","JEE Mains percentile MP DTE","JEE rank vs college MP","expected college JEE rank MP","JEE Mains BTech MP","which college at JEE rank MP","JEE rank predictor MP","MP BTech JEE counselling","JEE Mains choice filling MP",
    "Assistant Professor UIT-RGPV Shivpuri","UIT RGPV Shivpuri","UIT RGPV Shivpuri Mechanical Engineering","UIT RGPV Shivpuri Research Cell","UIT RGPV Shivpuri professor","UIT Shivpuri faculty","RGPV Shivpuri Mechanical","Rajiv Gandhi Proudyogiki Vishwavidyalaya","RGPV affiliated professor","SKITM Indore","SKITM Indore Mechanical Department","SKITM Indore professor","SVCE Indore","SVCE Indore Mechanical Department","Swami Vivekanand College Engineering Indore","GICTS Gwalior","AITR Indore","Acropolis Institute of Technology Research Indore","IIIT Ranchi","IIIT Ranchi AI MTech","IIIT Ranchi Artificial Intelligence Data Science","Indian Institute of Information Technology Ranchi","JUET Guna","Jaypee University Engineering Technology Guna","JUET Guna Mechanical Engineering PhD","Jaypee University Guna PhD","Research Cell Coordinator UIT Shivpuri","Mechanical Engineering professor Indore","Mechanical Engineering professor Shivpuri","Mechanical Engineering professor MP",
    "Atul Dhakar publications","Atul Dhakar SCI paper","Atul Dhakar Scopus","Scopus Author ID 58866418000","ORCID 0000-0003-3457-4662","Atul Dhakar ORCID","Atul Dhakar Google Scholar","Shodhganga thesis Atul Dhakar","Atul Dhakar PhD thesis","fault diagnosis reciprocating air compressor","fault diagnosis air compressor machine learning","fault identification reciprocating air compressor","air compressor fault detection signal processing","Local Mean Decomposition LMD fault diagnosis","LMD Support Vector Machine bearing fault","Decision Tree J48 air compressor fault","K-Nearest Neighbor KNN compressor fault","LDA QDA fault diagnosis air compressor","Logistic Regression fault diagnosis compressor","kurtosis index bubble cloud analysis","signal processing fault diagnosis mechanical","machine learning mechanical fault diagnosis","Empirical Mode Decomposition EMD fault","rolling bearing fault diagnosis","Atul Dhakar Taylor Francis paper","Atul Dhakar Springer paper","Atul Dhakar Elsevier paper","Atul Dhakar Sage journal","Atul Dhakar IOP Science paper","Journal of Vibration Engineering Technologies Dhakar","Journal of Engineering Research Dhakar","Noise Vibration Worldwide Dhakar","Engineering Research Express Dhakar","solar water distillation paraffin wax","phase change material PCM solar distillation","single slope solar water distillation PCM","solar power plants farmers case study","FRBC coir fiber mechanical characterization","Recent Advances Mechanical Engineering Springer Dhakar","ICMME 2025 Jaypee University Guna",
    "Atul Dhakar design patents","Atul Dhakar robot patents","Atul Dhakar robotics","Design Patent India Atul Dhakar","Serving Robot Design Patent","Sprayer Robot Design Patent","Carrier Lifting Robot Patent","Fire Fighting Robot Patent","469221-001 serving robot","469222-001 sprayer robot","469218-001 carrier lifting robot","469220-001 fire fighting robot","484785-001 patent","469219-001 patent","Robotics design patent India 2025","Indian design patent mechanical engineering",
    "Engineering Graphics RGPV","Engineering Drawing ED RGPV","Basic Mechanical Engineering RGPV","BME RGPV Shivpuri","Thermodynamics RGPV","Theory of Machines TOM RGPV","Strength of Materials SOM RGPV","Mechanical Vibration RGPV","Fluid Mechanics RGPV","Heat Mass Transfer HMT RGPV","Material Technology RGPV","MATLAB research mechanical engineering","WEKA software fault diagnosis","MATLAB signal processing","AutoCAD training RGPV","IC Engine lab RGPV","Electric Vehicle Technology","Solar Energy Technology Management","NPTEL IIT Roorkee Manufacturing","LaTeX software IIT Bombay certification",
    "professor Shivpuri","professor Shivpuri Madhya Pradesh","Mechanical professor Shivpuri","engineering college Shivpuri","UIT Shivpuri faculty","professor Indore mechanical engineering","professor Gwalior mechanical","professor Guna JUET","researcher Madhya Pradesh mechanical","YouTube teacher Indore","YouTube professor MP DTE","best professor MP engineering","MP engineering professor YouTube",
    "who is Atul Sir","who is Dr Atul Dhakar","what is The College Coach","what is The College Coach 24x7","how to fill DTE MP choice","how to get good college in MP engineering","best DTE choice filling guide","DTE MP kaise kare","DTE counselling kya hota hai","MP DTE choice filling kaise karein 2025","MP DTE seat kaise milegi","MP DTE reporting kaise karein","best engineering college Madhya Pradesh","top engineering colleges MP DTE","RGPV affiliated best colleges","best Mechanical Engineering college MP","how to predict college DTE MP","DTE MP rank vs college list","MP engineering admission tips","college coach for DTE","DTE coaching YouTube","free DTE counselling guidance","free MP DTE help online","Atul sir DTE guidance"
  ],

  authors: [{ name: "Dr. Atul Dhakar", url: "https://dratuldhakar.vercel.app" }],
  creator: "Dr. Atul Dhakar",
  publisher: "Dr. Atul Dhakar",
  category: "Education, Engineering, Research",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "Dr. Atul Dhakar | Academic Portfolio | Assistant Professor & Researcher",
    description:
      "Official academic portfolio of Dr. Atul Dhakar — Assistant Professor & Research Cell Coordinator at UIT-RGPV Shivpuri. Ph.D. in Mechanical Engineering from JUET Guna (9.08 CGPA) and pursuing a second M.Tech in AI & Data Science from IIIT Ranchi. Features 11 published research papers, 6 design patents, and 13+ years of teaching experience.",
    url: "https://dratuldhakar.vercel.app",
    siteName: "Dr. Atul Dhakar Academic Portfolio",
    images: [
      {
        url: "https://dratuldhakar.vercel.app/atul-sir.jpg",
        secureUrl: "https://dratuldhakar.vercel.app/atul-sir.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Atul Dhakar - Assistant Professor UIT-RGPV Shivpuri & Researcher",
        type: "image/jpeg",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dr. Atul Dhakar | Academic Portfolio | Assistant Professor & Researcher",
    description:
      "Official academic portfolio of Dr. Atul Dhakar — Assistant Professor at UIT-RGPV Shivpuri. Ph.D. in Mechanical Engineering from JUET Guna, 11 published papers, 6 design patents, and 13+ years of teaching experience.",
    images: ["https://dratuldhakar.vercel.app/atul-sir.jpg"],
    creator: "@TheCollegeCoach",
    site: "@TheCollegeCoach",
  },

  alternates: {
    canonical: "https://dratuldhakar.vercel.app",
    languages: {
      "en-IN": "https://dratuldhakar.vercel.app",
      "hi-IN": "https://dratuldhakar.vercel.app",
    },
  },

  verification: {
    google: "gRA9DqcG_Dr6NCAW_thkqXlHJj58SQp1TPur6sUrUSI",
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Person", "Researcher", "Teacher"],
      "@id": "https://dratuldhakar.vercel.app/#person",
      "name": "Dr. Atul Dhakar",
      "givenName": "Atul",
      "familyName": "Dhakar",
      "honorificPrefix": "Dr.",
      "alternateName": ["Atul Dhakar","Atul Sir","Dr. Atul Dhakad","Atul Dhakad","dratuldhakar","atuldhakar","Dr Atul Dhakar"],
      "description": "Dr. Atul Dhakar is an Assistant Professor at UIT-RGPV Shivpuri, founder of The College Coach 24x7 YouTube channel (18,000+ subscribers, 750+ videos) for MP DTE engineering admissions guidance. He holds a Ph.D. in Mechanical Engineering from JUET Guna (9.08 CGPA, 2025) and has published 11 research papers in SCI/Scopus journals including Taylor & Francis, Springer, and Elsevier, and holds 6 design patents related to robotics.",
      "jobTitle": "Assistant Professor & Research Cell Coordinator",
      "worksFor": {
        "@type": "EducationalOrganization",
        "@id": "https://dratuldhakar.vercel.app/#uit-rgpv",
        "name": "UIT-RGPV Shivpuri",
        "alternateName": ["University Institute of Technology RGPV Shivpuri","UIT Shivpuri"],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Shivpuri",
          "addressRegion": "Madhya Pradesh",
          "addressCountry": "IN"
        }
      },
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "Jaypee University of Engineering and Technology (JUET), Guna",
          "alternateName": ["JUET Guna","Jaypee University Guna"],
          "address": {"@type": "PostalAddress","addressLocality": "Guna","addressRegion": "Madhya Pradesh","addressCountry": "IN"}
        },
        {
          "@type": "EducationalOrganization",
          "name": "Indian Institute of Information Technology (IIIT), Ranchi",
          "alternateName": ["IIIT Ranchi"],
          "address": {"@type": "PostalAddress","addressLocality": "Ranchi","addressRegion": "Jharkhand","addressCountry": "IN"}
        },
        {
          "@type": "EducationalOrganization",
          "name": "ShriRam College of Engineering & Management, Gwalior",
          "address": {"@type": "PostalAddress","addressLocality": "Gwalior","addressRegion": "Madhya Pradesh","addressCountry": "IN"}
        }
      ],
      "knowsAbout": ["Mechanical Engineering","Signal Processing","Machine Learning","Fault Diagnosis","Reciprocating Air Compressor Fault Detection","Local Mean Decomposition (LMD)","Empirical Mode Decomposition (EMD)","Support Vector Machine (SVM)","Decision Tree J48 Algorithm","K-Nearest Neighbor Classifier","Solar Water Distillation","Phase Change Material (PCM)","Robotics","Design Patents","MP DTE Counselling","Choice Filling Optimization","Engineering Admissions","MATLAB","WEKA Software","Engineering Graphics","Theory of Machines","Strength of Materials","Thermodynamics","Electric Vehicle Technology","Solar Energy","AutoCAD","LaTeX"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Flat No. 301, JMD Lake View, New Ranibagh, Khandwa Road",
        "addressLocality": "Indore",
        "addressRegion": "Madhya Pradesh",
        "postalCode": "452001",
        "addressCountry": "IN"
      },
      "email": "dratuldhakar@gmail.com",
      "telephone": "+919179176554",
      "nationality": {"@type": "Country","name": "India"},
      "birthDate": "1988-11-25",
      "url": "https://dratuldhakar.vercel.app",
      "image": {"@type": "ImageObject","url": "https://dratuldhakar.vercel.app/atul-sir.jpg","caption": "Dr. Atul Dhakar - The College Coach 24x7"},
      "sameAs": ["https://www.youtube.com/@TheCollegeCoach","https://scholar.google.com/citations?user=x8wHk3YAAAAJ","https://orcid.org/0000-0003-3457-4662","https://www.scopus.com/authid/detail.uri?authorId=58866418000","http://hdl.handle.net/10603/659555"]
    },
    {
      "@type": "WebSite",
      "@id": "https://dratuldhakar.vercel.app/#website",
      "url": "https://dratuldhakar.vercel.app",
      "name": "Dr. Atul Dhakar | The College Coach 24x7",
      "description": "Official website of Dr. Atul Dhakar - MP DTE Counselling Expert, The College Coach 24x7 YouTube Channel founder, and Mechanical Engineering Professor.",
      "publisher": {"@id": "https://dratuldhakar.vercel.app/#person"},
      "inLanguage": ["en-IN","hi-IN"],
      "potentialAction": {"@type": "SearchAction","target": {"@type": "EntryPoint","urlTemplate": "https://dratuldhakar.vercel.app/?q={search_term_string}"},"query-input": "required name=search_term_string"}
    },
    {
      "@type": ["EducationalOrganization","Organization"],
      "@id": "https://dratuldhakar.vercel.app/#collegecoach",
      "name": "The College Coach",
      "alternateName": ["The College Coach 24x7","The College Coach 24x7","College Coach 24x7","The College Coach YouTube","TheCollegeCoach","@TheCollegeCoach"],
      "description": "The College Coach 24x7 is a premium YouTube educational channel with 18,000+ subscribers and 750+ videos, founded by Dr. Atul Dhakar. It provides free expert guidance on MP DTE counselling, engineering college choice filling, seat allotment strategy, college predictor tools, JEE Mains rank analysis, and step-by-step MP engineering admission process for students across Madhya Pradesh.",
      "url": "https://dratuldhakar.vercel.app/college-coach",
      "logo": {"@type": "ImageObject","url": "https://dratuldhakar.vercel.app/atul-sir.jpg"},
      "sameAs": ["https://www.youtube.com/@TheCollegeCoach"],
      "founder": {"@id": "https://dratuldhakar.vercel.app/#person"},
      "foundingDate": "2020",
      "areaServed": {"@type": "State","name": "Madhya Pradesh"},
      "keywords": "MP DTE, DTE Counselling, Choice Filling, Seat Allotment, Engineering Admission, RGPV, BTech MP, JEE Mains MP, college predictor"
    },
    {
      "@type": "Course",
      "@id": "https://dratuldhakar.vercel.app/#dte-course",
      "name": "MP DTE Counselling & Choice Filling Complete Guide",
      "description": "Comprehensive free guidance on Madhya Pradesh DTE engineering counselling process, choice filling strategy, college predictor, seat allotment, document verification and reporting process. Provided by Dr. Atul Dhakar through The College Coach 24x7 YouTube channel.",
      "provider": {"@id": "https://dratuldhakar.vercel.app/#collegecoach"},
      "instructor": {"@id": "https://dratuldhakar.vercel.app/#person"},
      "url": "https://dratuldhakar.vercel.app/college-coach",
      "inLanguage": ["hi-IN","en-IN"],
      "isAccessibleForFree": true,
      "courseMode": "online",
      "educationalLevel": "Undergraduate",
      "teaches": "MP DTE choice filling, college predictor, seat allotment, document verification, engineering admission"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dratuldhakar.vercel.app/#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem","position": 1,"name": "Home - Dr. Atul Dhakar","item": "https://dratuldhakar.vercel.app"},
        {"@type": "ListItem","position": 2,"name": "The College Coach 24x7","item": "https://dratuldhakar.vercel.app/college-coach"},
        {"@type": "ListItem","position": 3,"name": "Research & Publications","item": "https://dratuldhakar.vercel.app/publications"},
        {"@type": "ListItem","position": 4,"name": "Patents & Innovations","item": "https://dratuldhakar.vercel.app/patents"},
        {"@type": "ListItem","position": 5,"name": "Contact Dr. Atul Dhakar","item": "https://dratuldhakar.vercel.app/contact"}
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dratuldhakar.vercel.app/#faq",
      "mainEntity": [
        {"@type": "Question","name": "Who is Dr. Atul Dhakar?","acceptedAnswer": {"@type": "Answer","text": "Dr. Atul Dhakar is an Assistant Professor at UIT-RGPV Shivpuri (Madhya Pradesh), Ph.D. in Mechanical Engineering from JUET Guna, and founder of The College Coach 24x7 YouTube channel which has 18,000+ subscribers and 750+ videos covering MP DTE counselling and engineering admissions."}},
        {"@type": "Question","name": "What is The College Coach 24x7?","acceptedAnswer": {"@type": "Answer","text": "The College Coach 24x7 is a YouTube educational channel founded by Dr. Atul Dhakar. It provides free expert guidance on MP DTE counselling, choice filling strategy, seat allotment, college predictor, and complete engineering admission process for students in Madhya Pradesh."}},
        {"@type": "Question","name": "How to do MP DTE choice filling?","acceptedAnswer": {"@type": "Answer","text": "MP DTE choice filling can be done by logging into the MPDTE portal, selecting colleges and branches in order of priority, considering cutoff ranks, fee structure and placement. Dr. Atul Dhakar provides step-by-step free guidance on his YouTube channel The College Coach 24x7."}},
        {"@type": "Question","name": "How to get admission in SGSITS Indore through DTE?","acceptedAnswer": {"@type": "Answer","text": "To get admission in SGSITS Indore through MP DTE, you need a competitive JEE Mains rank. SGSITS has one of the lowest cutoffs in MP DTE. Dr. Atul Dhakar on The College Coach 24x7 explains the complete cutoff trend and strategy."}},
        {"@type": "Question","name": "What research has Dr. Atul Dhakar published?","acceptedAnswer": {"@type": "Answer","text": "Dr. Atul Dhakar has published 11 research papers including 3 SCI journals (Taylor & Francis, Springer, Elsevier), 4 Scopus papers, 1 book chapter in Springer Lecture Notes, and 3 UGC-approved journals. His research focuses on fault diagnosis of reciprocating air compressors using signal processing and machine learning."}},
        {"@type": "Question","name": "How to contact Dr. Atul Dhakar?","acceptedAnswer": {"@type": "Answer","text": "You can contact Dr. Atul Dhakar via email at dratuldhakar@gmail.com, by phone at +919179176554, or through the contact form on his official website at dratuldhakar.vercel.app. You can also reach him through his YouTube channel The College Coach 24x7."}}
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="geo.region" content="IN-MP" />
        <meta name="geo.placename" content="Shivpuri, Madhya Pradesh, India" />
        <meta name="geo.position" content="25.4358;77.6602" />
        <meta name="ICBM" content="25.4358, 77.6602" />
        <meta name="citation_author" content="Atul Dhakar" />
        <meta name="citation_author_institution" content="UIT-RGPV Shivpuri, Madhya Pradesh" />
        <meta name="citation_author_orcid" content="0000-0003-3457-4662" />
        <meta httpEquiv="content-language" content="en-IN" />
        <meta name="DC.title" content="Dr. Atul Dhakar - The College Coach 24x7 Official Website" />
        <meta name="DC.creator" content="Dr. Atul Dhakar" />
        <meta name="DC.subject" content="Mechanical Engineering, DTE Counselling, MP Engineering Admissions, Research, The College Coach" />
        <meta name="DC.language" content="en" />
        <meta name="DC.identifier" content="https://dratuldhakar.vercel.app" />
        <meta name="DC.coverage" content="Madhya Pradesh, India" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="copyright" content="Dr. Atul Dhakar" />
      </head>
      <body className="min-h-full flex flex-col bg-bg-light dark:bg-bg-dark text-foreground">
        <SmoothScroll />
        <Script
          id="json-ld-main"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
          strategy="beforeInteractive"
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
