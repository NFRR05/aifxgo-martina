import image_edf52eac4a37a5c0b97b859035a1700c124746ff from 'figma:asset/edf52eac4a37a5c0b97b859035a1700c124746ff.png';
import React, { useState } from 'react';
import { Menu, X, ChevronDown, Send } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { Language } from '../i18n/translations';

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'IT', label: 'Italiano', flag: '🇮🇹' },
  { code: 'EN', label: 'English', flag: '🇬🇧' },
  { code: 'ES', label: 'Español', flag: '🇪🇸' }
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const currentLang = languages.find(l => l.code === language) || languages[0];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" onClick={(e) => scrollToSection(e, 'home')} className="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
            <img className="h-10 w-auto group-hover:scale-105 transition-transform" src={image_edf52eac4a37a5c0b97b859035a1700c124746ff} alt="AIFXGO Logo" />
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" onClick={(e) => scrollToSection(e, 'home')} className="text-slate-600 hover:text-amber-600 font-medium transition-colors text-sm uppercase tracking-wide">{t.header.home}</a>
            <a href="#features" onClick={(e) => scrollToSection(e, 'features')} className="text-slate-600 hover:text-amber-600 font-medium transition-colors text-sm uppercase tracking-wide">{t.header.features}</a>
            <a href="#guide" onClick={(e) => scrollToSection(e, 'guide')} className="text-slate-600 hover:text-amber-600 font-medium transition-colors text-sm uppercase tracking-wide">{t.header.howItWorks}</a>
            <a href="#reviews" onClick={(e) => scrollToSection(e, 'reviews')} className="text-slate-600 hover:text-amber-600 font-medium transition-colors text-sm uppercase tracking-wide">{t.header.reviews}</a>
            <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="text-slate-600 hover:text-amber-600 font-medium transition-colors text-sm uppercase tracking-wide">{t.header.faq}</a>

            <div className="flex items-center space-x-4 ml-4">
              {/* Language Dropdown Desktop */}
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center gap-2 text-slate-700 bg-slate-50 px-3 py-2 rounded-lg border border-slate-200 hover:bg-slate-100 transition-all font-bold text-sm"
                >
                  <span className="text-lg">{currentLang.flag}</span>
                  <span>{currentLang.code}</span>
                  <ChevronDown size={14} className={`transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
                </button>

                {isLangOpen && (
                  <div className="absolute top-full mt-2 right-0 w-40 bg-white border border-slate-100 rounded-xl shadow-xl py-2 z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangOpen(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-2 hover:bg-slate-50 text-slate-700 text-sm font-medium transition-colors"
                      >
                        <span className="text-lg">{lang.flag}</span>
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="https://t.me/aifxgo"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 transition-all duration-200 bg-amber-400 rounded-full hover:bg-amber-500 hover:shadow-lg hover:shadow-amber-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
              >
                <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                {t.header.cta}
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-amber-600 transition-colors p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 absolute w-full shadow-xl h-screen flex flex-col">
          <div className="px-4 pt-4 pb-6 space-y-2 flex-1">
            <a href="#" onClick={(e) => scrollToSection(e, 'home')} className="block px-3 py-4 border-b border-slate-50 text-lg font-bold text-slate-900 hover:text-amber-600">{t.header.home}</a>
            <a href="#features" onClick={(e) => scrollToSection(e, 'features')} className="block px-3 py-4 border-b border-slate-50 text-lg font-bold text-slate-900 hover:text-amber-600">{t.header.features}</a>
            <a href="#guide" onClick={(e) => scrollToSection(e, 'guide')} className="block px-3 py-4 border-b border-slate-50 text-lg font-bold text-slate-900 hover:text-amber-600">{t.header.howItWorks}</a>
            <a href="#reviews" onClick={(e) => scrollToSection(e, 'reviews')} className="block px-3 py-4 border-b border-slate-50 text-lg font-bold text-slate-900 hover:text-amber-600">{t.header.reviews}</a>
            <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="block px-3 py-4 border-b border-slate-50 text-lg font-bold text-slate-900 hover:text-amber-600">{t.header.faq}</a>

            <div className="mt-8 flex flex-col gap-3">
              <div className="grid grid-cols-3 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsOpen(false);
                    }}
                    className={`flex flex-col items-center gap-1 py-3 rounded-xl border transition-all ${currentLang.code === lang.code ? 'bg-amber-50 border-amber-200 text-amber-700' : 'bg-slate-50 border-slate-100 text-slate-600'}`}
                  >
                    <span className="text-2xl">{lang.flag}</span>
                    <span className="text-xs font-bold">{lang.code}</span>
                  </button>
                ))}
              </div>
              <a
                href="https://t.me/aifxgo"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 transition-all duration-200 bg-amber-400 rounded-full hover:bg-amber-500 hover:shadow-lg hover:shadow-amber-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                {t.header.cta}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};