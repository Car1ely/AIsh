const Team = () => {
  const teamMembers = [
    {
      name: 'Li Artur',
      role: 'Backend Developer',
      description: 'Разработка серверной части платформы, API и интеграций',
      stack: 'Node.js, Python, Databases, API Development',
      icon: '⚙️',
    },
    {
      name: 'Danaev Alisher',
      role: 'System Analyst',
      description: 'Анализ требований, проектирование архитектуры системы и бизнес-процессов',
      stack: 'System Design, Business Analysis, Requirements Engineering',
      icon: '📊',
    },
    {
      name: 'Akimjonov Azimjon',
      role: 'Data Engineer',
      description: 'Обработка данных, построение AI-моделей для матчинга и рекомендаций',
      stack: 'Data Engineering, AI/ML, Python, Data Pipelines',
      icon: '🤖',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Наша команда
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className="text-6xl mb-4">{member.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-primary-600 font-semibold mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 mb-4">{member.description}</p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 font-mono">
                  {member.stack}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team

