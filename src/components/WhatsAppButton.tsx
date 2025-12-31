import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
      setShowLabel(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.open('https://wa.me/919876543210?text=Hi! I need technical specifications for gypsum products.', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        'fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-success text-white rounded-full shadow-elevated transition-all duration-300 hover:scale-105',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0',
        showLabel ? 'px-5 py-3' : 'p-4'
      )}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} className="fill-current" />
      {showLabel && (
        <span className="hidden sm:inline font-medium text-sm animate-fade-in">
          Need specs? Chat now
        </span>
      )}
    </button>
  );
}
