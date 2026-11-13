import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ServicesPage } from './pages/ServicesPage';
import { SpecsFaqPage } from './pages/SpecsFaqPage';
import { parseHashToRoute, ROUTE_HASH_MAP, type PageRoute } from './types/routes';

export default function App() {
  const [route, setRoute] = useState<PageRoute>(() =>
    parseHashToRoute(window.location.hash)
  );
  const [prefilledSubject, setPrefilledSubject] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(parseHashToRoute(window.location.hash));
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = useCallback((nextRoute: PageRoute, inquirySubject?: string) => {
    if (inquirySubject) {
      setPrefilledSubject(inquirySubject);
    }
    const nextHash = ROUTE_HASH_MAP[nextRoute];
    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    } else {
      setRoute(nextRoute);
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#181715] text-stone-100">
      <Header currentRoute={route} onNavigate={navigate} />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={route}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            {route === 'home' && <HomePage onNavigate={navigate} />}
            {route === 'services' && <ServicesPage onNavigate={navigate} />}
            {route === 'about' && <AboutPage onNavigate={navigate} />}
            {route === 'portfolio' && <PortfolioPage onNavigate={navigate} />}
            {route === 'specs' && <SpecsFaqPage onNavigate={navigate} />}
            {route === 'contact' && (
              <ContactPage
                prefilledSubject={prefilledSubject}
                onNavigate={navigate}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
