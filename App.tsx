import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import CVViewer from './components/CVViewer';
import { AppView, Language, Theme } from './types';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<AppView>(AppView.PORTFOLIO);
  const [language, setLanguage] = useState<Language>(Language.ES);
  const [theme, setTheme] = useState<Theme>(Theme.DARK);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const cvHeroImage = "https://app.leonardo.ai/img/new-background.webp"; // estilo profesional / limpio

  const heroImage = activeView === AppView.CV ? cvHeroImage : null;    

  useEffect(() => {
    if (theme === Theme.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Close sidebar on view change (mobile)
  const handleViewChange = (view: AppView) => {
    setActiveView(view);
    setIsSidebarOpen(false);
  };

  const renderView = () => {
    switch (activeView) {
      case AppView.PORTFOLIO:
        return <Dashboard onNavigate={handleViewChange} language={language} />;
      case AppView.CV:
        return <CVViewer onNavigate={handleViewChange} language={language} />;
      default:
        return <Dashboard onNavigate={handleViewChange} language={language} />;
    }
  };

  const isDark = theme === Theme.DARK;

  return (
    <div className={`flex h-screen w-full transition-colors duration-300 overflow-hidden ${isDark ? 'bg-[#020305] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      {/* Mobile Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <Sidebar 
        activeView={activeView} 
        onViewChange={handleViewChange} 
        language={language} 
        onLanguageChange={setLanguage}
        theme={theme}
        onThemeChange={setTheme}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Mobile Header */}
        <header className={`md:hidden flex items-center justify-between px-4 py-3 border-b z-30 transition-colors ${isDark ? 'bg-[#020305]/80 border-[#282c42]' : 'bg-white/80 border-slate-200'} backdrop-blur-md`}>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-primary-gradient flex items-center justify-center font-bold text-white text-sm">
              HV
            </div>
            <span className="font-bold text-sm tracking-tight">
              {language === Language.EN ? 'Portfolio' : 'Portafolio'}
            </span>
          </div>
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className={`p-2 rounded-lg ${isDark ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-100'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </header>

        <main className="flex-1 relative overflow-y-auto">
          <div>
          {activeView === AppView.CV && (
            <img 
              src={heroImage} 
              alt="Hernando Vargas Hero" 
              className="w-full h-full object-cover h-[200px]"
            />
          )}
        </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-full">
            {renderView()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;