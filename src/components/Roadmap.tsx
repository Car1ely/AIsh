import { useLanguage } from '../contexts/LanguageContext'

const Roadmap = () => {
  const { t } = useLanguage()
  const stages = [
    {
      stage: 'Создание Прототипа/MVP',
      description: 'Разработка минимально жизнеспособного продукта с базовым функционалом AI-матчинга, системой курсов и пользовательскими профилями',
      status: 'completed',
    },
    {
      stage: 'Поиск финансирования',
      description: 'Привлечение инвестиций для развития проекта. Поиск партнеров и инвесторов, заинтересованных в развитии рынка труда Узбекистана',
      status: 'in-progress',
    },
    {
      stage: 'Сбор команды',
      description: 'Расширение команды для создания и поддержки проекта. Привлечение специалистов по разработке, маркетингу, поддержке пользователей',
      status: 'in-progress',
    },
    {
      stage: 'Маркетинг проекта',
      description: 'Продвижение платформы среди целевой аудитории. Реклама в социальных сетях, партнерства с образовательными учреждениями, участие в мероприятиях',
      status: 'pending',
    },
    {
      stage: 'Запуск и развитие',
      description: 'Полноценный запуск платформы для пользователей. Сбор обратной связи, улучшение функционала, масштабирование',
      status: 'pending',
    },
    {
      stage: 'Расширение на мобильное приложение',
      description: 'Разработка мобильных приложений для iOS и Android. Расширение функционала и улучшение пользовательского опыта',
      status: 'pending',
    },
  ]

  return (
    <section id="implementation" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          {t('implementation.title')}
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
          {t('implementation.subtitle')}
        </p>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-primary-200"></div>
            
            <div className="space-y-8">
              {stages.map((item, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  {/* Timeline dot */}
                  <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center ${
                    item.status === 'completed' 
                      ? 'bg-primary-600' 
                      : item.status === 'in-progress'
                      ? 'bg-primary-400 animate-pulse'
                      : 'bg-gray-300'
                  }`}>
                    {item.status === 'completed' && (
                      <span className="text-white text-2xl">✓</span>
                    )}
                    {item.status === 'in-progress' && (
                      <span className="text-white text-xl">⟳</span>
                    )}
                    {item.status === 'pending' && (
                      <span className="text-gray-500 text-xl">○</span>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {item.stage}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Roadmap

