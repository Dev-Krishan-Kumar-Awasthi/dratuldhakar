"use client";

import { useState } from "react";
import { Search, ExternalLink, ShieldCheck, Bookmark, FileText, BarChart } from "lucide-react";
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
  },
  {
    id: 6,
    title: "Fault Diagnosis of Air Compressor System using Local Mean Decomposition (LMD) and Logistic Regression (LR) Machine Learning Classifier",
    authors: "Atul Dhakar, Bhagat Singh, and Pankaj Gupta",
    journal: "International Conference on Mechanical and Materials Engineering",
    year: 2024,
    publisher: "STM Journal",
    category: "scopus-esci",
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
  },
  // UGC Approved
  {
    id: 9,
    title: "Performance improvement of single slope solar water distillation plant by using paraffin wax martial",
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

export default function Publications() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPublications = publicationsData.filter((pub) => {
    const matchesCategory = activeFilter === "all" || pub.category === activeFilter;
    const matchesSearch =
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (pub.publisher && pub.publisher.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getPublisherStyle = (publisher?: string) => {
    if (!publisher) return "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400";
    const pubLower = publisher.toLowerCase();
    if (pubLower.includes("springer")) return "bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-300 border border-blue-500/20";
    if (pubLower.includes("elsevier")) return "bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-300 border border-orange-500/20";
    if (pubLower.includes("taylor")) return "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300 border border-emerald-500/20";
    if (pubLower.includes("sage")) return "bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-300 border border-purple-500/20";
    if (pubLower.includes("iop")) return "bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-300 border border-cyan-500/20";
    return "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700";
  };

  return (
    <section id="publications" className="py-24 relative overflow-hidden bg-slate-50/30 dark:bg-slate-900/10">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/3 w-[30rem] h-[30rem] glow-emerald rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-primary-500 mb-3">Research Outputs</h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Publications & Academic Contributions
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Citations & Research Profiles Board */}
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
              <span>Peer Reviewer Credentials</span>
            </h3>
            <div className="space-y-1.5">
              {reviewerData.map((journal, jIdx) => (
                <div key={jIdx} className="flex justify-between items-center text-xs border-b border-slate-100 dark:border-slate-800/40 pb-1.5 last:border-0 last:pb-0">
                  <span className="font-semibold text-slate-700 dark:text-slate-300 truncate max-w-[200px]" title={journal.name}>
                    {journal.name}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase shrink-0">
                    {journal.type.split(" ")[0]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-1.5 bg-slate-100 dark:bg-slate-900/60 p-1.5 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 w-full md:w-auto">
            {[
              { id: "all", label: "All Papers (11)" },
              { id: "sci", label: "SCI Journals" },
              { id: "scopus-esci", label: "Scopus / ESCI" },
              { id: "book-chapter", label: "Book Chapters" },
              { id: "ugc", label: "UGC Approved" },
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

        {/* Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredPublications.map((pub, idx) => (
              <motion.div
                layout
                key={pub.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl p-6 border flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                      {pub.category === "sci"
                        ? "SCI Journal"
                        : pub.category === "scopus-esci"
                        ? "Scopus / ESCI"
                        : pub.category === "book-chapter"
                        ? "Book Chapter"
                        : "UGC Approved"}
                    </span>
                    {pub.publisher && (
                      <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${getPublisherStyle(pub.publisher)}`}>
                        {pub.publisher}
                      </span>
                    )}
                  </div>

                  <h4 className="text-base font-bold text-slate-800 dark:text-slate-100 leading-snug mb-3">
                    &ldquo;{pub.title}&rdquo;
                  </h4>
                  
                  <p className="text-xs text-slate-400 dark:text-slate-500 mb-2">
                    Authors: <span className="font-medium text-slate-600 dark:text-slate-400">{pub.authors}</span>
                  </p>
                </div>

                <div className="border-t border-slate-100 dark:border-slate-800/50 pt-4 mt-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 flex items-center">
                    <FileText className="w-3.5 h-3.5 mr-1" />
                    <span>{pub.journal} ({pub.year})</span>
                  </span>
                  
                  {pub.doi && (
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-primary-500 dark:text-indigo-400 hover:text-primary-600 dark:hover:text-indigo-300 flex items-center space-x-1 hover:underline"
                    >
                      <span>DOI Link</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredPublications.length === 0 && (
            <div className="col-span-full py-16 text-center text-slate-400 dark:text-slate-500">
              No publications match your filter or search query.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
