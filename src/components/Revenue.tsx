import { useLanguage } from '../contexts/LanguageContext'

const Revenue = () => {
  const { t } = useLanguage()
  const revenueSources = [
    {
      title: 'Рекламные баннеры',
      description: 'Размещение баннеров с рекламой в некоторых частях сайта',
      details: 'Ненавязчивая реклама, не мешающая пользовательскому опыту',
    },
    {
      title: 'Продвижение вакансий',
      description: 'Возможность компаний продвинуть вакансию в поиске',
      details: '15 000 сум за 30 дней для продвижения вверх по списку (исходит из цены конкурентов)',
      price: '15 000 сум/месяц',
    },
    {
      title: 'Платные курсы',
      description: 'Компании могут размещать собственные курсы за деньги',
      details: 'Платформа забирает 30% с каждой покупки курса. У бесплатных курсов платформа не берет деньги',
      commission: '30% комиссия',
    },
    {
      title: 'Сертификаты',
      description: 'Сертификаты стоят денег для получения, даже если курс бесплатный',
      details: 'Дополнительный источник дохода от пользователей, прошедших обучение',
    },
    {
      title: 'Премиум подписка',
      description: 'Подписка отключает рекламу и дает возможность получать сертификаты бесплатно',
      details: 'Цена будет зависеть от будущих потребностей. Улучшенный пользовательский опыт',
    },
  ]

  return (
    <section id="revenue" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          {t('revenue.title')}
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
          {t('revenue.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {revenueSources.map((source, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary-50 to-purple-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {source.title}
              </h3>
              <p className="text-gray-700 mb-3">{source.description}</p>
              <p className="text-sm text-gray-600 mb-3">{source.details}</p>
              {source.price && (
                <div className="mt-4 p-2 bg-primary-100 rounded text-center">
                  <span className="font-semibold text-primary-700">{source.price}</span>
                </div>
              )}
              {source.commission && (
                <div className="mt-4 p-2 bg-purple-100 rounded text-center">
                  <span className="font-semibold text-purple-700">{source.commission}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary-600 to-purple-600 text-white p-8 rounded-xl shadow-xl">
          <h3 className="text-2xl font-bold mb-4">{t('revenue.scheme.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-lg">{t('revenue.scheme.employers')}</h4>
              <ul className="space-y-2 text-primary-100">
                <li>• Бесплатное размещение вакансий</li>
                <li>• Платные курсы от компаний</li>
                <li>• Продвижение вакансий (15 000 сум/месяц)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-lg">{t('revenue.scheme.users')}</h4>
              <ul className="space-y-2 text-primary-100">
                <li>• Бесплатный доступ к платформе</li>
                <li>• Платные курсы (30% комиссия платформе)</li>
                <li>• Сертификаты (платно)</li>
                <li>• Премиум подписка (без рекламы)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Revenue

