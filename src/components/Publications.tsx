"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, ExternalLink, ShieldCheck, Bookmark, FileText, BarChart, ChevronDown, ArrowRight, MoveLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Publication {
  id: number;
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  publisher?: string;
  category: "sci" | "scopus-esci" | "book-chapter" | "ugc";
  coverImage?: string;
}

const publicationsData: Publication[] = [
  // SCI Journals
  {
    id: 1,
    title: "Fault Identification of Reciprocating Air Compressor using Signal Processing Techniques and Kurtosis Index-Based Bubble Cloud Analysis",
    authors: "Atul Dhakar, Bhagat Singh, and Pankaj Gupta",
    journal: "Journal of the Chinese Institute of Engineers",
    year: 2025,
    doi: "https://doi.org/10.1080/02533839.2025.2471376",
    publisher: "Taylor & Francis",
    category: "sci",
    coverImage: "/pub-taylor-francis-rac.png",
  },
  {
    id: 2,
    title: "Diagnosing Faults in Rolling Bearings of An Air Compressor Set-up using Local Mean Decomposition and Support Vector Machine Algorithm",
    authors: "Atul Dhakar, Bhagat Singh, and Pankaj Gupta",
    journal: "Journal of Vibration Engineering & Technologies",
    year: 2024,
    doi: "https://doi.org/10.1007/s42417-024-01275-6",
    publisher: "Springer",
    category: "sci",
    coverImage: "/pub-springer-rolling-bearings.png",
  },
  {
    id: 3,
    title: "Fault Diagnosis of Air Compressor Set-Up using Decision Tree based J48 Classification Algorithm",
    authors: "Atul Dhakar, Bhagat Singh, and Pankaj Gupta",
    journal: "Journal of Engineering Research",
    year: 2023,
    doi: "https://doi.org/10.1016/j.jer.2023.09.028",
    publisher: "Elsevier",
    category: "sci",
    coverImage: "/pub-elsevier-j48.png",
  },
  // Scopus/ESCI Journals
  {
    id: 4,
    title: "Fault Diagnosis in Air Compressor System using Advanced Signal Processing (LMD & EMD) and Discriminant Analysis-based (LDA and QDA) Machine Learning Techniques",
    authors: "Atul Dhakar, Bhagat Singh, and Pankaj Gupta",
    journal: "Noise & Vibration Worldwide",
    year: 2026,
    doi: "https://doi.org/10.1177/09574565261419827",
    publisher: "Sage Journal",
    category: "scopus-esci",
    coverImage: "/pub-noise-vibration-lmd-emd.png",
  },
  {
    id: 5,
    title: "Comparative Performance Analysis of Different Types of K-Nearest Neighbor (K-NN) Classifiers for Fault Diagnosis of Air Compressor Setup",
    authors: "Atul Dhakar, Bhagat Singh, and Pankaj Gupta",
    journal: "Engineering Research Express",
    year: 2024,
    doi: "https://doi.org/10.1088/2631-8695/ad5497",
    publisher: "IOP Science",
    category: "scopus-esci",
    coverImage: "/pub-iop-knn.png",
  },
  {
    id: 6,
    title: "Fault Diagnosis of Air Compressor System using Local Mean Decomposition (LMD) and Logistic Regression (LR) Machine Learning Classifier",
    authors: "Atul Dhakar, Bhagat Singh, and Pankaj Gupta",
    journal: "International Conference on Mechanical and Materials Engineering (ICMME)",
    year: 2025,
    publisher: "STM Journal",
    category: "scopus-esci",
    coverImage: "/pub-stm-polymer-composites.png",
  },
  {
    id: 7,
    title: "Mechanical characterization of FRBC prepared from coir fibers",
    authors: "Atul Dhakar, et al.",
    journal: "International Journal of Engineering and Advanced Technology",
    year: 2019,
    doi: "https://doi.org/10.35940/ijeat.B3926.129219",
    publisher: "IJEAT",
    category: "scopus-esci",
    coverImage: "/pub-ijeat-frbc.png",
  },
  // Book Chapter
  {
    id: 8,
    title: "Diagnosing Faults of Reciprocating Air Compressor (RAC) Setup Using Signal Processing Technique and Machine Learning Approach",
    authors: "Atul Dhakar, Bhagat Singh, and Pankaj Gupta",
    journal: "Recent Advances in Mechanical Engineering (Lecture Notes in Mechanical Engineering)",
    year: 2024,
    doi: "https://doi.org/10.1007/978-981-97-4947-8_37",
    publisher: "Springer",
    category: "book-chapter",
    coverImage: "/pub-springer-rac-lmd.png",
  },
  // UGC Approved
  {
    id: 9,
    title: "Performance improvement of single slope solar water distillation plant by using paraffin wax material",
    authors: "Atul Dhakar and Neelesh Soni",
    journal: "International Journal of Recent Scientific Research",
    year: 2016,
    category: "ugc",
  },
  {
    id: 10,
    title: "A review of design and fabrication of single slope solar water distillation system using phase change material",
    authors: "Atul Dhakar and Neelesh Soni",
    journal: "Journal of Advances in Science and Technology",
    year: 2015,
    category: "ugc",
  },
  {
    id: 11,
    title: "Survey and Case Study of Scheme for Installing Solar Power Plants Instead of Waiving Electricity Bill for Farmers",
    authors: "Atul Dhakar",
    journal: "International Research Journal of Engineering and Technology (IRJET)",
    year: 2020,
    category: "ugc",
  },
];

