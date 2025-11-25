import React from 'react';
import { Smartphone, Monitor, Command, Download, Check } from 'lucide-react';
import { Reveal } from './Reveal';

const DownloadRow: React.FC<{ platform: string; version: string; icon: React.ReactNode; link: string }> = ({ platform, version, icon, link }) => (
  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-b border-white/10 items-center group hover:bg-white/5 px-4 transition-colors">
     <div className="md:col-span-1 text-neutral-500 group-hover:text-white transition-colors">
       {icon}
     </div>
     <div className="md:col-span-5">
       <h3 className="text-2xl font-bold uppercase text-white">{platform}</h3>
     </div>
     <div className="md:col-span-2">
       <span className="font-mono text-xs text-neutral-500 uppercase">Ver {version}</span>
     </div>
     <div className="md:col-span-2">
       <span className="font-mono text-xs text-green-500 uppercase flex items-center gap-2"><Check size={12}/> Stable</span>
     </div>
     <div className="md:col-span-2 text-right">
       <button 
         onClick={() => window.open(link, '_blank')}
         className="w-full md:w-auto px-6 py-3 bg-white/10 text-white font-bold uppercase text-xs hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2"
       >
         <Download size={14} /> Install
       </button>
     </div>
  </div>
);

export const Downloads: React.FC = () => {
  return (
    <section id="downloads" className="py-32 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="mb-20">
             <h2 className="text-5xl md:text-8xl font-black uppercase text-white tracking-tighter mb-4">Deploy<br/>Telegram</h2>
             <p className="text-xl text-neutral-400 font-light max-w-2xl">
               Выберите вашу платформу. Синхронизация между устройствами происходит мгновенно.
             </p>
          </div>
        </Reveal>

        <div className="border-t border-white/10">
           <DownloadRow platform="Android" version="10.4.1" icon={<Smartphone size={24}/>} link="https://play.google.com/store/apps/details?id=org.telegram.messenger" />
           <DownloadRow platform="iOS / iPadOS" version="10.4.0" icon={<Command size={24}/>} link="https://apps.apple.com/app/telegram-messenger/id686449807" />
           <DownloadRow platform="Windows x64" version="4.14" icon={<Monitor size={24}/>} link="https://desktop.telegram.org/" />
           <DownloadRow platform="macOS" version="10.4" icon={<Command size={24}/>} link="https://macos.telegram.org/" />
           <DownloadRow platform="Linux" version="4.14" icon={<Monitor size={24}/>} link="https://desktop.telegram.org/" />
           <DownloadRow platform="Web Version" version="Z/K" icon={<Monitor size={24}/>} link="https://web.telegram.org/" />
        </div>
      </div>
    </section>
  );
};