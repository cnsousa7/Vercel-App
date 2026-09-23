import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Moon, Sun, Menu, X, ChevronDown, Phone } from 'lucide-react';
import { getGeneralWhatsAppUrl } from './cro/whatsapp';
import { trackWhatsAppClick } from '../lib/analytics';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // Necessário para evitar divergência de hidratação do next-themes.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const resolvedTheme = theme === 'system' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : theme;
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  const whatsappUrl = getGeneralWhatsAppUrl();
  const phoneUrl = "tel:+5561992743428";

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-blue-600">
              <Image
                src="/CNSOUSATEC-logo-restored.webp"
                alt="Cnsousatec logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Cnsousatec
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              Início
            </Link>

            <div className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  aria-expanded={servicesOpen}
                  aria-controls="desktop-services-menu"
                  aria-haspopup="true"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1"
                >
                Serviços <ChevronDown className="w-4 h-4" />
              </button>
              {servicesOpen && (
                <div id="desktop-services-menu" className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 z-50 border dark:border-gray-700">
                  <Link href="/servicos/manutencao-eletrica" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => setServicesOpen(false)}>
                    Manutenção Elétrica
                  </Link>
                  <Link href="/servicos/manutencao-hidraulica" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => setServicesOpen(false)}>
                    Manutenção Hidráulica
                  </Link>
                  <Link href="/servicos/manutencao-eletronica" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => setServicesOpen(false)}>
                    Manutenção Eletrônica
                  </Link>
                </div>
              )}
            </div>

            <Link href="/#contato" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              Contato
            </Link>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {!mounted ? (
                <div className="w-5 h-5" />
              ) : theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>

            <a
              href={phoneUrl}
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold border-2 border-blue-600 dark:border-blue-400 px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
            >
              <Phone className="w-4 h-4" /> (61) 99274-3428
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick({ placement: 'header_desktop', label: 'Orçamento' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Orçamento
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
              aria-label="Toggle dark mode"
            >
              {!mounted ? (
                <div className="w-5 h-5" />
              ) : theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              className="p-2 text-gray-700 dark:text-gray-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div id="mobile-navigation" className="md:hidden mt-4 pb-4 space-y-4 border-t dark:border-gray-800 pt-4">
            <Link href="/" className="block text-gray-700 dark:text-gray-300" onClick={() => setMobileMenuOpen(false)}>
              Início
            </Link>
            <Link href="/servicos/manutencao-eletrica" className="block text-gray-700 dark:text-gray-300" onClick={() => setMobileMenuOpen(false)}>
              Manutenção Elétrica
            </Link>
            <Link href="/servicos/manutencao-hidraulica" className="block text-gray-700 dark:text-gray-300" onClick={() => setMobileMenuOpen(false)}>
              Manutenção Hidráulica
            </Link>
            <Link href="/servicos/manutencao-eletronica" className="block text-gray-700 dark:text-gray-300" onClick={() => setMobileMenuOpen(false)}>
              Manutenção Eletrônica
            </Link>
            <Link href="/#contato" className="block text-gray-700 dark:text-gray-300" onClick={() => setMobileMenuOpen(false)}>
              Contato
            </Link>
            <a
              href={phoneUrl}
              className="flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 px-6 py-3 rounded-lg font-bold text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone className="w-5 h-5" /> Ligar Agora
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackWhatsAppClick({ placement: 'header_mobile', label: 'Orçamento WhatsApp' });
                setMobileMenuOpen(false);
              }}
              className="block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-center"
            >
              Orçamento WhatsApp
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
