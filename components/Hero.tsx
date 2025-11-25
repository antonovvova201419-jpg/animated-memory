import React from 'react';
import { ArrowRight, Download, Play, ShieldCheck } from 'lucide-react';
import { Reveal } from './Reveal';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[150px] opacity-[0.03] animate-pulse-glow"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content */}
          <div className="lg:col-span-8">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 rounded-full mb-8 bg-white/5 backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-300">System Operational • v10.0.5 Live</span>
              </div>
            </Reveal>
            
            <Reveal delay={100}>
              <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8 text-white">
                Pure<br/>
                <span className="text-neutral-500">Instant</span><br/>
                Secure
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-xl md:text-2xl text-neutral-400 font-light max-w-2xl leading-relaxed mb-10 border-l-2 border-white/20 pl-6">
                Новый стандарт обмена данными. Быстрее скорости света. 
                <span className="text-white font-medium"> Без рекламы. Без слежки. Навсегда.</span>
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => scrollTo('downloads')} className="group h-14 px-8 bg-white text-black font-bold uppercase tracking-widest hover:bg-neutral-200 transition-all flex items-center justify-center gap-3">
                  <Download size={20} />
                  <span>Скачать Telegram</span>
                </button>
                <button onClick={() => scrollTo('features')} className="group h-14 px-8 border border-white/30 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3">
                  <Play size={20} className="fill-current" />
                  <span>Как это работает</span>
                </button>
              </div>
            </Reveal>
          </div>

          {/* Side Stats / Tech Specs */}
          <div className="lg:col-span-4 hidden lg:flex flex-col gap-6">
             <Reveal delay={400}>
               <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm">
                 <div className="flex justify-between items-start mb-4">
                   <ShieldCheck size={32} />
                   <span className="font-mono text-xs text-green-500">SECURE</span>
                 </div>
                 <h3 className="text-2xl font-bold uppercase mb-1">MTProto</h3>
                 <p className="text-xs text-neutral-500 font-mono">ENCRYPTION PROTOCOL V2.0</p>
                 <div className="mt-4 h-1 w-full bg-neutral-800 overflow-hidden">
                   <div className="h-full bg-white w-2/3 animate-pulse"></div>
                 </div>
               </div>
             </Reveal>

             <Reveal delay={500}>
               <div className="p-6 border border-white/10 bg-black">
                 <div className="flex justify-between mb-2">
                   <span className="text-xs font-mono text-neutral-500">UPTIME</span>
                   <span className="text-xs font-mono text-white">99.99%</span>
                 </div>
                 <div className="flex justify-between mb-2">
                   <span className="text-xs font-mono text-neutral-500">SERVER</span>
                   <span className="text-xs font-mono text-white">DUBAI-DC4</span>
                 </div>
                 <div className="flex justify-between">
                   <span className="text-xs font-mono text-neutral-500">LATENCY</span>
                   <span className="text-xs font-mono text-white">12MS</span>
                 </div>
               </div>
             </Reveal>
          </div>
        </div>
      </div>

      {/* Marquee Footer */}
      <div className="absolute bottom-0 w-full border-t border-white/10 bg-black py-4">
        <div className="animate-marquee flex whitespace-nowrap gap-16 text-neutral-700 font-black uppercase text-4xl select-none opacity-50">
           <span>No Limits</span> <span>Encrypted</span> <span>Cloud-Based</span> <span>Open API</span> <span>Free</span> <span>Powerful</span>
           <span>No Limits</span> <span>Encrypted</span> <span>Cloud-Based</span> <span>Open API</span> <span>Free</span> <span>Powerful</span>
        </div>
      </div>
    </section>
  );
};