import React from 'react';
import { Users, FileUp, Shield, Bot, Globe, Palette, ArrowUpRight, Zap, Cloud } from 'lucide-react';
import { PageType } from '../App';
import { Reveal } from './Reveal';

interface FeaturesProps {
  onOpenDetail: (page: PageType) => void;
}

const FeatureCard: React.FC<{
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  colSpan?: string;
  onClick: () => void;
  bgImage?: string;
}> = ({ title, subtitle, icon, colSpan = "col-span-1", onClick, bgImage }) => (
  <div 
    onClick={onClick}
    className={`group relative p-8 border border-white/10 bg-neutral-900/40 hover:bg-neutral-900 hover:border-white/50 transition-all duration-300 cursor-pointer overflow-hidden min-h-[300px] flex flex-col justify-between ${colSpan}`}
  >
    {/* Hover Glow */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

    <div className="relative z-10 flex justify-between items-start">
      <div className="p-3 bg-white/5 rounded-lg text-white group-hover:bg-white group-hover:text-black transition-colors">
        {icon}
      </div>
      <div className="p-2 border border-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
        <ArrowUpRight size={16} />
      </div>
    </div>

    <div className="relative z-10 mt-auto">
      <h3 className="text-2xl font-bold uppercase mb-3 text-white group-hover:text-glow transition-all">{title}</h3>
      <p className="text-neutral-400 text-sm font-medium leading-relaxed group-hover:text-neutral-200 transition-colors pr-2">
        {subtitle}
      </p>
    </div>
  </div>
);

export const Features: React.FC<FeaturesProps> = ({ onOpenDetail }) => {
  return (
    <section id="features" className="py-32 bg-black border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
             <div>
                <h2 className="text-5xl md:text-7xl font-black uppercase text-white tracking-tighter mb-4">Core<br/>Modules</h2>
                <div className="h-1 w-24 bg-white"></div>
             </div>
             <p className="text-right text-neutral-400 max-w-md font-light">
               Telegram — это не просто мессенджер. Это полноценная платформа для работы, творчества и автоматизации.
             </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
           {/* Big Cards */}
           <FeatureCard 
             colSpan="md:col-span-2"
             title="Supergroups" 
             subtitle="Поддержка до 200,000 участников в одной группе. Продвинутые инструменты модерации, подробная статистика, ветки обсуждений и публичные ссылки."
             icon={<Users size={32} />}
             onClick={() => onOpenDetail('features-groups')}
           />
           <FeatureCard 
             colSpan="md:col-span-2"
             title="Unlimited Cloud" 
             subtitle="Ваше личное безлимитное облачное хранилище. Отправляйте медиа и файлы любого формата размером до 4 ГБ каждый. Доступ с любых устройств."
             icon={<Cloud size={32} />}
             onClick={() => onOpenDetail('features-files')}
           />

           {/* Smaller Cards with Expanded Text */}
           <FeatureCard 
             title="Secret Chats" 
             subtitle="Сквозное шифрование (End-to-End), таймер самоуничтожения сообщений и защита от пересылки. Данные хранятся только на устройствах."
             icon={<Shield size={24} />}
             onClick={() => onOpenDetail('features-secret')}
           />
           <FeatureCard 
             title="Bot API" 
             subtitle="Мощная платформа для разработчиков. Создавайте ботов для интеграции сервисов, приема платежей и HTML5-игр."
             icon={<Bot size={24} />}
             onClick={() => onOpenDetail('features-bots')}
           />
           <FeatureCard 
             title="Themes" 
             subtitle="Полная кастомизация интерфейса. Редактор тем, анимированные фоны и поддержка пользовательских цветовых палитр."
             icon={<Palette size={24} />}
             onClick={() => onOpenDetail('features-themes')}
           />
           <FeatureCard 
             title="Global Network" 
             subtitle="Уникальная распределенная архитектура дата-центров обеспечивает мгновенную доставку сообщений по всему миру."
             icon={<Globe size={24} />}
             onClick={() => onOpenDetail('features-lang')}
           />
        </div>

        <Reveal>
           <div className="mt-4 p-6 border border-white/10 flex items-center justify-between bg-neutral-900/20">
              <div className="flex items-center gap-4">
                 <Zap className="text-yellow-400" />
                 <span className="font-mono text-sm text-neutral-400">SYNC SPEED: <span className="text-white">INSTANT</span></span>
              </div>
              <button onClick={() => onOpenDetail('api')} className="text-xs font-bold uppercase underline hover:text-neutral-300">
                View Protocol Specs
              </button>
           </div>
        </Reveal>
      </div>
    </section>
  );
};