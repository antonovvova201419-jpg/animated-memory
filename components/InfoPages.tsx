import React, { useEffect } from 'react';
import { X, ArrowRight, Code, Shield, Users, FileText, Cpu, Briefcase, ChevronRight, Check, Scale } from 'lucide-react';
import { PageType } from '../App';

interface InfoPagesProps {
  page: PageType;
  onClose: () => void;
}

export const InfoPages: React.FC<InfoPagesProps> = ({ page, onClose }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  // Generic content generators
  const renderBlogPost = (title: string, date: string, content: React.ReactNode) => ({
    title,
    icon: <FileText size={40} />,
    text: (
      <div className="space-y-8 max-w-3xl">
        <p className="font-mono text-neutral-500 uppercase tracking-widest text-xs mb-4 border-b border-white/10 pb-4 inline-block">{date}</p>
        <div className="text-lg text-neutral-300 font-light leading-relaxed space-y-4">
          {content}
        </div>
        <button className="mt-8 px-6 py-3 border border-white text-white uppercase font-bold text-xs hover:bg-white hover:text-black transition-colors active:scale-95">
          Share Article
        </button>
      </div>
    )
  });

  const renderFeature = (title: string, desc: string, details: string[]) => ({
    title,
    icon: <Users size={40} />,
    text: (
      <div className="space-y-12 max-w-4xl">
        <p className="text-3xl font-light text-white border-l-4 border-white pl-6">{desc}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           {details.map((d, i) => (
             <div key={i} className="flex items-start gap-4 p-6 border border-white/10 bg-neutral-900/30 hover:bg-neutral-900/80 transition-colors">
               <div className="mt-1 p-1 bg-white text-black rounded-full">
                 <Check size={12} />
               </div>
               <p className="text-neutral-300 font-medium">{d}</p>
             </div>
           ))}
        </div>
        
        <div className="flex gap-4">
          <button onClick={onClose} className="px-8 py-4 bg-white text-black font-black uppercase tracking-widest hover:bg-neutral-200 active:scale-95 transition-transform">
            Попробовать
          </button>
        </div>
      </div>
    )
  });

  // Content Mapping
  const contentMap: any = {
    about: {
      title: "О нас",
      icon: <Users size={40} />,
      text: (
        <div className="space-y-8 max-w-3xl text-neutral-300">
          <p className="text-2xl text-white">Telegram — это облачный мессенджер для мобильных устройств и компьютеров. Быстрый, безопасный и совершенно бесплатный.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-white/10">
            <div>
              <h3 className="text-white font-bold text-lg mb-2 uppercase">Штаб-квартира</h3>
              <p className="text-neutral-400">Команда разработчиков базируется в Дубае. Мы верим в свободу слова и неприкосновенность частной жизни.</p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-2 uppercase">Миссия</h3>
              <p className="text-neutral-400">Создать самый надежный инструмент коммуникации для всех людей на планете, где бы они ни находились.</p>
            </div>
          </div>
        </div>
      )
    },
    jobs: {
      title: "Карьера",
      icon: <Briefcase size={40} />,
      text: (
        <div className="space-y-6 w-full max-w-3xl">
           <p className="text-xl text-neutral-300 mb-8">Мы ищем таланты, способные решать сложные задачи.</p>
           {['C++ Expert', 'iOS Engineer', 'Android Engineer', 'Product Designer'].map((job, i) => (
             <div key={i} className="group flex items-center justify-between p-6 border border-white/10 hover:bg-white hover:text-black transition-all cursor-pointer">
               <span className="font-bold text-lg uppercase tracking-wider">{job}</span>
               <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
             </div>
           ))}
           <button onClick={() => window.open('https://t.me/jobs', '_blank')} className="mt-8 text-white underline decoration-white/30 underline-offset-8 uppercase font-bold text-xs hover:decoration-white">
             Apply via @jobs_bot
           </button>
        </div>
      )
    },
    api: {
        title: "API & Protocol",
        icon: <Code size={40} />,
        text: (
          <div className="space-y-8 max-w-3xl">
             <p className="text-xl text-neutral-300">Полная документация для разработчиков клиентов и ботов.</p>
             <div className="bg-neutral-900 border border-white/10 p-6 font-mono text-sm text-neutral-400 rounded-lg">
                <span className="text-blue-400">function</span> <span className="text-yellow-400">createClient</span>() {'{'} <br/>
                &nbsp;&nbsp;<span className="text-purple-400">return</span> new MTProto({'{'} <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;api_id: <span className="text-green-400">YOUR_ID</span>, <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;api_hash: <span className="text-green-400">"YOUR_HASH"</span> <br/>
                &nbsp;&nbsp;{'}'}); <br/>
                {'}'}
             </div>
             <button onClick={() => window.open('https://core.telegram.org', '_blank')} className="px-8 py-3 bg-white text-black font-bold uppercase hover:bg-neutral-200 active:scale-95 transition-transform">
               Read Docs
             </button>
          </div>
        )
    },
    rules: {
        title: "Правила Платформы",
        icon: <Scale size={40} />,
        text: (
            <div className="space-y-8 max-w-3xl text-neutral-300">
                <div className="p-6 border border-white/20 bg-neutral-900/50">
                    <h3 className="text-xl text-white font-bold uppercase mb-4">Основные Запреты</h3>
                    <ul className="list-disc pl-5 space-y-3 text-neutral-400">
                        <li>Запрещено использование Telegram для рассылки спама или мошенничества.</li>
                        <li>Запрещено пропагандировать насилие в публичных каналах.</li>
                        <li>Запрещено распространение порнографических материалов в публичном доступе.</li>
                    </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 border-t border-white/10">
                        <h4 className="text-white font-bold uppercase mb-2">Приватность</h4>
                        <p className="text-sm text-neutral-500">Мы используем данные только для обеспечения работы сервиса. Мы не передаем переписки третьим лицам.</p>
                    </div>
                    <div className="p-6 border-t border-white/10">
                        <h4 className="text-white font-bold uppercase mb-2">Удаление</h4>
                        <p className="text-sm text-neutral-500">Вы можете удалить свой аккаунт и все данные в любой момент навсегда.</p>
                    </div>
                </div>

                <button onClick={onClose} className="mt-4 px-8 py-3 border border-white text-white font-bold uppercase text-xs hover:bg-white hover:text-black transition-colors">
                    Я согласен
                </button>
            </div>
        )
    },
    // Map feature strings
    'features-groups': renderFeature("Supergroups", "Мощные сообщества для работы и общения.", ["До 200,000 участников", "История чата доступна новым", "Админы с правами", "Закрепленные сообщения"]),
    'features-files': renderFeature("Cloud Storage", "Безлимитное облачное хранилище.", ["Файлы до 4 ГБ", "Мгновенный доступ", "Медиаплеер", "Без сжатия (как файлы)"]),
    'features-secret': renderFeature("Secret Chats", "Максимальная приватность.", ["End-to-End шифрование", "Не хранятся на серверах", "Таймер уничтожения", "Запрет пересылки"]),
    'features-bots': renderFeature("Bot Platform", "Автоматизация процессов.", ["Платежи", "Игры HTML5", "Администрирование", "Интеграции"]),
    'features-themes': renderFeature("Customization", "Сделайте Telegram своим.", ["Редактор тем", "Анимированные фоны", "Ночной режим", "Сменные иконки"]),
    'features-lang': renderFeature("Localization", "Telegram говорит на вашем языке.", ["Платформа переводов", "Свои языковые пакеты", "Перевод в чатах"]),
    // Map blog strings
    'blog-stories': renderBlogPost("Stories for Channels", "SEP 22, 2023", <p>Каналы теперь могут публиковать истории. Система бустов позволяет сообществам выходить на новый уровень.</p>),
    'blog-business': renderBlogPost("Telegram Business", "MAR 15, 2024", <p>Превратите профиль в витрину. Часы работы, быстрые ответы и автоматизация.</p>),
    'blog-battery': renderBlogPost("Power Saving Mode", "FEB 10, 2024", <p>Оптимизация энергопотребления на 40% для всех платформ. Отключайте анимации для экономии заряда.</p>),
    'blog-giveaway': renderBlogPost("Giveaways", "NOV 06, 2023", <p>Прозрачные розыгрыши призов внутри каналов. Автоматический выбор победителей.</p>),
    'blog-sticker': renderBlogPost("Sticker Editor", "APR 14, 2024", <p>Создавайте стикеры из фото в один клик прямо в приложении. Вырезайте объекты, добавляйте текст.</p>),
    'blog-revenue': renderBlogPost("Revenue Sharing", "MAR 31, 2024", <p>Авторы контента теперь получают 50% от дохода с рекламы. Выплаты в TON.</p>),
  };

  const currentContent = page && contentMap[page] ? contentMap[page] : contentMap['about'];

  if (!page) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl overflow-y-auto animate-fade-in">
       {/* Background Grid */}
       <div className="fixed inset-0 grid-pattern opacity-20 pointer-events-none"></div>

      <div className="min-h-screen relative p-6 md:p-12 lg:p-24">
        <button 
          onClick={onClose}
          className="fixed top-6 right-6 z-50 p-4 border border-white/20 bg-black text-white rounded-full hover:bg-white hover:text-black transition-all group active:scale-95"
        >
          <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
        </button>

        <div className="max-w-5xl mx-auto mt-12 animate-slide-up">
           <div className="flex items-center gap-6 mb-12 border-b border-white/10 pb-12">
             <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-white">
               {currentContent.icon}
             </div>
             <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white">
               {currentContent.title}
             </h1>
           </div>

           <div className="content-area">
             {currentContent.text}
           </div>
        </div>
      </div>
    </div>
  );
};