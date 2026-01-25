import React from 'react';
import { CV_DATA } from '../constants';
import { Language, AppView } from '../types';
import { Mail, Phone, MapPin, Globe, UserCircle, Briefcase, MessageSquare, Wrench, GraduationCap } from 'lucide-react';

interface CVViewerProps {
  language: Language;
  onNavigate: (view: AppView) => void;
}

const CVViewer: React.FC<CVViewerProps> = ({ language, onNavigate }) => {
  const data = CV_DATA[language];

  const labels = {
    summary: language === Language.EN ? 'Professional Summary' : 'Perfil Profesional',
    experience: language === Language.EN ? 'Experience' : 'Experiencia',
    references: language === Language.EN ? 'References' : 'Referencias',
    skills: language === Language.EN ? 'Core Skills' : 'Habilidades Principales',
    education: language === Language.EN ? 'Education' : 'Educación',
    languages: language === Language.EN ? 'Languages' : 'Idiomas',
    portfolio: language === Language.EN ? 'View Portfolio' : 'Ver Portafolio',
    dev: language === Language.EN ? 'Development' : 'Desarrollo',
    design: language === Language.EN ? 'Design Tools' : 'Herramientas de Diseño',
    platforms: language === Language.EN ? 'CMS & Platforms' : 'CMS y Plataformas',
    native: language === Language.EN ? 'Native' : 'Nativo',
    pro: language === Language.EN ? 'Professional' : 'Profesional'
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-12">
      {/* Header */}
      <section className="text-center space-y-3 pt-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase">{data.name}</h1>
        <p className="text-xl font-bold text-primary-gradient tracking-wide inline-block">{data.title}</p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <a href={`mailto:${data.email}`} className="glass px-3 py-1.5 rounded-full text-xs text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors flex items-center gap-2">
            <Mail size={12} strokeWidth={2.5} /> {data.email}
          </a>
          <span className="glass px-3 py-1.5 rounded-full text-xs text-slate-600 dark:text-slate-300 flex items-center gap-2">
            <Phone size={12} strokeWidth={2.5} /> {data.phone}
          </span>
          <span className="glass px-3 py-1.5 rounded-full text-xs text-slate-600 dark:text-slate-300 flex items-center gap-2">
            <MapPin size={12} strokeWidth={2.5} /> {data.location}
          </span>
          <button 
            onClick={() => onNavigate(AppView.PORTFOLIO)} 
            className="glass px-3 py-1.5 rounded-full text-xs text-indigo-600 dark:text-indigo-300 hover:text-indigo-800 dark:hover:text-indigo-100 transition-colors font-semibold flex items-center gap-2"
          >
            <Globe size={12} strokeWidth={2.5} /> {labels.portfolio}
          </button>
        </div>
      </section>

      {/* Summary */}
      <div className="shiny-border-container shadow-xl shadow-indigo-500/5">
        <section className="glass p-6 rounded-[1.5rem]">
          <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white flex items-center">
            <span className="mr-3 text-indigo-500"><UserCircle size={24} strokeWidth={1.75} /></span> {labels.summary}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
            {data.summary}
          </p>
        </section>
      </div>

      <div className="grid md:grid-cols-12 gap-8">
        {/* Main Column */}
        <div className="md:col-span-8 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-[#282c42] pb-2 mb-6 flex items-center">
              <span className="mr-3 text-indigo-500"><Briefcase size={22} strokeWidth={1.75} /></span> {labels.experience}
            </h2>
            <div className="space-y-8">
              {data.experience.map((job, idx) => (
                <div key={idx} className="relative pl-6 border-l border-slate-200 dark:border-[#282c42]">
                  <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-primary-gradient shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">{job.role}</h3>
                      <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm">{job.company}</p>
                    </div>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono glass px-2 py-1 rounded-lg self-start sm:self-center">
                      {job.period}
                    </span>
                  </div>
                  <ul className="space-y-2 mt-3">
                    {job.highlights.map((point, i) => (
                      <li key={i} className="text-slate-600 dark:text-slate-400 text-xs flex items-start leading-relaxed">
                        <span className="text-indigo-500 mr-2 mt-1.5 w-1 h-1 rounded-full shrink-0 bg-indigo-500"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-[#282c42] pb-2 mb-6 flex items-center">
              <span className="mr-3 text-indigo-500"><MessageSquare size={22} strokeWidth={1.75} /></span> {labels.references}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {data.references.map((ref, i) => (
                <div key={i} className="glass p-4 rounded-xl">
                  <p className="font-bold text-slate-900 dark:text-white text-sm">{ref.name}</p>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 mb-1.5">{ref.role}</p>
                  <p className="text-[10px] text-slate-500 font-mono break-all">{ref.contact}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Column */}
        <div className="md:col-span-4 space-y-8">
          <section>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <span className="mr-3 text-indigo-500"><Wrench size={22} strokeWidth={1.75} /></span> {labels.skills}
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">{labels.dev}</p>
                <div className="flex flex-wrap gap-1.5">
                  {data.skills.tech.map((s, i) => (
                    <span key={i} className="px-2 py-1 bg-indigo-500/10 border border-slate-200 dark:border-[#282c42] text-indigo-700 dark:text-indigo-300 rounded-lg text-[10px] font-semibold">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">{labels.design}</p>
                <div className="flex flex-wrap gap-1.5">
                  {data.skills.design.map((s, i) => (
                    <span key={i} className="px-2 py-1 bg-purple-500/10 border border-slate-200 dark:border-[#282c42] text-purple-700 dark:text-purple-300 rounded-lg text-[10px] font-semibold">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">{labels.platforms}</p>
                <div className="flex flex-wrap gap-1.5">
                  {data.skills.platforms.map((s, i) => (
                    <span key={i} className="px-2 py-1 bg-emerald-500/10 border border-slate-200 dark:border-[#282c42] text-emerald-700 dark:text-emerald-300 rounded-lg text-[10px] font-semibold">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <span className="mr-3 text-indigo-500"><GraduationCap size={22} strokeWidth={1.75} /></span> {labels.education}
            </h2>
            <div className="space-y-3">
              {data.education.map((edu, i) => (
                <div key={i} className="glass p-4 rounded-xl transition-transform hover:scale-[1.01]">
                  <p className="font-bold text-slate-900 dark:text-white text-xs leading-tight mb-1">{edu.degree}</p>
                  <p className="text-[10px] text-indigo-600 dark:text-indigo-400 font-medium">{edu.school}</p>
                  <p className="text-[9px] text-slate-500 dark:text-slate-500 mt-1 font-mono uppercase tracking-widest">{edu.year}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <span className="mr-3 text-indigo-500"><Globe size={22} strokeWidth={1.75} /></span> {labels.languages}
            </h2>
            <div className="flex flex-col gap-2">
              {data.languages.map((lang, i) => (
                <div key={i} className="flex items-center justify-between glass px-3 py-2 rounded-lg">
                  <span className="text-xs text-slate-700 dark:text-slate-200">{lang.split(' ')[0]}</span>
                  <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase">
                    {lang.includes('Native') || lang.includes('Nativo') ? labels.native : labels.pro}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CVViewer;