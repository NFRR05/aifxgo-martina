import React from "react";
import { useLanguage } from "./i18n/LanguageContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SocialProof } from "./components/SocialProof";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { VideoTestimonials } from "./components/VideoTestimonials";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Toaster } from "sonner";
import { Send } from "lucide-react";

function App() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-amber-100 selection:text-amber-900">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <VideoTestimonials />
        <FAQ />
      </main>
      <Footer />

      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-slate-100 shadow-[0_-4px_20px_-5px_rgba(251,191,36,0.3)] z-50 flex justify-center">
        <a
          href="https://t.me/aifxgo"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center w-full max-w-sm px-8 py-4 text-base font-bold text-slate-900 transition-all duration-200 bg-amber-400 rounded-full hover:bg-amber-500 hover:shadow-lg hover:shadow-amber-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 active:scale-[0.98]"
        >
          <Send className="w-5 h-5 mr-2 -ml-1 group-hover:translate-x-1 transition-transform" />
          {t.howItWorks.cta}
        </a>
      </div>

      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;