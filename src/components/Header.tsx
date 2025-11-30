import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)
    
    // Небольшая задержка для обеспечения корректной работы
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        const headerHeight = 64 // Высота header
        const elementTop = element.offsetTop
        const offsetPosition = elementTop - headerHeight

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        })
      } else {
        // Если элемент не найден, попробуем найти через querySelector
        const elementByQuery = document.querySelector(`#${id}`)
        if (elementByQuery) {
          const headerHeight = 64
          const elementTop = (elementByQuery as HTMLElement).offsetTop
          const offsetPosition = elementTop - headerHeight

          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth'
          })
        }
      }
    }, 50)
  }

  const navItems = [
    { id: 'stats', labelKey: 'nav.stats' },
    { id: 'problem', labelKey: 'nav.problem' },
    { id: 'courses', labelKey: 'nav.courses' },
    { id: 'ai', labelKey: 'nav.ai' },
    { id: 'competitors', labelKey: 'nav.competitors' },
    { id: 'impact', labelKey: 'nav.impact' },
    { id: 'implementation', labelKey: 'nav.implementation' },
    { id: 'revenue', labelKey: 'nav.revenue' },
    { id: 'demo', labelKey: 'nav.demo' },
    { id: 'team', labelKey: 'nav.team' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div 
            className="text-2xl font-bold text-primary-600 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            AIsh
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                {t(item.labelKey)}
              </button>
            ))}
            {/* Language Switcher */}
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-gray-300">
              <button
                onClick={() => setLanguage('ru')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === 'ru' 
                    ? 'bg-primary-600 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                RU
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === 'en' 
                    ? 'bg-primary-600 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded transition-colors"
                >
                  {t(item.labelKey)}
                </button>
              ))}
              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-2 px-4 pt-4 border-t mt-2">
                <button
                  onClick={() => setLanguage('ru')}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    language === 'ru' 
                      ? 'bg-primary-600 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  RU
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    language === 'en' 
                      ? 'bg-primary-600 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

