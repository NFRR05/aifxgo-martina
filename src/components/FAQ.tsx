import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Send } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-amber-600' : 'text-slate-900 group-hover:text-amber-500'}`}>
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-amber-600' : ''}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-600 leading-relaxed text-[18px]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      question: t.faq.items[0].question,
      answer: t.faq.items[0].answer
    },
    {
      question: t.faq.items[1].question,
      answer: t.faq.items[1].answer
    },
    {
      question: t.faq.items[2].question,
      answer: t.faq.items[2].answer
    },
    {
      question: t.faq.items[3].question,
      answer: t.faq.items[3].answer
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header FAQ */}
        <div className="text-center mb-16">
          <h2 className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-3">{t.faq.sectionSmallTitle}</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 uppercase">{t.faq.sectionTitle}</h3>
        </div>

        {/* Lista FAQ */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-sm mb-16">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* CTA Section sotto le FAQ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] bg-slate-900 p-8 md:p-12 overflow-hidden text-center shadow-2xl shadow-amber-200/10"
        >
          {/* Background decorativo soffuso */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-0 opacity-10">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <p className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-4">
              {t.faq.finalCta.small}
            </p>
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t.faq.finalCta.title}
            </h4>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              {t.faq.finalCta.desc}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <a
                href="https://t.me/aifxgo"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 transition-all duration-200 bg-amber-400 rounded-full hover:bg-amber-500 hover:shadow-lg hover:shadow-amber-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
              >
                <Send className="w-5 h-5 mr-2 -ml-1 group-hover:translate-x-1 transition-transform" />
                {t.faq.finalCta.button}
              </a>
            </div>

            <p className="mt-8 text-[10px] text-slate-500 uppercase tracking-widest font-semibold">
              {t.faq.finalCta.note}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};