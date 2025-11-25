import React, { useState, useEffect } from 'react';
import { Menu, X, Send, ChevronRight } from 'lucide-react';
import { PageType } from '../App';

interface NavbarProps {
  onNavigate: (page: PageType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    onNavigate(null);
    setIsOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${scrolled ? 'py-4 bg-black/90 backdrop-blur-xl border-b border-white/10' : 'py-8 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              className="flex items-center gap-3 cursor-pointer group" 
              onClick={() => onNavigate(null)}
            >
              <div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-sm transition-transform group-hover:rotate-12 duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                <Send size={20} className="-ml-1 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold uppercase tracking-widest text-sm leading-none group-hover:text-glow transition-all">Telegram</span>
                <span className="font-mono text-[10px] text-neutral-500 leading-none mt-1 group-hover:text-white transition-colors">PROTOCOL V.11</span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {['Features', 'Security', 'Customize', 'Blog', 'History'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-xs font-mono uppercase text-neutral-400 hover:text-white transition-colors relative group py-2"
                >
                  <span className="opacity-0 group-hover:opacity-100 absolute -left-3 transition-opacity text-white">/</span>
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => onNavigate('about')} className="text-xs font-bold uppercase hover:underline underline-offset-4 decoration-white/30 hover:decoration-white transition-all">О Компании</button>
              <button 
                onClick={() => scrollTo('downloads')}
                className="px-6 py-2 bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-neutral-200 transition-colors flex items-center gap-2 group active:scale-95"
              >
                Скачать <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform"/>
              </button>
            </div>
            
            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-30 bg-black transition-transform duration-500 ease-in-out md:hidden flex flex-col pt-32 px-6 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="space-y-6">
           {['Features', 'Security', 'Customize', 'Blog', 'History', 'Downloads'].map((item, idx) => (
             <button 
               key={item}
               onClick={() => scrollTo(item.toLowerCase())}
               className="block text-4xl font-black uppercase text-white hover:text-neutral-400 transition-colors text-left w-full border-b border-white/10 pb-4 active:text-neutral-600"
               style={{ transitionDelay: `${idx * 50}ms` }}
             >
               {item}
             </button>
           ))}
           <div className="pt-8 grid grid-cols-2 gap-4">
             <button onClick={() => { onNavigate('about'); setIsOpen(false); }} className="p-4 border border-white/20 text-center uppercase text-sm font-bold hover:bg-white hover:text-black transition-colors">О Нас</button>
             <button onClick={() => { onNavigate('api'); setIsOpen(false); }} className="p-4 border border-white/20 text-center uppercase text-sm font-bold hover:bg-white hover:text-black transition-colors">API</button>
           </div>
        </div>
      </div>
    </>
  );
};