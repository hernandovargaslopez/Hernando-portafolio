import React, { useState } from 'react';
import { AppView, Language } from '../types';
import { CV_DATA, DASHBOARD_CONTENT } from '../constants';

interface DashboardProps {
  onNavigate: (view: AppView) => void;
  language: Language;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate, language }) => {
  const data = CV_DATA[language];
  const content = DASHBOARD_CONTENT[language];
  const [galleryProject, setGalleryProject] = useState<any | null>(null);

  const closeGallery = () => setGalleryProject(null);

  // Helper to check if a URL is a video
  const isVideoFile = (url: string) => {
    return url.match(/\.(mp4|webm|ogg)$|video/i);
  };

  return (
    <div>
      <div className="animate-in fade-in duration-700 pb-8">
        <header className="mb-8 max-w-10xl pt-4">
          <div className= "z-10 relative">
            <p className="h2 text-5xl md:text-6xl font-black mb-4 leading-tight text-slate-900 dark:text-white">
              {data.name.split(' ')[0]} <span className="text-slate-400 dark:text-slate-600">{data.name.split(' ').slice(1).join(' ')}</span>
            </p>
            <p className="text-xl font-bold text-primary-gradient tracking-wide inline-block">{data.title}</p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {content.intro}
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <button 
                onClick={() => onNavigate(AppView.CV)}
                className="px-4 py-1 glass hover:bg-slate-50 dark:hover:bg-[#1a1f2e] text-slate-900 dark:text-white font-bold rounded-full transition-all flex items-center"
              >
                {content.experienceBtn} <span className="ml-2">📄</span>
              </button>
              <a href={`mailto:${data.email}`} className="px-4 py-1 glass hover:bg-slate-50 dark:hover:bg-[#1a1f2e] text-slate-900 dark:text-white font-bold rounded-full transition-all flex items-center">
                {content.messageBtn} <span className="ml-2">✉️</span>
              </a>
            </div>
          </div>
        </header>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{content.highlights}</h2>
            <div className="h-px flex-1 bg-slate-200 dark:bg-[#282c42] mx-6 hidden md:block opacity-50"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {content.projects.map((project, idx) => (
              <div 
                key={idx}
                className="group relative glass p-6 rounded-[1.5rem] hover:border-indigo-500/50 transition-all duration-500 flex flex-col h-full cursor-default"
              >
                
                <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em] mb-3 block">{project.category}</span>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-[#020305] border border-slate-200 dark:border-[#282c42] text-slate-500 font-bold uppercase tracking-tight">
                      {tag}
                    </span>
                  ))}
                </div>

                <div 
                  className="pt-3 border-t border-slate-200 dark:border-[#282c42] flex items-center justify-between group/btn cursor-pointer"
                  onClick={() => setGalleryProject(project)}
                >
                  <span className="text-[10px] font-bold text-slate-500 dark:text-slate-300 group-hover/btn:text-indigo-500 transition-colors">
                    {content.viewGallery || (language === Language.EN ? 'View Gallery' : 'Ver Galería')}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-[#020305] border border-slate-200 dark:border-[#282c42] flex items-center justify-center text-slate-900 dark:text-white group-hover/btn:bg-primary-gradient group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all">
                    →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Expertise Stats */}
        <section className="grid mt-10 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {content.stats.map((stat, i) => (
            <div key={i} className="glass p-4 rounded-2xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-[#020305] border border-slate-200 dark:border-[#282c42] flex items-center justify-center text-lg">{stat.icon}</div>
              <div>
                <p className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{stat.label}</p>
                <p className="text-xs font-bold text-slate-900 dark:text-white">{stat.val}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Gallery Modal */}
        {galleryProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300"
            onClick={closeGallery}
          >
            <div 
              className="w-full max-w-5xl glass rounded-[2rem] overflow-hidden flex flex-col max-h-[90vh] shadow-2xl animate-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="px-8 py-6 border-b border-slate-200 dark:border-[#282c42] flex items-center justify-between bg-white/20 dark:bg-[#10151f]/50">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">{galleryProject.title}</h3>
                  <p className="text-sm font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-widest">{galleryProject.category}</p>
                </div>
                <button 
                  onClick={closeGallery}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#282c42] transition-all"
                >
                  ✕
                </button>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-8 bg-slate-50 dark:bg-[#020305]/80">
                {galleryProject.gallery?.map((itemUrl: string, i: number) => (
                  <div 
                    key={i} 
                    className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-[#282c42] shadow-lg bg-slate-200 dark:bg-[#10151f]"
                  >
                    {isVideoFile(itemUrl) ? (
                      <video 
                        src={itemUrl} 
                        autoPlay 
                        muted 
                        loop 
                        playsInline 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img 
                        src={itemUrl} 
                        alt={`${galleryProject.title} screenshot ${i+1}`}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                ))}
                
                <div className="mt-8 p-6 glass rounded-2xl border border-slate-200 dark:border-[#282c42]">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-wide">
                    {language === Language.EN ? 'Project Context' : 'Contexto del Proyecto'}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {galleryProject.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;