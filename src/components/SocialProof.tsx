import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const SocialProof = () => {
  const { t } = useLanguage();

  return (
    <section className="py-10 border-y border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="flex -space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={24} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div>
              <p className="font-bold text-slate-900 text-lg">{t.socialProof.trustedBy}</p>
              <p className="text-sm text-slate-500">{t.socialProof.chosenBy}</p>
            </div>
          </div>

          <div className="h-8 w-px bg-slate-200 hidden lg:block"></div>

          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-80">
            {/* Updated to look more sober/professional */}
            <span className="text-xl font-bold font-serif text-slate-700">Benzinga</span>
            <span className="text-xl font-bold tracking-tight text-slate-700"><span className="text-amber-600">FX</span>Street</span>
            <span className="text-xl font-bold text-slate-700"><span className="font-serif text-slate-900">Yahoo!</span> <span className="uppercase text-sm">Finance</span></span>
            <span className="text-lg font-bold text-slate-700 tracking-wider">BLOOMBERG</span>
          </div>

        </div>
      </div>
    </section>
  );
};
