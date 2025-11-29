const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Excel для работы',
      category: 'Офисные навыки',
      duration: '20 часов',
      level: 'Начальный',
      skills: ['Excel', 'Аналитика', 'Формулы', 'Таблицы'],
      description: 'Освойте Excel с нуля: формулы, сводные таблицы, графики. Необходимо для работы в логистике, HR, финансах.',
      xp: 500,
      badge: 'Excel Master',
    },
    {
      id: 2,
      title: 'Основы Figma',
      category: 'Дизайн',
      duration: '15 часов',
      level: 'Начальный',
      skills: ['Figma', 'UI/UX', 'Дизайн', 'Прототипирование'],
      description: 'Изучите основы работы в Figma для создания интерфейсов. Полезно для SMM, маркетинга и начинающих дизайнеров.',
      xp: 400,
      badge: 'Figma Basics',
    },
    {
      id: 3,
      title: 'Коммуникации и переговоры',
      category: 'Soft Skills',
      duration: '12 часов',
      level: 'Базовый',
      skills: ['Коммуникации', 'Переговоры', 'Презентации', 'Работа в команде'],
      description: 'Развивайте навыки общения, необходимые для любой профессии. Особенно важно для менеджеров, продажников, HR.',
      xp: 350,
      badge: 'Communication Pro',
    },
    {
      id: 4,
      title: 'React и TypeScript',
      category: 'Программирование',
      duration: '40 часов',
      level: 'Средний',
      skills: ['React', 'TypeScript', 'JavaScript', 'Frontend'],
      description: 'Полный курс по разработке на React и TypeScript. Для тех, кто хочет стать Frontend Developer.',
      xp: 800,
      badge: 'React Developer',
    },
    {
      id: 5,
      title: 'SMM и контент-маркетинг',
      category: 'Маркетинг',
      duration: '25 часов',
      level: 'Базовый',
      skills: ['SMM', 'Content Creation', 'Analytics', 'Copywriting'],
      description: 'Научитесь создавать контент для социальных сетей, анализировать метрики и привлекать аудиторию.',
      xp: 600,
      badge: 'SMM Specialist',
    },
    {
      id: 6,
      title: 'ERP системы',
      category: 'Бизнес',
      duration: '18 часов',
      level: 'Средний',
      skills: ['ERP', 'Логистика', 'Управление', 'Аналитика'],
      description: 'Изучите работу с ERP-системами для управления бизнес-процессами. Важно для логистов и менеджеров.',
      xp: 500,
      badge: 'ERP Expert',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Курсы и обучение
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
          Развивайте навыки с помощью курсов от работодателей и экспертов. 
          После прохождения получайте бейджи, XP и сертификаты для вашего профиля.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                  {course.category}
                </span>
                <span className="text-sm text-gray-500">{course.duration}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {course.title}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm">
                {course.description}
              </p>

              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-gray-500">Уровень:</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                    {course.level}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-primary-50 text-primary-700 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div>
                  <div className="text-sm text-gray-500">Награда:</div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary-600">
                      {course.xp} XP
                    </span>
                    <span className="text-sm text-gray-600">+</span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-semibold">
                      🏆 {course.badge}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            AI рекомендует курсы на основе ваших навыков и целей карьеры
          </p>
          <button
            onClick={() => {
              const demoSection = document.getElementById('demo')
              demoSection?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300"
          >
            Попробовать AI-рекомендации
          </button>
        </div>
      </div>
    </section>
  )
}

export default Courses

