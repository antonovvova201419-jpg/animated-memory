import React, { useState } from 'react';
import { Moon, Sun, Layout, Eye, MessageSquare, Paintbrush } from 'lucide-react';
import { Reveal } from './Reveal';

export const Customization: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<'dark' | 'light'>('dark');

  return (
    <section id="customize" className="py-32 bg-black border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
             <div>
               <h2 className="text-5xl md:text-8xl font-black uppercase text-white tracking-tighter leading-none mb-6">
                 Total<br/>Control
               </h2>
               <p className="text-neutral-400 max-w-xl text-lg font-light border-l-2 border-white pl-6">
                 Беспрецедентный уровень кастомизации. От цветов интерфейса до настроек конфиденциальности каждого байта.
               </p>
             </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {/* Interactive Theme Card */}
           <Reveal delay={100}>
               <div className="col-span-1 lg:col-span-2 h-full bg-neutral-900/30 border border-white/10 p-8 flex flex-col justify-between group hover:border-white/30 transition-all">
                  <div className="flex justify-between items-start mb-8">
                     <div className="p-3 bg-white/10 rounded-lg text-white">
                        <Paintbrush size={24} />
                     </div>
                     <div className="flex gap-2 bg-black p-1 rounded-full border border-white/10">
                        <button 
                            onClick={() => setActiveTheme('dark')}
                            className={`p-2 rounded-full transition-all ${activeTheme === 'dark' ? 'bg-white text-black' : 'text-neutral-500 hover:text-white'}`}
                        >
                            <Moon size={16} />
                        </button>
                        <button 
                            onClick={() => setActiveTheme('light')}
                            className={`p-2 rounded-full transition-all ${activeTheme === 'light' ? 'bg-white text-black' : 'text-neutral-500 hover:text-white'}`}
                        >
                            <Sun size={16} />
                        </button>
                     </div>
                  </div>

                  <div className={`w-full h-64 border rounded-xl relative overflow-hidden transition-colors duration-500 ${activeTheme === 'dark' ? 'bg-[#0f0f0f] border-white/10' : 'bg-[#f0f0f0] border-black/10'}`}>
                      {/* Fake Chat UI */}
                      <div className={`absolute top-0 left-0 w-full h-10 border-b flex items-center px-4 gap-3 ${activeTheme === 'dark' ? 'bg-neutral-900 border-white/10' : 'bg-white border-black/5'}`}>
                         <div className={`w-3 h-3 rounded-full ${activeTheme === 'dark' ? 'bg-white/20' : 'bg-black/20'}`}></div>
                         <div className={`w-24 h-2 rounded-full ${activeTheme === 'dark' ? 'bg-white/10' : 'bg-black/10'}`}></div>
                      </div>
                      <div className="p-4 space-y-4 mt-10">
                          <div className={`w-2/3 p-3 rounded-2xl rounded-tl-none ${activeTheme === 'dark' ? 'bg-neutral-800' : 'bg-white shadow-sm'}`}>
                             <div className={`w-full h-2 rounded mb-2 ${activeTheme === 'dark' ? 'bg-white/10' : 'bg-black/5'}`}></div>
                             <div className={`w-1/2 h-2 rounded ${activeTheme === 'dark' ? 'bg-white/10' : 'bg-black/5'}`}></div>
                          </div>
                          <div className={`w-2/3 ml-auto p-3 rounded-2xl rounded-tr-none ${activeTheme === 'dark' ? 'bg-blue-600' : 'bg-blue-500 text-white'}`}>
                             <div className="w-full h-2 rounded bg-white/20 mb-2"></div>
                             <div className="w-1/2 h-2 rounded bg-white/20"></div>
                          </div>
                      </div>
                  </div>
                  
                  <div className="mt-8">
                     <h3 className="text-2xl font-bold uppercase text-white">Редактор Тем</h3>
                     <p className="text-neutral-500 text-sm mt-2">Меняйте любой цвет, создавайте свои палитры и делитесь ими ссылкой.</p>
                  </div>
               </div>
           </Reveal>

           {/* Privacy Settings */}
           <Reveal delay={200}>
               <div className="col-span-1 bg-neutral-900/30 border border-white/10 p-8 flex flex-col justify-between h-full group hover:border-white/30 transition-all">
                  <div className="p-3 bg-white/10 rounded-lg text-white w-fit mb-8">
                     <Eye size={24} />
                  </div>
                  
                  <div className="space-y-4 mb-8">
                      {['Номер телефона', 'Последняя активность', 'Фото профиля', 'Пересылка сообщений', 'Звонки'].map((setting, i) => (
                          <div key={i} className="flex justify-between items-center py-2 border-b border-white/5">
                              <span className="text-sm text-neutral-400">{setting}</span>
                              <span className="text-xs font-bold text-white bg-white/10 px-2 py-1 rounded">Никто</span>
                          </div>
                      ))}
                  </div>

                  <div>
                     <h3 className="text-2xl font-bold uppercase text-white">Приватность</h3>
                     <p className="text-neutral-500 text-sm mt-2">Гибкие настройки видимости для каждого элемента профиля.</p>
                  </div>
               </div>
           </Reveal>

           {/* Chat Folders */}
           <Reveal delay={300}>
               <div className="col-span-1 bg-neutral-900/30 border border-white/10 p-8 flex flex-col justify-between h-full group hover:border-white/30 transition-all">
                  <div className="p-3 bg-white/10 rounded-lg text-white w-fit mb-8">
                     <Layout size={24} />
                  </div>

                  <div className="flex flex-col gap-2 mb-8">
                      <div className="flex items-center gap-3 p-3 bg-neutral-800 rounded-lg border-l-4 border-blue-500">
                          <MessageSquare size={16} className="text-neutral-400" />
                          <span className="text-white font-bold text-sm">Работа</span>
                          <span className="ml-auto bg-blue-500 text-white text-[10px] px-2 rounded-full">5</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-neutral-800 rounded-lg border-l-4 border-green-500 opacity-60">
                          <MessageSquare size={16} className="text-neutral-400" />
                          <span className="text-white font-bold text-sm">Личное</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-neutral-800 rounded-lg border-l-4 border-purple-500 opacity-40">
                          <MessageSquare size={16} className="text-neutral-400" />
                          <span className="text-white font-bold text-sm">Новости</span>
                      </div>
                  </div>

                  <div>
                     <h3 className="text-2xl font-bold uppercase text-white">Папки чатов</h3>
                     <p className="text-neutral-500 text-sm mt-2">Сортируйте чаты по вкладкам. Отделите работу от развлечений.</p>
                  </div>
               </div>
           </Reveal>
        </div>
      </div>
    </section>
  );
};