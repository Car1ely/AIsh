const IntroStats = () => {
  const stats = [
    {
      value: '10-11%',
      label: 'Безработица среди молодёжи',
      icon: '📊',
    },
    {
      value: '~34%',
      label: 'Разрыв активности женщин',
      icon: '👥',
    },
    {
      value: '1.6%',
      label: 'Обращаются в центр занятости',
      icon: '🏢',
    },
    {
      value: 'Низкий',
      label: 'Охват AI-сервисов и карьерных треков',
      icon: '🤖',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Статистика рынка труда в Узбекистане
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IntroStats

