import React from 'react';
import { ArrowRight, Star, Plus } from 'lucide-react';
import { Reveal } from './Reveal';

// Placeholders for duck stickers
const gallery = [
  { id: 1, title: 'Original Utya', desc: 'The classic icon.', img: 'https://cdn.dribbble.com/users/254661/screenshots/14495267/media/592c30070529d27a19c4d9841808605d.png?resize=400x300&vertical=center' },
  { id: 2, title: 'Sherlock Duck', desc: 'Solving crimes.', img: 'https://cdn.dribbble.com/users/254661/screenshots/15729906/media/54b73b2207267425121404097f4812f8.png?resize=400x300&vertical=center' },
  { id: 3, title: 'Business Duck', desc: 'Making deals.', img: 'https://cdn.dribbble.com/users/254661/screenshots/11261394/media/5424754323c21822818c669677e64049.png?resize=400x300&vertical=center' },
];

export const Ducks: React.FC = () => {
  return (
    <section id="ducks" className="py-32 bg-black border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
             <div>
               <h2 className="text-6xl md:text-8xl font-black uppercase text-white tracking-tighter leading-none">
                 Visual<br/>Language
               </h2>
             </div>
             <div className="text-right">
               <p className="text-neutral-400 font-mono text-sm mb-4">
                 ASSET_TYPE: ANIMATED_STICKER<br/>
                 FRAMERATE: 60FPS<br/>
                 FORMAT: .TGS
               </p>
               <button onClick={() => window.open('https://t.me/stickers', '_blank')} className="px-6 py-3 border border-white text-white font-bold uppercase text-xs hover:bg-white hover:text-black transition-colors">
                 Browse Catalog
               </button>
             </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {gallery.map((item, i) => (
             <Reveal key={item.id} delay={i * 100}>
               <div className="group border border-white/10 bg-neutral-900/20 hover:border-white transition-colors duration-500">
                  <div className="aspect-square bg-black relative overflow-hidden p-8 flex items-center justify-center">
                     <div className="absolute top-4 left-4 z-20 flex gap-1">
                        <Star size={12} className="fill-white text-white" />
                        <Star size={12} className="fill-white text-white" />
                        <Star size={12} className="fill-white text-white" />
                     </div>
                     <img 
                       src={item.img} 
                       alt={item.title} 
                       className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110" 
                     />
                     
                     <button 
                       onClick={() => window.open('https://t.me/addstickers/Duck', '_blank')}
                       className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-30 hover:bg-neutral-200"
                     >
                        <Plus size={20} />
                     </button>
                  </div>
                  <div className="p-6 border-t border-white/10 bg-black">
                     <h3 className="text-xl font-bold uppercase text-white mb-1">{item.title}</h3>
                     <p className="text-xs font-mono text-neutral-500 uppercase">{item.desc}</p>
                  </div>
               </div>
             </Reveal>
           ))}
        </div>
      </div>
    </section>
  );
};