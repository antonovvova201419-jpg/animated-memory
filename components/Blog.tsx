import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PageType } from '../App';
import { Reveal } from './Reveal';

interface BlogProps {
  onReadPost: (page: PageType) => void;
}

const BlogCard: React.FC<{ 
  title: string; 
  excerpt: string; 
  date: string; 
  tag: string;
  large?: boolean;
  onClick: () => void;
}> = ({ title, excerpt, date, tag, large, onClick }) => (
  <div onClick={onClick} className={`group border border-neutral-800 bg-black p-8 flex flex-col justify-between hover:bg-neutral-900 transition-all cursor-pointer ${large ? 'md:col-span-2 md:row-span-2' : ''}`}>
    <div>
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 border-b border-transparent group-hover:border-white group-hover:text-white transition-all pb-1">
          {tag}
        </span>
        <div className="flex items-center text-neutral-600 text-xs font-mono gap-2">
          <span>{date}</span>
        </div>
      </div>
      <h3 className={`${large ? 'text-4xl' : 'text-2xl'} font-black text-white mb-4 uppercase leading-tight group-hover:text-neutral-200 transition-colors`}>
        {title}
      </h3>
      <p className="text-neutral-400 leading-relaxed mb-8 font-light group-hover:text-neutral-300 transition-colors">
        {excerpt}
      </p>
    </div>
    
    <div className="mt-auto flex items-center text-white font-bold text-xs uppercase tracking-widest gap-2 group-hover:gap-4 transition-all">
      Read Article <ArrowRight size={16} />
    </div>
  </div>
);

export const Blog: React.FC<BlogProps> = ({ onReadPost }) => {
  return (
    <section id="blog" className="py-32 bg-black border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter">Newsroom</h2>
              <div className="h-1 w-20 bg-white"></div>
            </div>
            <button className="px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-colors font-bold uppercase tracking-widest text-xs">
              Архив
            </button>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-neutral-800">
          <BlogCard 
            large
            title="Stories for Channels"
            excerpt="Каналы теперь могут публиковать истории. Новая система бустов от пользователей позволяет сообществам выходить на новый уровень взаимодействия."
            date="SEP 22, 2023"
            tag="Feature"
            onClick={() => onReadPost('blog-stories')}
          />
          <BlogCard 
            title="Business Accounts"
            excerpt="Превратите профиль в витрину. Часы работы, быстрые ответы и автоматизация."
            date="MAR 15, 2024"
            tag="Business"
            onClick={() => onReadPost('blog-business')}
          />
          <BlogCard 
            title="Battery Life"
            excerpt="Оптимизация энергопотребления на 40% для всех платформ."
            date="FEB 10, 2024"
            tag="Tech"
            onClick={() => onReadPost('blog-battery')}
          />
           <BlogCard 
            title="Giveaways"
            excerpt="Прозрачные розыгрыши призов внутри каналов."
            date="NOV 06, 2023"
            tag="Community"
            onClick={() => onReadPost('blog-giveaway')}
          />
           <BlogCard 
            title="Sticker Editor"
            excerpt="Создавайте стикеры из фото в один клик прямо в приложении."
            date="APR 14, 2024"
            tag="Creativity"
            onClick={() => onReadPost('blog-sticker')}
          />
           <BlogCard 
            title="Revenue Sharing"
            excerpt="Авторы контента теперь получают 50% от дохода с рекламы."
            date="MAR 31, 2024"
            tag="Monetization"
            onClick={() => onReadPost('blog-revenue')}
          />
        </div>
      </div>
    </section>
  );
};