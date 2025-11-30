import { useLanguage } from '../contexts/LanguageContext'

const WhyUs = () => {
  const { t } = useLanguage()
  const reasons = [
    {
      title: 'Опыт команды',
      description: 'Участие в ICPC и опыт в разработке сложных систем',
      icon: '🏆',
    },
    {
      title: 'Знание технологий',
      description: 'Современный стек: React, TypeScript, AI/ML',
      icon: '⚡',
    },
    {
      title: 'Локальный рынок',
      description: 'Понимание специфики рынка труда Узбекистана',
      icon: '🇺🇿',
    },
    {
      title: 'AI-решения',
      description: 'Интеллектуальный матчинг и карьерная навигация',
      icon: '🧠',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          {t('whyus.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-primary-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs

