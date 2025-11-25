import React from 'react';
import { ShieldCheck, Lock, Bug, Trophy, AlertTriangle } from 'lucide-react';
import { Reveal } from './Reveal';

export const Security: React.FC = () => {
  return (
    <section id="security" className="py-32 bg-black border-t border-neutral-800 relative overflow-hidden">
      
      {/* Decorative large text */}
      <div className="absolute -right-20 top-40 text-[15vw] font-black text-neutral-900 opacity-20 pointer-events-none rotate-90 hidden md:block">
        SECURE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <Reveal>
                <div className="inline-block px-4 py-2 border border-white text-white text-xs font-bold uppercase tracking-widest mb-8">
                Security Report
                </div>
            </Reveal>
            <Reveal delay={100}>
                <h2 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase leading-none">
                0 Байтов<br/>
                <span className="text-neutral-600">Взломано</span>
                </h2>
            </Reveal>
            <Reveal delay={200}>
                <p className="text-xl text-neutral-400 mb-12 font-light leading-relaxed max-w-md">
                С момента запуска в 2013 году протокол MTProto ни разу не был скомпрометирован.
                </p>
            </Reveal>
            
            <div className="space-y-12">
              <Reveal delay={300}>
                <div className="flex gap-6 items-start">
                    <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
                        <Trophy size={32} className="text-yellow-500" />
                    </div>
                    <div>
                        <h4 className="text-white font-bold uppercase mb-2 text-xl">Конкурс на взлом ($300,000)</h4>
                        <p className="text-sm text-neutral-400 leading-relaxed">
                        Telegram регулярно проводит конкурсы. Любой хакер, который сможет расшифровать сообщения, получит $300,000. 
                        <span className="text-white font-bold block mt-2">Никто не забрал главный приз за 10 лет.</span>
                        </p>
                    </div>
                </div>
              </Reveal>

              <Reveal delay={400}>
                <div className="flex gap-6 items-start">
                    <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
                        <AlertTriangle size={32} className="text-red-500" />
                    </div>
                    <div>
                        <h4 className="text-white font-bold uppercase mb-2 text-xl">Реальность угроз</h4>
                        <p className="text-sm text-neutral-400 leading-relaxed">
                        В интернете нет подтвержденных случаев взлома протокола Telegram. Все известные инциденты связаны с:
                        <ul className="list-disc pl-4 mt-2 space-y-1 text-neutral-500">
                            <li>Перехватом SMS-кодов (вина операторов связи).</li>
                            <li>Заражением устройства пользователя (spyware).</li>
                            <li>Отсутствием 2FA (Облачный пароль).</li>
                        </ul>
                        </p>
                    </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0 flex flex-col justify-center">
             <Reveal delay={500}>
                <div className="bg-neutral-950 border border-neutral-800 p-8 md:p-12 relative backdrop-blur-sm overflow-hidden group hover:border-white/30 transition-colors">
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white"></div>

                    <h3 className="text-2xl text-white font-bold uppercase mb-6 flex items-center gap-3">
                        <Lock size={24} /> 2-Step Verification
                    </h3>

                    <div className="space-y-4 mb-8">
                        <div className="h-2 w-full bg-neutral-900 rounded overflow-hidden">
                            <div className="h-full bg-green-500 w-[100%]"></div>
                        </div>
                        <p className="text-sm text-neutral-400">
                            Даже если злоумышленник клонирует вашу SIM-карту, он не сможет войти без вашего облачного пароля.
                        </p>
                    </div>

                    <div className="p-4 bg-neutral-900 border border-neutral-800 font-mono text-xs text-green-500">
                        > Initiating Handshake...<br/>
                        > Diffie-Hellman Key Exchange... OK<br/>
                        > Checking 2FA... <span className="text-red-500">ACCESS DENIED</span><br/>
                        > Encryption: AES-256 (Local)
                    </div>
                    
                    <button className="mt-8 w-full py-4 bg-white text-black font-bold uppercase hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
                        <Bug size={18} /> Bug Bounty Program
                    </button>
                </div>
             </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};