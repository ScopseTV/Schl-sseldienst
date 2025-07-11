import Link from 'next/link';
import { ShieldCheck } from 'lucide-react'; // Beispiel Icon
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const t = useTranslations('Navbar');

  // Zustand für mobiles Menü (optional, kann später hinzugefügt werden, wenn benötigt)
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <ShieldCheck className="h-8 w-8 mr-2 text-blue-400" />
            <span className="text-xl font-bold text-white">{t('logoText')}</span>
          </Link>
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              // onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
              aria-label={t('toggleMenu', {defaultValue: 'Toggle menu'})} // Fallback für Toggle-Menü Text
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Menu & Mobile Menu (basiert auf isMobileMenuOpen) */}
        {/* Fürs Erste: Desktop-Menü immer sichtbar, mobiles Menü wird später mit State-Logik verfeinert */}
        <div className={`md:flex items-center mt-4 md:mt-0`}> {/* Temporär 'hidden' entfernt für Testzwecke */}
          <Link href="/" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 md:inline-block md:mt-0">
            {t('home')}
          </Link>
          <Link href="/#leistungen" className="mt-1 block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 md:mt-0 md:ml-4 md:inline-block">
            {t('services')}
          </Link>
          <Link href="/#ueber-uns" className="mt-1 block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 md:mt-0 md:ml-4 md:inline-block">
            {t('about')}
          </Link>
          <Link href="/#kontakt" className="mt-1 block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 md:mt-0 md:ml-4 md:inline-block">
            {t('contact')}
          </Link>
          <div className="mt-2 md:mt-0 md:ml-2 lg:ml-4 border-t border-gray-700 pt-2 md:border-none md:pt-0">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
