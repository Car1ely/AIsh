import { useState } from 'react'

interface Job {
  id: number
  title: string
  company: string
  requiredSkills: string[]
  matchPercentage: number
}

interface RecommendedCourse {
  name: string
  reason: string
  xp?: number
  badge?: string
  duration?: string
}

const Demo = () => {
  const [skills, setSkills] = useState('')
  const [jobs, setJobs] = useState<Job[]>([])
  const [recommendedCourses, setRecommendedCourses] = useState<RecommendedCourse[]>([])
  const [isCalculating, setIsCalculating] = useState(false)

  // Предопределенные вакансии
  const predefinedJobs: Omit<Job, 'matchPercentage'>[] = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Tech Company',
      requiredSkills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Git'],
    },
    {
      id: 2,
      title: 'SMM Specialist',
      company: 'Digital Agency',
      requiredSkills: ['SMM', 'Content Creation', 'Analytics', 'Photoshop', 'Copywriting'],
    },
    {
      id: 3,
      title: 'Logistics Manager',
      company: 'Logistics Corp',
      requiredSkills: ['Excel', 'ERP', 'Communication', 'Planning', 'Analytics'],
    },
    {
      id: 4,
      title: 'Call Center Operator',
      company: 'Service Center',
      requiredSkills: ['Communication', 'Customer Service', 'Patience', 'Russian', 'Uzbek'],
    },
  ]

  // Простой алгоритм матчинга (имитация AI)
  const calculateMatch = (userSkills: string[], requiredSkills: string[]): number => {
    if (requiredSkills.length === 0) return 0
    
    const matchedSkills = requiredSkills.filter(skill =>
      userSkills.some(userSkill =>
        userSkill.toLowerCase().includes(skill.toLowerCase()) ||
        skill.toLowerCase().includes(userSkill.toLowerCase())
      )
    )
    
    return Math.round((matchedSkills.length / requiredSkills.length) * 100)
  }

  // База данных курсов
  const courseDatabase: Record<string, Omit<RecommendedCourse, 'reason'>> = {
    excel: { name: 'Excel для работы', xp: 500, badge: 'Excel Master', duration: '20 часов' },
    figma: { name: 'Основы Figma', xp: 400, badge: 'Figma Basics', duration: '15 часов' },
    communication: { name: 'Коммуникации и переговоры', xp: 350, badge: 'Communication Pro', duration: '12 часов' },
    react: { name: 'React и TypeScript', xp: 800, badge: 'React Developer', duration: '40 часов' },
    typescript: { name: 'React и TypeScript', xp: 800, badge: 'React Developer', duration: '40 часов' },
    javascript: { name: 'React и TypeScript', xp: 800, badge: 'React Developer', duration: '40 часов' },
    smm: { name: 'SMM и контент-маркетинг', xp: 600, badge: 'SMM Specialist', duration: '25 часов' },
    erp: { name: 'ERP системы', xp: 500, badge: 'ERP Expert', duration: '18 часов' },
    photoshop: { name: 'Основы дизайна в Photoshop', xp: 450, badge: 'Design Basics', duration: '16 часов' },
    analytics: { name: 'Аналитика данных', xp: 550, badge: 'Data Analyst', duration: '22 часа' },
    'project management': { name: 'Управление проектами', xp: 600, badge: 'Project Manager', duration: '24 часа' },
  }

  // Определение рекомендуемых курсов
  const getRecommendedCourses = (userSkills: string[], jobs: Job[]): RecommendedCourse[] => {
    const courses: RecommendedCourse[] = []
    const userSkillsLower = userSkills.map(s => s.toLowerCase())
    const addedCourseNames = new Set<string>()
    
    // Анализируем вакансии с низким процентом совпадения
    jobs.forEach(job => {
      if (job.matchPercentage < 70) {
        job.requiredSkills.forEach(skill => {
          const skillLower = skill.toLowerCase()
          if (!userSkillsLower.some(us => us.includes(skillLower) || skillLower.includes(us))) {
            // Ищем курс в базе данных
            const courseKey = Object.keys(courseDatabase).find(key => 
              skillLower.includes(key) || key.includes(skillLower)
            )
            
            if (courseKey) {
              const course = courseDatabase[courseKey]
              if (!addedCourseNames.has(course.name)) {
                courses.push({
                  ...course,
                  reason: `Необходимо для вакансии "${job.title}"`,
                })
                addedCourseNames.add(course.name)
              }
            } else if (!addedCourseNames.has(skill)) {
              // Если курса нет в базе, добавляем базовую информацию
              courses.push({
                name: skill,
                reason: `Необходимо для вакансии "${job.title}"`,
                xp: 300,
                duration: '10 часов',
              })
              addedCourseNames.add(skill)
            }
          }
        })
      }
    })

    // Добавляем популярные курсы, если их нет
    const popularCourses = [
      { key: 'excel', reason: 'Популярный навык для карьерного роста' },
      { key: 'figma', reason: 'Необходимо для работы в дизайне и маркетинге' },
      { key: 'communication', reason: 'Важно для любой профессии' },
    ]
    
    popularCourses.forEach(({ key, reason }) => {
      if (courseDatabase[key] && !addedCourseNames.has(courseDatabase[key].name) &&
          !userSkillsLower.some(us => us.includes(key))) {
        courses.push({
          ...courseDatabase[key],
          reason,
        })
        addedCourseNames.add(courseDatabase[key].name)
      }
    })

    return courses.slice(0, 4) // Максимум 4 курса
  }

  const handleCalculate = () => {
    if (!skills.trim()) {
      alert('Пожалуйста, введите ваши навыки')
      return
    }

    setIsCalculating(true)

    // Имитация задержки AI-обработки
    setTimeout(() => {
      const userSkillsArray = skills
        .split(',')
        .map(s => s.trim())
        .filter(s => s.length > 0)

      const matchedJobs: Job[] = predefinedJobs.map(job => ({
        ...job,
        matchPercentage: calculateMatch(userSkillsArray, job.requiredSkills),
      }))

      // Сортируем по проценту совпадения
      matchedJobs.sort((a, b) => b.matchPercentage - a.matchPercentage)

      setJobs(matchedJobs)
      setRecommendedCourses(getRecommendedCourses(userSkillsArray, matchedJobs))
      setIsCalculating(false)
    }, 1500)
  }

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Демо: AI-матчинг вакансий
        </h2>
        <p className="text-center text-primary-100 mb-12 text-lg">
          Введите ваши навыки через запятую, и AI покажет подходящие вакансии
        </p>

        <div className="max-w-3xl mx-auto">
          {/* Форма ввода */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl mb-8">
            <label className="block text-lg font-semibold mb-3">
              Ваши навыки:
            </label>
            <textarea
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="Например: React, JavaScript, Excel, Communication, Photoshop..."
              className="w-full p-4 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary-300 min-h-[120px]"
            />
            <button
              onClick={handleCalculate}
              disabled={isCalculating}
              className="mt-4 w-full bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isCalculating ? '🤖 AI анализирует...' : 'Рассчитать AI-совпадение'}
            </button>
          </div>

          {/* Результаты */}
          {jobs.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-center">
                Результаты AI-матчинга:
              </h3>
              
              {/* Вакансии */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {jobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-xl font-bold mb-1">{job.title}</h4>
                        <p className="text-primary-200">{job.company}</p>
                      </div>
                      <div className="text-right">
                        <div className={`text-3xl font-bold ${
                          job.matchPercentage >= 70 
                            ? 'text-green-300' 
                            : job.matchPercentage >= 40
                            ? 'text-yellow-300'
                            : 'text-red-300'
                        }`}>
                          {job.matchPercentage}%
                        </div>
                        <div className="text-sm text-primary-200">совпадение</div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-primary-200 mb-2">Требуемые навыки:</p>
                      <div className="flex flex-wrap gap-2">
                        {job.requiredSkills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-white/20 rounded text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Рекомендуемые курсы */}
              {recommendedCourses.length > 0 && (
                <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl mt-8">
                  <h3 className="text-2xl font-bold mb-4">
                    🎓 Рекомендуемые курсы для улучшения совпадения:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {recommendedCourses.map((course, idx) => (
                      <div
                        key={idx}
                        className="bg-white/10 p-4 rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="font-semibold text-lg">{course.name}</div>
                          {course.badge && (
                            <span className="px-2 py-1 bg-yellow-400/30 text-yellow-200 rounded text-xs font-semibold">
                              🏆 {course.badge}
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-primary-200 mb-2">{course.reason}</div>
                        <div className="flex items-center gap-4 mt-3 pt-3 border-t border-white/10">
                          {course.xp && (
                            <div className="text-sm">
                              <span className="text-primary-200">XP: </span>
                              <span className="font-bold text-primary-100">{course.xp}</span>
                            </div>
                          )}
                          {course.duration && (
                            <div className="text-sm text-primary-200">
                              ⏱️ {course.duration}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Demo

