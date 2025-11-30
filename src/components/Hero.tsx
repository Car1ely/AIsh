import { useLanguage } from '../contexts/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()
  
  const scrollToDemo = () => {
    const element = document.getElementById('demo')
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="hero" className="relative pt-24 pb-16 flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl mb-6 text-gray-800 max-w-3xl mx-auto font-semibold">
          {t('hero.subtitle')}
        </p>
        <p className="text-lg mb-8 text-gray-600 max-w-2xl mx-auto">
          {t('hero.description')}
        </p>
        <button
          onClick={scrollToDemo}
          className="bg-gradient-to-r from-primary-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-primary-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          {t('hero.button')}
        </button>
      </div>
    </section>
  )
}

export default Hero

