import React from 'react';
import { Circle } from 'lucide-react';
import { Reveal } from './Reveal';

const milestones = [
  { year: '2013', title: 'Запуск Telegram', desc: 'Приложение появляется на iOS и Android. Фокус на скорости и безопасности.' },
  { year: '2014', title: 'Стикеры', desc: 'Революция в выражении эмоций. Открытая платформа для художников.' },
  { year: '2015', title: 'Bot API', desc: 'Telegram становится платформой для разработчиков и автоматизации.' },
  { year: '2016', title: 'Bot Platform 2.0', desc: 'Инлайн-клавиатуры, разрешения и новые возможности.' },
  { year: '2017', title: 'Голосовые звонки', desc: 'Защищенные звонки с peer-to-peer шифрованием.' },
  { year: '2018', title: 'Telegram Passport', desc: 'Единый метод авторизации для сервисов, требующих идентификации.' },
  { year: '2020', title: 'Видеозвонки', desc: 'Год пандемии. Telegram добавляет защищенные видеозвонки.' },
  { year: '2021', title: 'Трансляции', desc: 'Безлимитные видеотрансляции в каналах и группах.' },
  { year: '2022', title: 'Telegram Premium', desc: 'Запуск подписки для поддержки развития платформы.' },
  { year: '2023', title: 'Stories', desc: 'Истории для пользователей и каналов.' },
  { year: '2024', title: 'Telegram Business', desc: 'Функции для бизнеса, часы работы и быстрые ответы.' },
];

export const History: React.FC = () => {
  return (
    <section id="history" className="py-32 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
               <h2 className="text-5xl md:text-8xl font-black uppercase text-white tracking-tighter mb-4">Evolution</h2>
               <div className="h-1 w-24 bg-white mb-6"></div>
            </div>
            <p className="text-xl text-neutral-400 font-light max-w-2xl text-right">
               История Telegram — это хронология борьбы за цифровую свободу. С 2013 года мы устанавливаем стандарты скорости, безопасности и удобства, которым следуют остальные.
            </p>
          </div>
        </Reveal>

        <div className="relative border-l border-white/20 ml-4 md:ml-12 space-y-12">
           {milestones.map((item, index) => (
             <Reveal key={index} delay={index * 50}>
               <div className="relative pl-8 md:pl-12 group cursor-default">
                  {/* Dot */}
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-black border border-white rounded-full group-hover:bg-white group-hover:scale-150 transition-all duration-300"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                    <span className="text-4xl md:text-5xl font-black text-white/10 group-hover:text-white transition-colors duration-500 select-none w-32">
                      {item.year}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-white uppercase mb-1">{item.title}</h3>
                      <p className="text-neutral-500 font-mono text-sm max-w-xl group-hover:text-neutral-300 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </div>
               </div>
             </Reveal>
           ))}
           
           <div className="pl-8 md:pl-12 pt-12">
              <div className="inline-block border border-white px-6 py-2 text-white font-bold uppercase text-xs animate-pulse">
                Next: Coming Soon
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};