import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'ru' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations: Record<Language, Record<string, string>> = {
  ru: {
    // Navigation
    'nav.stats': 'Статистика',
    'nav.problem': 'Проблемы',
    'nav.courses': 'Курсы',
    'nav.ai': 'Об ИИ',
    'nav.competitors': 'Конкуренты',
    'nav.impact': 'Влияние',
    'nav.implementation': 'Реализация',
    'nav.revenue': 'Доходы',
    'nav.demo': 'Демо',
    'nav.team': 'Команда',
    
    // Hero
    'hero.title': 'AIsh',
    'hero.subtitle': 'AI-платформа для поиска работы и роста навыков в Узбекистане',
    'hero.description': 'Интеллектуальная карьерная платформа с AI-матчингом вакансий, курсами обучения и персональной карьерной навигацией',
    'hero.button': 'Посмотреть демо',
    
    // Stats
    'stats.title': 'Анализ рынка труда в Узбекистане',
    'stats.subtitle': 'Статистические данные показывают динамику безработицы и демографические изменения',
    'stats.unemployment.title': 'Общий уровень безработицы',
    'stats.unemployment.change': 'Изменение: ↓ Снижение на 0.6 п.п.',
    'stats.unemployment.count': '836,4 тыс. человек безработных (2024)',
    'stats.registered.title': 'Официальная регистрация',
    'stats.registered.only': 'Только 13,7 тыс. (1,6%) официально зарегистрированы',
    'stats.registered.most': 'Большинство ищут работу через неофициальные каналы',
    'stats.youth.title': 'Безработица среди молодежи (15-24 лет)',
    'stats.youth.percent': '10-11% безработица среди молодежи',
    'stats.youth.dynamic': 'Сократилась вдвое за 8 лет - положительная динамика',
    'stats.population.title': 'Рост населения',
    'stats.population.growth': 'Быстрый рост населения',
    'stats.population.demand': 'Приведет к росту спроса на работу из-за преобладающего количества молодого населения',
    'stats.table.title': 'Сводная таблица показателей',
    'stats.table.indicator': 'Показатель',
    'stats.table.2024': '2024 год',
    'stats.table.2025': '2025 год (III квартал)',
    'stats.table.change': 'Изменение',
    'stats.table.unemployment': 'Общий уровень безработицы',
    'stats.table.unemployment.2024': '6,8% (начало года)\n5,5% (средний показатель)',
    'stats.table.unemployment.2025': '4,9%',
    'stats.table.unemployment.change': '↓ Снижение на 0,6 п.п.',
    'stats.table.count': 'Количество безработных',
    'stats.table.count.2024': '836,4 тыс. человек',
    'stats.table.registered': 'Официально зарегистрированные безработные',
    'stats.table.registered.2024': '13,7 тыс. (1,6% от общего числа)',
    'stats.table.youth': 'Безработица среди молодёжи (15-24 лет)',
    'stats.table.youth.2024': '10-11%',
    'stats.table.youth.2025': 'Сократилась вдвое за 8 лет',
    'stats.table.youth.change': '↓ Положительная динамика',
    'stats.table.women': 'Безработица среди женщин',
    'stats.table.women.2024': 'Выше, чем среди мужчин',
    
    // Problem & Solution
    'problem.title': 'Почему AIsh важен?',
    'problem.subtitle': 'В Узбекистане остро стоит проблема трудоустройства молодежи. Только 1.6% безработных обращаются в центры занятости, а большинство ищут работу через неофициальные каналы. AIsh решает эту проблему, создавая прозрачный и эффективный рынок труда с использованием искусственного интеллекта.',
    'problem.problems.title': 'Проблемы рынка труда',
    'problem.solutions.title': 'Решения AIsh',
    
    // Courses
    'courses.title': 'Курсы и обучение',
    'courses.subtitle': 'Развивайте навыки с помощью курсов от работодателей и экспертов. После прохождения получайте бейджи, XP и сертификаты для вашего профиля.',
    'courses.recommend': 'AI рекомендует курсы на основе ваших навыков и целей карьеры',
    'courses.button': 'Попробовать AI-рекомендации',
    'courses.reward': 'Награда:',
    
    // About AI
    'ai.title': 'Подробнее об ИИ',
    'ai.subtitle': 'Встроенный искусственный интеллект AIsh использует современные алгоритмы машинного обучения для создания максимально эффективной платформы поиска работы и развития карьеры.',
    'ai.benefits.title': 'Преимущества использования ИИ',
    'ai.implementation.title': 'Реализация',
    'ai.implementation.subtitle': 'Наш AI использует комбинацию методов машинного обучения:',
    
    // Competitors
    'competitors.title': 'Анализ конкурентов',
    'competitors.subtitle': 'Существующие платформы имеют существенные недостатки, которые AIsh решает с помощью современных технологий и фокуса на пользовательском опыте.',
    'competitors.why.title': 'Почему AIsh лучше?',
    'competitors.why.specialization': 'Специализация',
    'competitors.why.specialization.desc': 'Полностью сфокусирован на поиске работы и карьерном развитии',
    'competitors.why.ai': 'AI-технологии',
    'competitors.why.ai.desc': 'Умный матчинг и персональные рекомендации на основе ИИ',
    'competitors.why.learning': 'Обучение',
    'competitors.why.learning.desc': 'Встроенные курсы для повышения квалификации и развития навыков',
    'competitors.why.trust': 'Доверие',
    'competitors.why.trust.desc': 'Проверка вакансий и защита от мошенничества с помощью AI',
    
    // Impact
    'impact.title': 'Влияние нашего продукта',
    'impact.subtitle': 'AIsh оказывает положительное влияние на различные аспекты экономики и общества Узбекистана',
    'impact.longterm.title': 'Долгосрочные эффекты',
    'impact.longterm.ecosystem': 'Создание устойчивой экосистемы трудоустройства',
    'impact.longterm.users': 'Пользователей с улучшенными карьерными возможностями',
    'impact.longterm.reduction': 'Снижение времени поиска работы для пользователей',
    
    // Implementation
    'implementation.title': 'Реализация проекта',
    'implementation.subtitle': 'Поэтапный план развития платформы от прототипа до полноценного продукта с мобильными приложениями',
    
    // Revenue
    'revenue.title': 'Способы дохода',
    'revenue.subtitle': 'Монетизация платформы через несколько источников дохода, обеспечивающих устойчивое развитие проекта',
    'revenue.scheme.title': 'Схема заработка',
    'revenue.scheme.employers': 'Для работодателей:',
    'revenue.scheme.users': 'Для пользователей:',
    
    // Expenses
    'expenses.title': 'Расходы и финансирование',
    'expenses.subtitle': 'Детальный анализ основных расходов проекта для планирования бюджета и привлечения инвестиций',
    'expenses.total.month': 'Общие расходы (месяц)',
    'expenses.total.year': 'Общие расходы (год)',
    'expenses.total.includes': 'Включая все категории расходов',
    'expenses.total.annual': 'Годовой бюджет проекта',
    'expenses.notes.title': 'Примечания',
    
    // Team
    'team.title': 'Наша команда',
    
    // Why Us
    'whyus.title': 'Почему AIsh?',
    
    // Demo
    'demo.title': 'Демо: AI-матчинг вакансий',
    'demo.subtitle': 'Введите ваши навыки через запятую, и AI покажет подходящие вакансии',
    'demo.skills.label': 'Ваши навыки:',
    'demo.skills.placeholder': 'Например: React, JavaScript, Excel, Communication, Photoshop...',
    'demo.button': 'Рассчитать AI-совпадение',
    'demo.calculating': '🤖 AI анализирует...',
    'demo.results.title': 'Результаты AI-матчинга:',
    'demo.match': 'совпадение',
    'demo.required': 'Требуемые навыки:',
    'demo.courses.title': '🎓 Рекомендуемые курсы для улучшения совпадения:',
    
    // Tech Stack
    'tech.title': 'Технологический стек',
    'tech.subtitle': 'Современный стек для быстрой разработки и отличного UX',
  },
  en: {
    // Navigation
    'nav.stats': 'Statistics',
    'nav.problem': 'Problems',
    'nav.courses': 'Courses',
    'nav.ai': 'About AI',
    'nav.competitors': 'Competitors',
    'nav.impact': 'Impact',
    'nav.implementation': 'Implementation',
    'nav.revenue': 'Revenue',
    'nav.demo': 'Demo',
    'nav.team': 'Team',
    
    // Hero
    'hero.title': 'AIsh',
    'hero.subtitle': 'AI-powered career platform for job search and skill development in Uzbekistan',
    'hero.description': 'Intelligent career platform with AI job matching, training courses and personalized career navigation',
    'hero.button': 'View Demo',
    
    // Stats
    'stats.title': 'Labor Market Analysis in Uzbekistan',
    'stats.subtitle': 'Statistical data showing unemployment dynamics and demographic changes',
    'stats.unemployment.title': 'Overall Unemployment Rate',
    'stats.unemployment.change': 'Change: ↓ Decrease by 0.6 p.p.',
    'stats.unemployment.count': '836.4 thousand unemployed (2024)',
    'stats.registered.title': 'Official Registration',
    'stats.registered.only': 'Only 13.7 thousand (1.6%) are officially registered',
    'stats.registered.most': 'Most search for jobs through unofficial channels',
    'stats.youth.title': 'Youth Unemployment (15-24 years)',
    'stats.youth.percent': '10-11% youth unemployment',
    'stats.youth.dynamic': 'Halved over 8 years - positive trend',
    'stats.population.title': 'Population Growth',
    'stats.population.growth': 'Rapid population growth',
    'stats.population.demand': 'Will lead to increased job demand due to the predominance of young population',
    'stats.table.title': 'Summary Table of Indicators',
    'stats.table.indicator': 'Indicator',
    'stats.table.2024': '2024',
    'stats.table.2025': '2025 (Q3)',
    'stats.table.change': 'Change',
    'stats.table.unemployment': 'Overall Unemployment Rate',
    'stats.table.unemployment.2024': '6.8% (beginning of year)\n5.5% (average)',
    'stats.table.unemployment.2025': '4.9%',
    'stats.table.unemployment.change': '↓ Decrease by 0.6 p.p.',
    'stats.table.count': 'Number of Unemployed',
    'stats.table.count.2024': '836.4 thousand people',
    'stats.table.registered': 'Officially Registered Unemployed',
    'stats.table.registered.2024': '13.7 thousand (1.6% of total)',
    'stats.table.youth': 'Youth Unemployment (15-24 years)',
    'stats.table.youth.2024': '10-11%',
    'stats.table.youth.2025': 'Halved over 8 years',
    'stats.table.youth.change': '↓ Positive trend',
    'stats.table.women': 'Women Unemployment',
    'stats.table.women.2024': 'Higher than men',
    
    // Problem & Solution
    'problem.title': 'Why is AIsh Important?',
    'problem.subtitle': 'Uzbekistan faces a critical youth employment challenge. Only 1.6% of unemployed people use employment centers, while most search for jobs through unofficial channels. AIsh solves this by creating a transparent and efficient labor market using artificial intelligence.',
    'problem.problems.title': 'Labor Market Problems',
    'problem.solutions.title': 'AIsh Solutions',
    
    // Courses
    'courses.title': 'Courses and Training',
    'courses.subtitle': 'Develop skills through courses from employers and experts. After completion, receive badges, XP and certificates for your profile.',
    'courses.recommend': 'AI recommends courses based on your skills and career goals',
    'courses.button': 'Try AI Recommendations',
    'courses.reward': 'Reward:',
    
    // About AI
    'ai.title': 'More About AI',
    'ai.subtitle': 'AIsh\'s built-in artificial intelligence uses modern machine learning algorithms to create the most effective job search and career development platform.',
    'ai.benefits.title': 'Benefits of Using AI',
    'ai.implementation.title': 'Implementation',
    'ai.implementation.subtitle': 'Our AI uses a combination of machine learning methods:',
    
    // Competitors
    'competitors.title': 'Competitor Analysis',
    'competitors.subtitle': 'Existing platforms have significant shortcomings that AIsh addresses with modern technology and focus on user experience.',
    'competitors.why.title': 'Why is AIsh Better?',
    'competitors.why.specialization': 'Specialization',
    'competitors.why.specialization.desc': 'Fully focused on job search and career development',
    'competitors.why.ai': 'AI Technologies',
    'competitors.why.ai.desc': 'Smart matching and personalized recommendations based on AI',
    'competitors.why.learning': 'Learning',
    'competitors.why.learning.desc': 'Built-in courses for skill development and qualification improvement',
    'competitors.why.trust': 'Trust',
    'competitors.why.trust.desc': 'Job verification and fraud protection using AI',
    
    // Impact
    'impact.title': 'Impact of Our Product',
    'impact.subtitle': 'AIsh has a positive impact on various aspects of Uzbekistan\'s economy and society',
    'impact.longterm.title': 'Long-term Effects',
    'impact.longterm.ecosystem': 'Creating a sustainable employment ecosystem',
    'impact.longterm.users': 'Users with improved career opportunities',
    'impact.longterm.reduction': 'Reduction in job search time for users',
    
    // Implementation
    'implementation.title': 'Project Implementation',
    'implementation.subtitle': 'Step-by-step plan for platform development from prototype to full product with mobile applications',
    
    // Revenue
    'revenue.title': 'Revenue Sources',
    'revenue.subtitle': 'Platform monetization through multiple revenue streams ensuring sustainable project development',
    'revenue.scheme.title': 'Revenue Model',
    'revenue.scheme.employers': 'For Employers:',
    'revenue.scheme.users': 'For Users:',
    
    // Expenses
    'expenses.title': 'Expenses and Funding',
    'expenses.subtitle': 'Detailed analysis of main project expenses for budget planning and investment attraction',
    'expenses.total.month': 'Total Expenses (month)',
    'expenses.total.year': 'Total Expenses (year)',
    'expenses.total.includes': 'Including all expense categories',
    'expenses.total.annual': 'Annual project budget',
    'expenses.notes.title': 'Notes',
    
    // Team
    'team.title': 'Our Team',
    
    // Why Us
    'whyus.title': 'Why AIsh?',
    
    // Demo
    'demo.title': 'Demo: AI Job Matching',
    'demo.subtitle': 'Enter your skills separated by commas, and AI will show suitable job positions',
    'demo.skills.label': 'Your Skills:',
    'demo.skills.placeholder': 'For example: React, JavaScript, Excel, Communication, Photoshop...',
    'demo.button': 'Calculate AI Match',
    'demo.calculating': '🤖 AI analyzing...',
    'demo.results.title': 'AI Matching Results:',
    'demo.match': 'match',
    'demo.required': 'Required Skills:',
    'demo.courses.title': '🎓 Recommended Courses to Improve Match:',
    
    // Tech Stack
    'tech.title': 'Technology Stack',
    'tech.subtitle': 'Modern stack for fast development and excellent UX',
  },
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ru')

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
