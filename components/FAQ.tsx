import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-neutral-800">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between text-left hover:bg-neutral-900/30 transition-colors group px-4"
      >
        <span className="text-xl md:text-2xl font-bold text-white uppercase group-hover:text-neutral-300 transition-colors pr-8">
          {question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center border border-white rounded-full transition-transform duration-300 ${isOpen ? 'rotate-180 bg-white text-black' : 'text-white'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="pb-8 px-4 text-neutral-400 leading-relaxed max-w-3xl">
          {answer}
        </div>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  return (
    <section className="py-32 bg-black border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end gap-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">FAQ</h2>
          <span className="text-neutral-500 font-mono text-sm mb-2">// Часто задаваемые вопросы</span>
        </div>

        <div className="border-t border-neutral-800">
          <FAQItem 
            question="Насколько безопасен Telegram?" 
            answer="Telegram безопаснее, чем массовые мессенджеры вроде WhatsApp или Line. Мы используем протокол MTProto, основанный на проверенных временем алгоритмах шифрования. Для максимальной безопасности используйте Секретные чаты со сквозным шифрованием." 
          />
          <FAQItem 
            question="Кто платит за Telegram?" 
            answer="Павел Дуров, основатель Telegram, финансирует проект. Если деньги закончатся, мы добавим ненавязчивые платные функции для бизнеса, чтобы поддерживать инфраструктуру, но основные функции останутся бесплатными навсегда." 
          />
          <FAQItem 
            question="Есть ли реклама?" 
            answer="В личных чатах и группах рекламы нет и никогда не будет. Реклама может появляться только в крупных публичных каналах (1000+ подписчиков) через специальную рекламную платформу, которая уважает приватность." 
          />
          <FAQItem 
            question="Что насчет моих данных?" 
            answer="Мы храним минимум данных, необходимый для работы синхронизации между устройствами. Мы не используем ваши данные для таргетинга рекламы и не передаем их третьим лицам." 
          />
          <FAQItem 
            question="Могу ли я создать свои стикеры?" 
            answer="Да, платформа стикеров полностью открыта. Любой художник может загрузить свои рисунки через бота @stickers и поделиться ими с миллионами пользователей." 
          />
        </div>
      </div>
    </section>
  );
};