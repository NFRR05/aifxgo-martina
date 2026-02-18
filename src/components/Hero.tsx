import image_c2282542a53a0a0b7cfb1d2b85461471ed6f432e from 'figma:asset/c2282542a53a0a0b7cfb1d2b85461471ed6f432e.png'
import image_bbf53a8d946aae1c8cd6a19bbe4ba9bf3bdb3c97 from 'figma:asset/bbf53a8d946aae1c8cd6a19bbe4ba9bf3bdb3c97.png'
import image_ca383906ee725e14841da6be5ffd13b6b1929d09 from 'figma:asset/ca383906ee725e14841da6be5ffd13b6b1929d09.png'
import image_ffdba90cd285d2a97352157f31f63fdf3a7d3b2d from 'figma:asset/ffdba90cd285d2a97352157f31f63fdf3a7d3b2d.png'
import image_77185e0196e422686192cad4709f20fa9af549fa from 'figma:asset/77185e0196e422686192cad4709f20fa9af549fa.png'
import React from 'react';
import { motion } from 'motion/react';
import { Send, Star } from 'lucide-react';

import { useLanguage } from '../i18n/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white">
      {/* Background Decor with Motion */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden opacity-30">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-amber-200/40 rounded-full blur-3xl mix-blend-multiply"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 -left-20 w-[500px] h-[500px] bg-slate-200/60 rounded-full blur-3xl mix-blend-multiply"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left z-10"
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 mr-2 animate-pulse"></span>
              {t.hero.tag}
            </div>

            <h1 className="font-bold tracking-tight text-slate-900 mb-6 leading-tight text-[48px]">
              {t.hero.title}<span className="text-amber-500">{t.hero.titleHighlight}</span>{t.hero.titleSuffix}
            </h1>

            <p className="text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-[20px]">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="https://t.me/aifxgo"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 transition-all duration-200 bg-amber-400 rounded-full hover:bg-amber-500 hover:shadow-lg hover:shadow-amber-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
              >
                <Send className="w-5 h-5 mr-2 -ml-1 group-hover:translate-x-1 transition-transform" />
                {t.hero.ctaPrimary}
              </a>
              <a
                href="#guide"
                className="inline-flex items-center justify-center px-6 py-4 text-base font-medium text-slate-700 transition-all duration-200 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:text-amber-600 shadow-sm hover:shadow-md">
                {t.hero.ctaSecondary}
              </a>
            </div>

            <div className="flex flex-row items-center gap-4 pt-2 mt-4">
              {/* Avatar sovrapposti */}
              <div className="flex -space-x-4">
                <img src={image_ca383906ee725e14841da6be5ffd13b6b1929d09} alt="User" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                <img src={image_ffdba90cd285d2a97352157f31f63fdf3a7d3b2d} alt="User" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                <img src={image_77185e0196e422686192cad4709f20fa9af549fa} alt="User" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
              </div>

              {/* Contenitore Stelle + Testo */}
              <div className="flex flex-col items-start justify-center">
                {/* Stelle allineate */}
                <div className="flex items-center gap-0.5 text-amber-400 mb-1">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>

                {/* Testo con link */}
                <div className="text-sm font-medium text-blue-950 leading-none">
                  <a href="#recensioni" className="hover:text-amber-500 transition-colors">
                    {t.hero.moreThan} <span className="font-bold">7000 {t.hero.users}</span> {t.hero.onTelegram}
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-6 text-xs text-slate-400 max-w-md mx-auto lg:mx-0 text-[14px] whitespace-pre-line">
              {t.hero.disclaimer}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto lg:mr-0 w-full max-w-lg lg:max-w-none perspective-1000"
          >
            {/* Main Trading Monitor Image */}
            <div className="relative rounded-2xl bg-gradient-to-tr from-slate-200 to-amber-100 p-2 shadow-2xl z-10">
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-2xl bg-[rgba(254,181,95,0.49)]"></div>
              <img
                src={image_bbf53a8d946aae1c8cd6a19bbe4ba9bf3bdb3c97}
                alt="AI Trading Dashboard"
                className="relative rounded-xl shadow-inner w-full h-auto object-cover border border-white/50 grayscale-[20%]"
              />
            </div>

            {/* Floating Phone Element - Ottimizzato per Mobile */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: -40, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              // Modifica qui: aggiungiamo 'hidden md:block' se vuoi nasconderlo su mobile
              // Oppure regoliamo le posizioni con classi responsive:
              className="absolute -bottom-16 -right-2 md:-right-12 w-32 sm:w-40 md:w-56 z-20"
            >
              <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-1 md:p-1.5 shadow-2xl border-2 md:border-4 border-slate-800 overflow-hidden">
                <div className="rounded-[1.2rem] md:rounded-[2rem] overflow-hidden aspect-[9/19] relative">
                  <img
                    src={image_c2282542a53a0a0b7cfb1d2b85461471ed6f432e}
                    alt="AIFXGO Telegram Community"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};