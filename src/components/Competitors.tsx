import { useLanguage } from '../contexts/LanguageContext'

const Competitors = () => {
  const { t } = useLanguage()
  const competitors = [
    {
      name: 'OLX',
      issues: [
        'Не специализирован на поиске работы - общая платформа объявлений',
        'Очень назойливая система регистрации',
        'Нет инструментов для карьерного развития',
        'Отсутствует AI-матчинг и рекомендации',
        'Смешение разных типов объявлений затрудняет поиск работы',
      ],
      icon: '📱',
      color: 'from-orange-500 to-red-500',
    },
    {
      name: 'HeadHunter',
      issues: [
        'Мало функционала, помогающего пользователю в поиске работы',
        'Отсутствует встроенный AI для рекомендаций',
        'Нет курсов и обучения для повышения квалификации',
        'Медленная работа платформы',
        'Мало доверия к объявлениям из-за фальсифицированных данных',
        'Не адаптирован под рынок Узбекистана',
      ],
      icon: '💼',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'ish.mehnat.uz',
      issues: [
        'Неизвестен среди населения, особенно среди молодежи',
        'Проект не продвигается и не развивается',
        'Устаревший дизайн и функционал',
        'Отсутствие современных технологий',
        'Низкая активность пользователей',
      ],
      icon: '🌐',
      color: 'from-gray-500 to-slate-500',
    },
  ]

  return (
    <section id="competitors" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          {t('competitors.title')}
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
          {t('competitors.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {competitors.map((competitor, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-lg border-2 border-gray-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`text-5xl bg-gradient-to-r ${competitor.color} bg-clip-text text-transparent`}>
                  {competitor.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{competitor.name}</h3>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">Основные проблемы:</h4>
                <ul className="space-y-2">
                  {competitor.issues.map((issue, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-500 mt-1">✗</span>
                      <span className="text-sm">{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary-600 to-purple-600 text-white p-8 rounded-xl shadow-xl">
          <h3 className="text-2xl font-bold mb-4">{t('competitors.why.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-lg">{t('competitors.why.specialization')}</h4>
              <p className="text-primary-100">
                {t('competitors.why.specialization.desc')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-lg">{t('competitors.why.ai')}</h4>
              <p className="text-primary-100">
                {t('competitors.why.ai.desc')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-lg">{t('competitors.why.learning')}</h4>
              <p className="text-primary-100">
                {t('competitors.why.learning.desc')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-lg">{t('competitors.why.trust')}</h4>
              <p className="text-primary-100">
                {t('competitors.why.trust.desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Competitors

