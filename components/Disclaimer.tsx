import React, { useState, useEffect } from 'react';
import { AlertTriangle, X } from 'lucide-react';

export const Disclaimer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/90 backdrop-blur-md">
      <div className="bg-neutral-900 border border-neutral-700 p-8 rounded-2xl max-w-lg w-full shadow-2xl relative">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center mb-6">
            <AlertTriangle size={32} />
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-4">Неофициальный концепт</h2>
          <p className="text-neutral-400 mb-8 leading-relaxed">
            Это демонстрационный сайт с <strong>редизайном</strong> интерфейса. 
            Данная страница не является официальным сайтом Telegram FZ-LLC. 
            Для скачивания официальной версии приложения перейдите на <a href="https://telegram.org" target="_blank" rel="noreferrer" className="text-white underline underline-offset-4 hover:text-neutral-300">telegram.org</a>.
          </p>

          <button 
            onClick={() => setIsVisible(false)}
            className="w-full py-4 bg-white text-black font-bold text-lg rounded-xl hover:bg-neutral-200 transition-colors"
          >
            Я понимаю, войти на сайт
          </button>
        </div>
      </div>
    </div>
  );
};