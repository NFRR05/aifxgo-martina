import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play, Send, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const VideoTestimonials = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      name: t.reviews.items[0].name,
      role: t.reviews.items[0].role,
      image: "https://images.unsplash.com/photo-1747716796889-b973cae4d028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHNlbGZpZSUyMHZpZGVvJTIwY2FsbCUyMGhhcHB5JTIwcGVyc29uJTIwaG9sZGluZyUyMHBob25lfGVufDF8fHx8MTc3MDI4OTQzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      text: t.reviews.items[0].text
    },
    {
      id: 2,
      name: t.reviews.items[1].name,
      role: t.reviews.items[1].role,
      image: "https://images.unsplash.com/photo-1667996112916-813d6041a849?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGluZmx1ZW5jZXIlMjB0YWxraW5nJTIwc2VsZmllJTIwdmVydGljYWx8ZW58MXx8fHwxNzcwMjg5NDM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      text: t.reviews.items[1].text
    },
    {
      id: 3,
      name: t.reviews.items[2].name,
      role: t.reviews.items[2].role,
      image: "https://images.unsplash.com/photo-1749353709700-35494cdcf6b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjB0YWxraW5nJTIwdG8lMjBjYW1lcmElMjBzZWxmaWUlMjBwb3J0cmFpdCUyMHZlcnRpY2FsfGVufDF8fHx8MTc3MDI4OTQzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      text: t.reviews.items[2].text
    },
    {
      id: 4,
      name: t.reviews.items[3].name,
      role: t.reviews.items[3].role,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      text: t.reviews.items[3].text
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 340; // Card width + gap
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const checkScroll = () => {
    // Scroll state markers not used in current UI
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  return (
    <section id="reviews" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-amber-600 font-bold tracking-wide uppercase text-xs mb-3">{t.reviews.sectionTitle}</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">{t.reviews.mainTitle}</h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            {t.reviews.description}
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">

          {/* Carousel Container */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide px-4 md:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((item) => (
              <motion.div
                key={item.id}
                className="min-w-[280px] md:min-w-[320px] snap-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative group cursor-pointer rounded-2xl overflow-hidden aspect-[9/16] shadow-xl border border-slate-200 bg-slate-900">
                  {/* Video Thumbnail Background */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-90"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/90"></div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform duration-300">
                      <Play size={24} className="fill-white text-white ml-1" />
                    </div>
                  </div>

                  {/* Content Info */}
                  <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full border border-white/30 overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-bold text-sm leading-none">{item.name}</p>
                        <p className="text-[10px] text-slate-300 leading-none mt-1">{item.role}</p>
                      </div>
                    </div>
                    <p className="text-sm font-medium line-clamp-3 leading-relaxed text-slate-100 italic">"{item.text}"</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Controls */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-white border border-slate-200 shadow-md hover:shadow-lg text-slate-600 hover:text-amber-500 transition-all duration-200 hover:-translate-y-0.5"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-white border border-slate-200 shadow-md hover:shadow-lg text-slate-600 hover:text-amber-500 transition-all duration-200 hover:-translate-y-0.5"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* CTA Button */}
          <div className="mt-8 text-center">
            <a
              href="https://t.me/aifxgo"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 transition-all duration-200 bg-amber-400 rounded-full hover:bg-amber-500 hover:shadow-lg hover:shadow-amber-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
            >
              <Send className="w-5 h-5 mr-2 -ml-1 group-hover:translate-x-1 transition-transform" />
              {t.reviews.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
