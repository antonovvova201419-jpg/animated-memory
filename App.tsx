import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Security } from './components/Security';
import { Customization } from './components/Customization';
import { History } from './components/History';
import { Downloads } from './components/Downloads';
import { Blog } from './components/Blog';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Disclaimer } from './components/Disclaimer';
import { InfoPages } from './components/InfoPages';

export type PageType = 'about' | 'jobs' | 'press' | 'api' | 'bot' | 'rules' | 'features-files' | 'features-groups' | 'features-secret' | 'features-bots' | 'features-themes' | 'features-lang' | 'blog-stories' | 'blog-business' | 'blog-battery' | 'blog-giveaway' | 'blog-sticker' | 'blog-revenue' | null;

function App() {
  const [activePage, setActivePage] = useState<PageType>(null);

  const handleNavigate = (page: PageType) => {
    setActivePage(page);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-white selection:text-black font-sans">
      <Disclaimer />
      <Navbar onNavigate={handleNavigate} />
      
      {/* If an overlay page is active, show it. Otherwise show landing page content. */}
      {activePage ? (
        <InfoPages page={activePage} onClose={() => setActivePage(null)} />
      ) : (
        <main>
          <Hero />
          <Features onOpenDetail={handleNavigate} />
          <Security />
          <Customization />
          <Blog onReadPost={handleNavigate} />
          <Downloads />
          <History />
          <FAQ />
        </main>
      )}
      
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;