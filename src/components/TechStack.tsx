const TechStack = () => {
  const technologies = [
    { name: 'React', icon: '⚛️', description: 'UI библиотека' },
    { name: 'TypeScript', icon: '📘', description: 'Типизированный JavaScript' },
    { name: 'TailwindCSS', icon: '🎨', description: 'Utility-first CSS' },
    { name: 'Vite', icon: '⚡', description: 'Быстрый сборщик' },
    { name: 'AI/ML', icon: '🤖', description: 'Локальная имитация AI' },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Технологический стек
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="text-5xl mb-3">{tech.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg">
              Современный стек для быстрой разработки и отличного UX
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack

