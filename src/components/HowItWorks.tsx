import React from 'react';
import { Send } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';

import telegramMockup from '../assets/telegram-mockup1.png';

export const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      id: 1,
      title: t.howItWorks.steps[1].title,
      desc: t.howItWorks.steps[1].desc
    },
    {
      id: 2,
      title: t.howItWorks.steps[2].title,
      desc: t.howItWorks.steps[2].desc
    },
    {
      id: 3,
      title: t.howItWorks.steps[3].title,
      desc: t.howItWorks.steps[3].desc
    },
    {
      id: 4,
      title: t.howItWorks.steps[4].title,
      desc: t.howItWorks.steps[4].desc
    }
  ];

  return (
    <section id="guide" className="py-24 relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side: Steps */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 uppercase tracking-tight">
              {t.howItWorks.title} <br className="hidden sm:block" />
              <span className="text-amber-500">{t.howItWorks.titleHighlight}</span>
            </h2>
            <p className="text-slate-600 mb-12 text-lg text-[20px] font-bold uppercase tracking-widest text-amber-600/80">
              {t.howItWorks.subtitle}
            </p>

            <div className="space-y-10">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center text-xl font-bold text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    {step.id}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm text-[18px]">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <a
                href="https://t.me/aifxgo"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 transition-all duration-200 bg-amber-400 rounded-full hover:bg-amber-500 hover:shadow-lg hover:shadow-amber-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
              >
                <Send className="w-5 h-5 mr-2 -ml-1 group-hover:translate-x-1 transition-transform" />
                {t.howItWorks.cta}
              </a>
            </div>
          </div>

          {/* Right Side: Telegram Interface Mockup Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-amber-100 rounded-full blur-3xl opacity-50 -z-10"></div>

            <img
              src={telegramMockup}
              alt="Telegram Interface Mockup"
              className="w-full max-w-sm drop-shadow-2xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
