
import React from 'react';
import { AppView, Language, Theme } from '../types';
import { Briefcase, FileText, Languages, Moon, Sun, X, Download } from 'lucide-react';

interface SidebarProps {
  activeView: AppView;
  onViewChange: (view: AppView) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  activeView, 
  onViewChange, 
  language, 
  onLanguageChange,
  theme,
  onThemeChange,
  isOpen = false,
  onClose
}) => {
  const navItems = [
    { id: AppView.PORTFOLIO, label: language === Language.EN ? 'Portfolio' : 'Portafolio', icon: Briefcase },
    { id: AppView.CV, label: language === Language.EN ? 'Resume / CV' : 'Resumen / CV', icon: FileText },
  ];

  const isDark = theme === Theme.DARK;

  const handleDownload = (): void => {
    const fileName =
      language === Language.EN
        ? 'HojadevidahernandovargasL2026EN.pdf'
        : 'HojadevidahernandovargasL2026ES.pdf';

    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}assets/${fileName}`;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };




  return (
    <aside className={`
      fixed md:sticky top-0 left-0 h-full z-50 w-64 glass border-r flex flex-col transition-all duration-300 
      ${isDark ? 'border-[#282c42]' : 'border-slate-200 bg-white/95'}
      ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
    `}>
      <div className="p-4 flex flex-col h-full overflow-y-auto custom-scrollbar">
        {/* Header with Close button for mobile */}
        <div className="flex items-center justify-between mb-8 mt-2 px-2">
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 rounded-lg bg-primary-gradient flex items-center justify-center font-bold text-lg text-white">
              HV
            </div>
            <span className={`font-bold text-base tracking-tight ${isDark ? 'text-white' : 'text-slate-800'}`}>
              {language === Language.EN ? 'Portfolio' : 'Portafolio'}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="md:hidden p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
          >
            <X size={20} strokeWidth={2} />
          </button>
        </div>

        <nav className="space-y-1.5 flex-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                activeView === item.id
                  ? 'bg-primary-gradient text-white shadow-lg shadow-indigo-600/20'
                  : isDark 
                    ? 'text-slate-400 hover:bg-[#1a1f2e] hover:text-slate-200'
                    : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <span className="flex items-center justify-center w-6">
                <item.icon size={18} strokeWidth={2} />
              </span>
              <span className="font-semibold text-sm">{item.label}</span>
            </button>
          ))}

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl transition-all duration-300 mt-4 border ${
              isDark 
              ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400 hover:bg-indigo-600 hover:text-white hover:border-indigo-600' 
              : 'bg-indigo-50 border-indigo-200 text-indigo-600 hover:bg-indigo-600 hover:text-white hover:border-indigo-600'
            }`}
          >
            <span className="font-semibold text-sm">{language === Language.EN ? 'Download CV' : 'Descargar CV'}</span>
          </button>
        </nav>

        <div className={`mt-6 pt-6 border-t ${isDark ? 'border-[#282c42]' : 'border-slate-200'}`}>
           <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-3 px-2">Settings / Ajustes</p>
           
           <div className="space-y-2">
             <button
               onClick={() => onLanguageChange(language === Language.EN ? Language.ES : Language.EN)}
               className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl border transition-all ${
                 isDark 
                 ? 'bg-[#020305] border-[#282c42] text-slate-300 hover:text-white hover:border-indigo-500/50' 
                 : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:border-indigo-300'
               }`}
             >
               <div className="flex items-center space-x-3">
                 <span className="flex items-center justify-center w-6">
                    <Languages size={18} strokeWidth={2} />
                 </span>
                 <span className="font-semibold text-xs">{language === Language.EN ? 'English' : 'Español'}</span>
               </div>
               <div className="text-[9px] bg-indigo-500/20 text-indigo-400 px-1.5 py-0.5 rounded-full font-bold uppercase tracking-tighter">
                 {language === Language.EN ? 'EN' : 'ES'}
               </div>
             </button>

             <button
               onClick={() => onThemeChange(isDark ? Theme.LIGHT : Theme.DARK)}
               className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl border transition-all ${
                 isDark 
                 ? 'bg-[#020305] border-[#282c42] text-slate-300 hover:text-white hover:border-indigo-500/50' 
                 : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:border-indigo-300'
               }`}
             >
               <div className="flex items-center space-x-3">
                 <span className="flex items-center justify-center w-6">
                    {isDark ? <Moon size={18} strokeWidth={2} /> : <Sun size={18} strokeWidth={2} />}
                 </span>
                 <span className="font-semibold text-xs">{isDark ? (language === Language.EN ? 'Dark Mode' : 'Modo Oscuro') : (language === Language.EN ? 'Light Mode' : 'Modo Claro')}</span>
               </div>
               <div className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold ${isDark ? 'bg-indigo-500/20 text-indigo-400' : 'bg-amber-500/20 text-amber-600'}`}>
                 {isDark ? 'DARK' : 'LIGHT'}
               </div>
             </button>
           </div>
        </div>

        <div className={`mt-6 pt-6 border-t mb-2 ${isDark ? 'border-[#282c42]' : 'border-slate-200'}`}>
          <div className={`${isDark ? 'bg-[#020305] border border-[#282c42]' : 'bg-slate-100'} rounded-xl p-3`}>
            <p className="text-[10px] text-slate-500 mb-1 font-bold uppercase tracking-widest">{language === Language.EN ? 'Status' : 'Estado'}</p>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse mt-1.5 shrink-0"></div>
              <span className={`text-xs font-semibold leading-tight ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                {language === Language.EN ? 'Available for New Opportunities' : 'Disponible para nuevas oportunidades'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