const reviewerData = [
  { name: "The Journal of Supercomputing", type: "SCI Indexed" },
  { name: "Measurement Science and Technology", type: "SCI Indexed" },
  { name: "Engineering Research Express", type: "Scopus & E-SCI Indexed" },
  { name: "Journal of Brazilian Society of Mechanical Sciences and Engineering", type: "SCI Indexed - 3 Papers" },
  { name: "Journal of Physics", type: "SCI Indexed" },
];

const getPublisherStyle = (publisher?: string) => {
  if (!publisher) return "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400";
  const pubLower = publisher.toLowerCase();
  if (pubLower.includes("springer")) return "bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-300 border border-blue-500/20";
  if (pubLower.includes("elsevier")) return "bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-300 border border-orange-500/20";
  if (pubLower.includes("taylor")) return "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300 border border-emerald-500/20";
  if (pubLower.includes("sage")) return "bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-300 border border-purple-500/20";
  if (pubLower.includes("iop")) return "bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-300 border border-cyan-500/20";
  if (pubLower.includes("stm")) return "bg-rose-500/10 text-rose-600 dark:bg-rose-500/20 dark:text-rose-300 border border-rose-500/20";
  return "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700";
};

export default function Publications({ isPreview = false }: { isPreview?: boolean }) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    setVisibleCount(4);
  }, [activeFilter, searchQuery]);

  const filteredPublications = publicationsData.filter((pub) => {
    const matchesCategory = activeFilter === "all" || pub.category === activeFilter;
    const matchesSearch =
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (pub.publisher && pub.publisher.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const displayPublications = isPreview
    ? publicationsData.slice(0, 3)
    : filteredPublications.slice(0, visibleCount);

  return (
    <section id="publications" className="py-24 relative overflow-hidden bg-slate-50/30 dark:bg-slate-900/10">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/3 w-[30rem] h-[30rem] glow-emerald rounded-full blur-[100px] pointer-events-none z-0" />


      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-primary-500 mb-3">Research</h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {isPreview ? "My Research Papers" : "Research Papers & Publications"}
          </p>
          {!isPreview && (
            <p className="text-base text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
              11 published papers — 3 SCI, 1 E-SCI, 3 Scopus, 1 book chapter, and 3 UGC-approved journals.
            </p>
          )}
          <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Citations & Research Profiles Board - Hide on Homepage Preview */}
        {!isPreview && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-8 glass-panel p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row justify-between items-center gap-6 border">
              <div>
                <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-slate-200">Indices & Metrics</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md leading-relaxed">
                  Check my verified indexes, bibliometrics details, and research publications tracking across official global indexing platforms.
                </p>
              </div>
              <div className="flex items-center space-x-6">
                <div className="text-center bg-indigo-500/10 dark:bg-indigo-500/20 py-4 px-6 rounded-2xl border border-indigo-500/15">
                  <span className="block text-4xl font-extrabold text-primary-600 dark:text-indigo-300">39</span>
                  <span className="block text-[10px] uppercase font-bold tracking-widest text-slate-500 dark:text-slate-400 mt-1">Citations</span>
                </div>
                <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  <a href="https://scholar.google.com/citations?user=x8wHk3YAAAAJ" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary-500 hover:underline">
                    <Bookmark className="w-3.5 h-3.5 mr-2 text-blue-500" />
                    <span>Google Scholar Profile (Verified)</span>
                  </a>
                  <a href="https://orcid.org/0000-0003-3457-4662" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary-500 hover:underline">
                    <Bookmark className="w-3.5 h-3.5 mr-2 text-emerald-500" />
                    <span>ORCID ID: 0000-0003-3457-4662</span>
                  </a>
                  <a href="https://www.scopus.com/authid/detail.uri?authorId=58866418000" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary-500 hover:underline">
                    <Bookmark className="w-3.5 h-3.5 mr-2 text-indigo-500" />
                    <span>Scopus ID: 58866418000</span>
                  </a>
                  <a href="http://hdl.handle.net/10603/659555" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary-500 hover:underline">
                    <Bookmark className="w-3.5 h-3.5 mr-2 text-amber-500" />
                    <span>Ph.D. Thesis on Shodhganga</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Peer Reviewer Card */}
            <div className="lg:col-span-4 glass-panel p-6 rounded-3xl border flex flex-col justify-between">
              <h3 className="text-base font-bold mb-3 flex items-center">
                <ShieldCheck className="w-5 h-5 mr-2 text-emerald-500" />
                <span>Reviewer Board</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {reviewerData.map((journal, idx) => (
                  <span key={idx} className="px-2.5 py-1 text-[10px] font-bold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800/40" title={journal.type}>
                    {journal.name.length > 25 ? journal.name.slice(0, 22) + "..." : journal.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Research Analytics Dashboard - Hide on Homepage Preview */}
        {!isPreview && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            {/* Indexing breakdown */}
            <div className="glass-panel p-6 rounded-3xl border flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <BarChart className="w-4 h-4 text-indigo-500" /> By Journal Indexing
                </h4>
                <div className="space-y-4">
                  {[
                    { label: "SCI Journals", count: 3, percentage: 27, color: "from-blue-500 to-indigo-500" },
                    { label: "Scopus & E-SCI", count: 4, percentage: 36, color: "from-purple-500 to-pink-500" },
                    { label: "Book Chapters", count: 1, percentage: 9, color: "from-amber-500 to-orange-500" },
                    { label: "UGC Approved", count: 3, percentage: 27, color: "from-emerald-500 to-teal-500" },
                  ].map((item) => (
                    <div key={item.label} className="space-y-1">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold text-slate-600 dark:text-slate-400">{item.label}</span>
                        <span className="font-bold text-slate-800 dark:text-slate-200">{item.count} {item.count === 1 ? 'Paper' : 'Papers'} ({item.percentage}%)</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 dark:bg-slate-850/80 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Publisher breakdown */}
            <div className="glass-panel p-6 rounded-3xl border flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <BarChart className="w-4 h-4 text-emerald-500" /> By Major Publishers
                </h4>
                <div className="space-y-4">
                  {[
                    { label: "Springer Nature", count: 2, percentage: 18, color: "from-sky-500 to-blue-500" },
                    { label: "Elsevier", count: 1, percentage: 9, color: "from-orange-500 to-amber-500" },
                    { label: "Taylor & Francis", count: 1, percentage: 9, color: "from-emerald-500 to-teal-500" },
                    { label: "Sage / IOP / STM", count: 3, percentage: 27, color: "from-purple-500 to-violet-500" },
                    { label: "Others (UGC/IJEAT)", count: 4, percentage: 37, color: "from-slate-500 to-slate-400" },
                  ].map((item) => (
                    <div key={item.label} className="space-y-1">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold text-slate-600 dark:text-slate-400">{item.label}</span>
                        <span className="font-bold text-slate-800 dark:text-slate-200">{item.count} {item.count === 1 ? 'Paper' : 'Papers'} ({item.percentage}%)</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 dark:bg-slate-850/80 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Publication Timeline */}
            <div className="glass-panel p-6 rounded-3xl border flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <BarChart className="w-4 h-4 text-purple-500" /> Publication Timeline
                </h4>
                <div className="flex items-end justify-between h-32 gap-1.5 bg-slate-950/20 p-4 rounded-2xl border border-slate-200/5 dark:border-slate-800/30">
                  {[
                    { year: 2015, count: 1 },
                    { year: 2016, count: 1 },
                    { year: 2019, count: 1 },
                    { year: 2020, count: 1 },
                    { year: 2023, count: 1 },
                    { year: 2024, count: 3 },
                    { year: 2025, count: 2 },
                    { year: 2026, count: 1 },
                  ].map((d) => (
                    <div key={d.year} className="flex flex-col items-center flex-grow group">
                      <span className="text-[9px] font-bold text-indigo-400 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">{d.count}</span>
                      <div 
                        style={{ height: `${(d.count / 3) * 60}px` }} 
                        className="w-full rounded-t bg-gradient-to-t from-indigo-500 to-purple-500 group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300 shadow-md group-hover:shadow-indigo-500/25"
                      />
                      <span className="text-[8px] font-bold text-slate-400 dark:text-slate-500 mt-2 font-mono">{d.year}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-[10px] text-slate-400 font-semibold mt-3 text-center">
                Peak output: 3 papers in 2024 (Ph.D. completion phase)
              </div>
            </div>

          </div>
        )}

        {/* Filter & Search Bar - Hide on Homepage Preview */}
        {!isPreview && (
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="flex flex-wrap gap-1 bg-slate-100 dark:bg-slate-900/60 p-1 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 w-full md:w-auto">
              {[
                { id: "all", label: "All Papers (11)" },
                { id: "sci", label: "SCI" },
                { id: "scopus-esci", label: "Scopus/ESCI" },
                { id: "ugc", label: "UGC" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                    activeFilter === tab.id
                      ? "bg-white dark:bg-slate-800 text-slate-950 dark:text-white shadow-sm border border-slate-200/40 dark:border-slate-700/40"
                      : "text-slate-500 hover:text-slate-950 dark:hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search research paper..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-sm glass-panel"
              />
            </div>
          </div>
        )}

        {/* Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {displayPublications.map((pub) => (
              <PublicationCard key={pub.id} pub={pub} isPreview={isPreview} />
            ))}
          </AnimatePresence>

          {!isPreview && filteredPublications.length === 0 && (
            <div className="col-span-full py-16 text-center text-slate-400 dark:text-slate-500">
              No publications match your filter or search query.
            </div>
          )}
        </div>

        {/* Redirect CTA Button for homepage overview */}
        {isPreview && (
          <div className="flex justify-center mt-12 relative z-20">
            <Link
              href="/publications"
              className="px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-500/25 hover:-translate-y-0.5 transition-all duration-300 flex items-center space-x-2 cursor-pointer"
            >
              <span>View All Publications</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </Link>
          </div>
        )}

        {/* Load More Button for detail subpage */}
        {!isPreview && filteredPublications.length > 4 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisibleCount((prev) => (prev === 4 ? filteredPublications.length : 4))}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-indigo-600 text-white font-bold text-xs shadow-md shadow-primary-500/20 hover:scale-105 transition-transform cursor-pointer"
            >
              {visibleCount === 4 ? `View All Publications (${filteredPublications.length})` : "Show Less"}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

function PublicationCard({ pub, isPreview = false }: { pub: Publication; isPreview?: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const [coverOpen, setCoverOpen] = useState(false);
  const router = useRouter();

  const coverThumbnail = pub.coverImage ? (
    <button
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCoverOpen(true); }}
      suppressHydrationWarning
      className="relative w-full shrink-0 cursor-pointer group/cover rounded-t-3xl overflow-hidden"
      style={{ height: "200px" }}
    >
      <img
        src={pub.coverImage}
        alt={pub.title}
        className="w-full h-full object-cover object-top group-hover/cover:scale-105 transition-transform duration-500 bg-white"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
      {/* Publisher badge */}
      {pub.publisher && (
        <div className={`absolute top-2 right-2 text-[9px] px-2 py-0.5 rounded-full font-black uppercase tracking-widest shadow-lg ${getPublisherStyle(pub.publisher)}`}>
          {pub.publisher}
        </div>
      )}
      {/* Category badge */}
      <div className="absolute top-2 left-2 text-[9px] px-2 py-0.5 rounded-full font-black uppercase tracking-widest bg-indigo-600/80 text-white shadow-lg">
        {pub.category === "sci" ? "SCI" : pub.category === "scopus-esci" ? "Scopus/ESCI" : pub.category === "book-chapter" ? "Book Chapter" : "UGC"}
      </div>
      {/* Hover hint */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center opacity-0 group-hover/cover:opacity-100 transition-opacity duration-300">
        <span className="bg-white/90 text-slate-800 text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
          <FileText className="w-3 h-3" /> View Paper
        </span>
      </div>
    </button>
  ) : null;

  const lightbox = coverOpen && pub.coverImage ? (
    <AnimatePresence>
      <motion.div
        key="pub-lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setCoverOpen(false)}
        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 cursor-pointer"
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-xl w-full rounded-2xl overflow-hidden shadow-2xl bg-white"
        >
          <button
            onClick={() => setCoverOpen(false)}
            className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center cursor-pointer transition-colors"
          >
            <BarChart className="w-4 h-4 rotate-90" />
          </button>
          <img
            src={pub.coverImage}
            alt={pub.title}
            className="w-full h-auto object-contain max-h-[80vh]"
          />
          <div className="bg-slate-900 px-5 py-4 text-center">
            <p className="text-sm font-bold text-slate-100 leading-snug">&ldquo;{pub.title}&rdquo;</p>
            <p className="text-[11px] text-slate-400 mt-1">{pub.authors} · {pub.journal} ({pub.year})</p>
            {pub.doi && (
              <a href={pub.doi} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 text-[10px] font-bold text-indigo-400 hover:text-indigo-300 mt-2 transition-colors">
                <ExternalLink className="w-3 h-3" /> Open DOI
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  ) : null;

  const cardContent = (
    <div className="flex flex-col h-full">
      {coverThumbnail}

      <div className="p-5 flex flex-col flex-grow">
        {/* Category / Publisher row - only if no cover (already shown in image) */}
        {!pub.coverImage && (
          <div className="flex items-center justify-between gap-3 mb-4">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500">
              {pub.category === "sci" ? "SCI Journal" : pub.category === "scopus-esci" ? "Scopus / ESCI" : pub.category === "book-chapter" ? "Book Chapter" : "UGC Approved"}
            </span>
            {pub.publisher && (
              <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${getPublisherStyle(pub.publisher)}`}>
                {pub.publisher}
              </span>
            )}
          </div>
        )}

        <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 leading-snug mb-3 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300 flex-grow">
          &ldquo;{pub.title}&rdquo;
        </h4>

        {!isPreview && (
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden mb-3 pt-3 border-t border-slate-100 dark:border-slate-800/40"
              >
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2 leading-relaxed">
                  <span className="font-bold text-slate-400 dark:text-slate-500">Authors:</span> {pub.authors}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-1 leading-relaxed">
                  <span className="font-bold text-slate-400 dark:text-slate-500">Journal:</span> {pub.journal}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        )}

        <div className="border-t border-slate-100 dark:border-slate-800/50 pt-3 flex items-center justify-between mt-auto">
          <span className="text-xs font-semibold text-slate-400 flex items-center">
            <FileText className="w-3.5 h-3.5 mr-1.5 text-indigo-500" />
            <span>{pub.journal.length > 28 ? pub.journal.slice(0, 26) + "…" : pub.journal} ({pub.year})</span>
          </span>

          <div className="flex items-center space-x-3">
            {!isPreview && (
              <span className="text-xs font-bold text-indigo-500 group-hover:text-indigo-600 dark:text-indigo-400 transition-colors flex items-center">
                {expanded ? "Less" : "More"}
                <ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
              </span>
            )}

            {pub.doi && (
              <a
                href={pub.doi}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-xs font-semibold text-primary-500 dark:text-indigo-400 hover:text-primary-600 dark:hover:text-indigo-300 flex items-center space-x-1 hover:underline"
              >
                <span>DOI</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  if (isPreview) {
    return (
      <>
        {lightbox}
        <motion.div
          layout
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          onClick={() => router.push("/publications")}
          className="glass-card rounded-3xl border border-slate-200/50 dark:border-slate-800/50 flex flex-col cursor-pointer group hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5 h-full overflow-hidden"
        >
          {cardContent}
        </motion.div>
      </>
    );
  }

  return (
    <>
      {lightbox}
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        onClick={() => setExpanded(!expanded)}
        className="glass-card rounded-3xl border border-slate-200/50 dark:border-slate-800/50 flex flex-col cursor-pointer group hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5 overflow-hidden"
      >
        {cardContent}
      </motion.div>
    </>
  );
}
