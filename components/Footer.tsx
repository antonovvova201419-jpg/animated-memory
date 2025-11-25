import React from 'react';
import { Send, Twitter, Github, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { PageType } from '../App';
import { Reveal } from './Reveal';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-neutral-800 pt-20 pb-12 relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.02]">
        <div className="text-[20vw] font-black text-white leading-none whitespace-nowrap animate-marquee">
          TELEGRAM TELEGRAM TELEGRAM
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-20">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black">
                  <Send size={20} className="-ml-0.5 mt-0.5 fill-current" />
                </div>
                <span className="font-black text-2xl text-white uppercase tracking-tighter">Telegram</span>
              </div>
              <p className="text-neutral-500 text-sm mb-8 max-w-sm leading-relaxed font-medium">
                Свободный. Безопасный. Быстрый.<br/>
                Эра новой коммуникации начинается здесь.
              </p>
              <div className="flex space-x-4">
                 <button className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all transform hover:scale-110">
                     <Twitter size={20} />
                 </button>
                 <button className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all transform hover:scale-110">
                     <Github size={20} />
                 </button>
                 <button className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all transform hover:scale-110">
                     <Instagram size={20} />
                 </button>
              </div>
            </div>

            <div>
              <h4 className="font-black text-white mb-8 uppercase text-xs tracking-widest border-b border-neutral-800 pb-4">Компания</h4>
              <ul className="space-y-4 text-sm font-medium text-neutral-500">
                <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors uppercase tracking-wide text-xs hover:pl-2 duration-300">О нас</button></li>
                <li><button onClick={() => onNavigate('jobs')} className="hover:text-white transition-colors uppercase tracking-wide text-xs hover:pl-2 duration-300">Вакансии</button></li>
                <li><button onClick={() => onNavigate('press')} className="hover:text-white transition-colors uppercase tracking-wide text-xs hover:pl-2 duration-300">Пресс-кит</button></li>
                <li><button onClick={() => { onNavigate(null); setTimeout(() => scrollToSection('blog'), 100); }} className="hover:text-white transition-colors uppercase tracking-wide text-xs hover:pl-2 duration-300">Блог</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-white mb-8 uppercase text-xs tracking-widest border-b border-neutral-800 pb-4">Платформы</h4>
              <ul className="space-y-4 text-sm font-medium text-neutral-500">
                <li><button onClick={() => scrollToSection('downloads')} className="hover:text-white transition-colors uppercase tracking-wide text-xs hover:pl-2 duration-300 block text-left w-full">Android</button></li>
                <li><button onClick={() => scrollToSection('downloads')} className="hover:text-white transition-colors uppercase tracking-wide text-xs hover:pl-2 duration-300 block text-left w-full">iPhone / iPad</button></li>
                <li><button onClick={() => scrollToSection('downloads')} className="hover:text-white transition-colors uppercase tracking-wide text-xs hover:pl-2 duration-300 block text-left w-full">Windows / Mac</button></li>
                <li><button onClick={() => scrollToSection('downloads')} className="hover:text-white transition-colors uppercase tracking-wide text-xs hover:pl-2 duration-300 block text-left w-full">Linux</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-white mb-8 uppercase text-xs tracking-widest border-b border-neutral-800 pb-4">Ресурсы</h4>
              <ul className="space-y-4 text-sm font-medium text-neutral-500">
                <li><button onClick={() => onNavigate('api')} className="hover:text-white transition-colors uppercase tracking-wide text-xs hover:pl-2 duration-300">API</button></li>
                <li><button onClick={() => scrollToSection('history')} className="hover:text-white transition-colors uppercase tracking-wide text-xs hover:pl-2 duration-300">История</button></li>
                <li><button onClick={() => onNavigate('bot')} className="hover:text-white transition-colors uppercase tracking-wide text-xs hover:pl-2 duration-300">Bot API</button></li>
              </ul>
            </div>
          </div>
        </Reveal>
        
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-neutral-600 text-xs font-mono uppercase">© 2025 Redesign Concept. Not affiliated with Telegram FZ-LLC.</p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-wider items-center">
            <button onClick={() => onNavigate('rules')} className="text-neutral-500 hover:text-white transition-colors">Правила</button>
            <button onClick={() => onNavigate('rules')} className="text-neutral-500 hover:text-white transition-colors">Приватность</button>
            <button 
                onClick={scrollToTop}
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors rounded-sm"
            >
                <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};