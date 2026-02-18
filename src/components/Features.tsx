import React from 'react';
import { motion } from 'motion/react';
import { Activity, Target, Database, Zap, TrendingUp } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-white rounded-xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-amber-200 transition-all hover:-translate-y-1 aspect-square flex flex-col justify-center"
  >
    <div className="w-14 h-14 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 mb-6 border border-amber-100 flex-shrink-0 mx-auto">
      <Icon size={28} strokeWidth={1.5} />
    </div>
    <div className="text-center">
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-sm text-[18px]">{description}</p>
    </div>
  </motion.div>
);

export const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Activity,
      title: t.features.cards.executed.title,
      description: t.features.cards.executed.desc,
      delay: 0.1
    },
    {
      icon: Target,
      title: t.features.cards.emotionless.title,
      description: t.features.cards.emotionless.desc,
      delay: 0.2
    },
    {
      icon: Database,
      title: t.features.cards.dataDriven.title,
      description: t.features.cards.dataDriven.desc,
      delay: 0.3
    },
    {
      icon: Zap,
      title: t.features.cards.effortless.title,
      description: t.features.cards.effortless.desc,
      delay: 0.4
    },
    {
      icon: TrendingUp,
      title: t.features.cards.profitable.title,
      description: t.features.cards.profitable.desc,
      delay: 0.5
    },
    {
      icon: Zap,
      title: t.features.cards.instantSetup.title,
      description: t.features.cards.instantSetup.desc,
      delay: 0.6
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-3xl opacity-60 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-amber-600 font-bold tracking-wide uppercase text-xs mb-3">{t.features.sectionTitle}</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">{t.features.mainTitle}</h3>
          <p className="text-lg text-slate-600 text-[20px]">
            {t.features.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
