import image_edf52eac4a37a5c0b97b859035a1700c124746ff from 'figma:asset/edf52eac4a37a5c0b97b859035a1700c124746ff.png';
import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img className="h-8 w-auto brightness-0 invert" src={image_edf52eac4a37a5c0b97b859035a1700c124746ff} alt="AIFXGO Logo" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">{t.footer.platform}</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-amber-500 transition-colors">{t.footer.links.home}</a></li>
              <li><a href="#features" className="hover:text-amber-500 transition-colors">{t.footer.links.features}</a></li>
              <li><a href="#guide" className="hover:text-amber-500 transition-colors">{t.footer.links.howItWorks}</a></li>
              <li><a href="#reviews" className="hover:text-amber-500 transition-colors">{t.footer.links.reviews}</a></li>
              <li><a href="#faq" className="hover:text-amber-500 transition-colors">{t.footer.links.faq}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-amber-500 transition-colors">{t.footer.links.terms}</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">{t.footer.links.privacy}</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">{t.footer.links.risk}</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">{t.footer.links.cookie}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">{t.footer.community}</h4>
            <p className="text-sm text-slate-400 mb-4">{t.footer.communityDesc}</p>
            <div className="flex gap-4 mb-6">
              {/* Instagram */}
              <a
                href="https://instagram.com/aifxgo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white transition-all shadow-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/aifxgo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-sky-500 hover:text-white transition-all shadow-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1 .22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Risk Disclaimer */}
        <div className="border-t border-slate-800 pt-8 pb-8">
          <h5 className="text-amber-500 font-bold text-xs uppercase mb-2">{t.footer.riskDisclaimer.title}</h5>
          <p className="text-xs text-slate-500 leading-relaxed text-justify whitespace-pre-line">
            {t.footer.riskDisclaimer.text}
          </p>
        </div>

        <div className="border-t border-slate-800 pt-8 pb-24 md:pb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
