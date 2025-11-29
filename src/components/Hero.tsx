const Hero = () => {
  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo')
    demoSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in drop-shadow-2xl">
          AIsh
        </h1>
        <p className="text-xl md:text-3xl mb-8 text-primary-100 max-w-3xl mx-auto">
          AI-платформа для поиска работы и роста навыков в Узбекистане
        </p>
        <p className="text-lg md:text-xl mb-12 text-primary-200 max-w-2xl mx-auto">
          Интеллектуальная карьерная платформа с AI-матчингом вакансий, курсами обучения и персональной карьерной навигацией
        </p>
        <button
          onClick={scrollToDemo}
          className="bg-white text-primary-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
        >
          Посмотреть демо
        </button>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero

