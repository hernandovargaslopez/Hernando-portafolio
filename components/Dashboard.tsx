import React, { useState, useMemo, useEffect } from 'react';
import { AppView, Language } from '../types';
import { CV_DATA, DASHBOARD_CONTENT } from "../constants";

import * as LucideIcons from 'lucide-react';
import { ArrowLeft, ArrowRight, FileText, Mail, X, ChevronRight } from 'lucide-react';

interface DashboardProps {
  onNavigate: (view: AppView) => void;
  language: Language;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate, language }) => {
  const data = CV_DATA[language];
  const content = DASHBOARD_CONTENT[language];
  const [galleryProject, setGalleryProject] = useState<any | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const closeGallery = () => setGalleryProject(null);

  // Responsive items per page logic
  useEffect(() => {
    const handleResize = () => {
      // Mobile: 1 item, Tablet/Desktop: 3 items
      const newItemsPerPage = window.innerWidth < 768 ? 1 : 3;
      if (newItemsPerPage !== itemsPerPage) {
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(0); // Reset to first page to avoid index mismatches
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [itemsPerPage]);

  // Helper to check if a URL is a video
  const isVideoFile = (url: string) => {
    return url.match(/\.(mp4|webm|ogg)$|video/i);
  };

  // Group projects into pages based on responsive itemsPerPage
  const projectPages = useMemo(() => {
    const pages = [];
    for (let i = 0; i < content.projects.length; i += itemsPerPage) {
      pages.push(content.projects.slice(i, i + itemsPerPage));
    }
    return pages;
  }, [content.projects, itemsPerPage]);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % projectPages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + projectPages.length) % projectPages.length);
  };

  // Dynamic icon component for stats
  const DynamicIcon = ({ name, ...props }: { name: string; [key: string]: any }) => {
    const IconComponent = (LucideIcons as any)[name];
    return IconComponent ? <IconComponent {...props} /> : null;
  };

  return (
    <div>
      <div className="animate-in fade-in duration-700 pb-8">
        <header className="mb-8 max-w-10xl pt-4">
          <div className="z-10 relative">
            <p className="h2 text-5xl md:text-6xl font-black mb-4 leading-tight text-slate-900 dark:text-white">
              {data.name.split(' ')[0]} <span className="text-slate-400 dark:text-slate-600">{data.name.split(' ').slice(1).join(' ')}</span>
            </p>
            <p className="text-xl font-bold text-[#bf1820] tracking-wide inline-block">{data.title}</p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {content.intro}
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <button 
                onClick={() => onNavigate(AppView.CV)}
                className="px-6 py-2 glass hover:bg-slate-50 dark:hover:bg-[#1a1f2e] text-slate-900 dark:text-white font-bold rounded-full transition-all flex items-center shadow-sm"
              >
                {content.experienceBtn} <span className="ml-2 text-[#bf1820] opacity-80"><FileText size={16} strokeWidth={2.5} /></span>
              </button>
              <a href={`mailto:${data.email}`} className="px-6 py-2 glass hover:bg-slate-50 dark:hover:bg-[#1a1f2e] text-slate-900 dark:text-white font-bold rounded-full transition-all flex items-center shadow-sm">
                {content.messageBtn} <span className="ml-2 text-[#bf1820] opacity-80"><Mail size={16} strokeWidth={2.5} /></span>
              </a>
            </div>
          </div>
        </header>

        <section className="space-y-6 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{content.highlights}</h2>
            <div className="flex items-center gap-2">
               <button 
                onClick={prevPage}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-[#bf1820] dark:hover:text-[#bf1820]/70 transition-all active:scale-90"
                aria-label="Previous Page"
               >
                 <ArrowLeft size={18} strokeWidth={2} />
               </button>
               <button 
                onClick={nextPage}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-[#bf1820] dark:hover:text-[#bf1820]/70 transition-all active:scale-90"
                aria-label="Next Page"
               >
                 <ArrowRight size={18} strokeWidth={2} />
               </button>
            </div>
          </div>

          {/* Carousel Viewport */}
          <div className="relative overflow-hidden rounded-[2.5rem]">
            {/* Carousel Track */}
            <div 
              className="flex transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {projectPages.map((page, pageIdx) => (
                <div 
                  key={pageIdx}
                  className="w-full shrink-0 px-1"
                >
                  <div className={`grid gap-6 ${itemsPerPage === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
                    {page.map((project, idx) => (
                      <div 
                        key={idx}
                        className="group relative glass rounded-[2rem] border-slate-200 dark:border-[#282c42] hover:border-[#bf1820]/50 transition-all duration-500 flex flex-col h-full cursor-default overflow-hidden"
                      >
                        {/* Visual Preview (Top) */}
                        <div className="aspect-video w-full overflow-hidden border dark:border-[#282c42] bg-slate-100 dark:bg-[#10151f] shadow-inner relative">
                          {project.gallery && project.gallery[0] && (
                            isVideoFile(project.gallery[0]) ? (
                              <video 
                                src={project.gallery[0]} 
                                autoPlay 
                                muted 
                                loop 
                                playsInline 
                                className="w-full h-full object-cover" 
                              />
                            ) : (
                              <img 
                                src={project.gallery[0]} 
                                alt={project.title} 
                                className="w-full h-full object-cover" 
                              />
                            )
                          )}
                        </div>

                        {/* Details (Bottom) */}
                        <div className="flex flex-col flex-1 p-6">
                          <span className="text-[9px] font-black text-[#bf1820] uppercase tracking-[0.2em] mb-2 block">{project.category}</span>
                          <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white leading-tight group-hover:text-[#bf1820] transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-6 line-clamp-3">
                            {project.desc}
                          </p>
                          
                          <div className="flex flex-wrap gap-1.5 mb-6">
                            {project.tags.map(tag => (
                              <span key={tag} className="text-[9px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-[#020305] border border-slate-200 dark:border-[#282c42] text-slate-500 font-bold uppercase tracking-tight">
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div 
                            className="pt-4 border-t border-slate-200 dark:border-[#282c42] flex items-center justify-between group/btn cursor-pointer mt-auto"
                            onClick={() => setGalleryProject(project)}
                          >
                            <span className="text-xs font-bold text-slate-500 dark:text-slate-300 group-hover/btn:text-[#bf1820] transition-colors">
                              {content.viewGallery || (language === Language.EN ? 'View Gallery' : 'Ver Galería')}
                            </span>
                            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-[#020305] border border-slate-200 dark:border-[#282c42] flex items-center justify-center text-slate-900 dark:text-white group-hover/btn:bg-primary-gradient group-hover/btn:text-white group-hover/btn:scale-110 transition-all">
                              <ChevronRight size={14} strokeWidth={3} />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center gap-3 mt-6">
            {projectPages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentPage === idx 
                    ? 'w-10 bg-primary-gradient' 
                    : 'w-2 bg-slate-300 dark:bg-[#282c42] hover:bg-slate-400'
                }`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Expertise Stats */}
        <section className="grid mt-16 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.stats.map((stat, i) => (
            <div key={i} className="glass p-6 rounded-3xl flex items-center gap-5 border-slate-200/50 dark:border-[#282c42]/50 hover:shadow-xl hover:shadow-[#bf1820]/5 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-[#020305] border border-slate-200 dark:border-[#282c42] flex items-center justify-center text-[#bf1820] shadow-inner">
                <DynamicIcon name={stat.icon} size={22} strokeWidth={2} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-base font-bold text-slate-900 dark:text-white">{stat.val}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Gallery Modal */}
        {galleryProject && (
          <div 
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-10 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-300"
            onClick={closeGallery}
          >
            <div 
              className="w-full max-w-6xl glass rounded-[2.5rem] overflow-hidden flex flex-col max-h-[90vh] shadow-[0_0_100px_rgba(0,0,0,0.5)] animate-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="px-10 py-8 border-b border-slate-200 dark:border-[#282c42] flex items-center justify-between bg-white/20 dark:bg-[#10151f]/50">
                <div>
                  <h3 className="text-3xl font-black text-slate-900 dark:text-white">{galleryProject.title}</h3>
                  <p className="text-sm font-bold text-[#bf1820] dark:text-[#bf1820]/70 uppercase tracking-widest mt-1">{galleryProject.category}</p>
                </div>
                <button 
                  onClick={closeGallery}
                  className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#282c42] transition-all shadow-md"
                >
                  <X size={20} strokeWidth={2} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-10 bg-slate-50 dark:bg-[#020305]/80">
                <div className="grid grid-cols-1 gap-10">
                  {galleryProject.gallery?.map((itemUrl: string, i: number) => (
                    <div 
                      key={i} 
                      className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-[#282c42] shadow-2xl bg-slate-200 dark:bg-[#10151f]"
                    >
                      {isVideoFile(itemUrl) ? (
                        <video 
                          src={itemUrl} 
                          autoPlay 
                          muted 
                          loop 
                          playsInline 
                          className="w-full h-auto object-contain max-h-[70vh]"
                        />
                      ) : (
                        <img 
                          src={itemUrl} 
                          alt={`${galleryProject.title} screenshot ${i+1}`}
                          className="w-full h-auto object-contain max-h-[70vh]"
                        />
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 p-8 glass rounded-3xl border border-slate-200 dark:border-[#282c42] bg-white/40 dark:bg-[#10151f]/40">
                  <h4 className="text-sm font-black text-slate-900 dark:text-white mb-4 uppercase tracking-widest">
                    {language === Language.EN ? 'Project Concept' : 'Concepto del Proyecto'}
                  </h4>
                  <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    {galleryProject.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <style>{`
        .cubic-bezier {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;  
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;