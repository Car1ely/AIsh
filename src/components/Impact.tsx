import { useLanguage } from '../contexts/LanguageContext'

const Impact = () => {
  const { t } = useLanguage()
  const impacts = [
    {
      category: 'Экономика',
      points: [
        'Снижение уровня безработицы за счет эффективного трудоустройства',
        'Увеличение производительности труда благодаря правильному подбору кадров',
        'Рост ВВП за счет более эффективного использования человеческого капитала',
        'Привлечение инвестиций в сектор образования и развития навыков',
      ],
    },
    {
      category: 'Социальная сфера',
      points: [
        'Улучшение качества жизни через доступ к лучшим рабочим местам',
        'Снижение социального неравенства за счет равных возможностей',
        'Поддержка молодежи в начале карьерного пути',
        'Повышение уровня образования и квалификации населения',
      ],
    },
    {
      category: 'Рынок труда',
      points: [
        'Прозрачность рынка труда и снижение теневой занятости',
        'Улучшение связи между работодателями и соискателями',
        'Стимулирование развития новых навыков и профессий',
        'Создание конкурентной среды для работодателей',
      ],
    },
    {
      category: 'Технологии',
      points: [
        'Внедрение AI-технологий в повседневную жизнь',
        'Цифровизация процессов трудоустройства',
        'Создание прецедента для других инновационных проектов',
        'Развитие IT-экосистемы Узбекистана',
      ],
    },
  ]

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          {t('impact.title')}
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
          {t('impact.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-4 text-primary-600">
                {impact.category}
              </h3>
              <ul className="space-y-3">
                {impact.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-green-500 text-xl font-bold">•</span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-xl shadow-xl">
          <h3 className="text-2xl font-bold mb-4">{t('impact.longterm.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-4xl font-bold mb-2">5+ лет</div>
              <p className="text-green-100">
                {t('impact.longterm.ecosystem')}
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100K+</div>
              <p className="text-green-100">
                {t('impact.longterm.users')}
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50%+</div>
              <p className="text-green-100">
                {t('impact.longterm.reduction')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Impact

