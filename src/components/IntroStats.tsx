import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts'
import { useLanguage } from '../contexts/LanguageContext'

const IntroStats = () => {
  const { t } = useLanguage()
  // Данные для pie chart: Официально зарегистрированные безработные
  const registeredData = [
    { name: 'Зарегистрированные', value: 13.7, fill: '#3b82f6' },
    { name: 'Незарегистрированные', value: 822.7, fill: '#ef4444' },
  ]

  // Данные для bar chart: Безработица по годам
  const unemploymentData = [
    { year: '2024 (начало)', value: 0.83 }, // Это процент!
    { year: '2024 (средний)', value: 0.67 }, // Это процент!
    { year: '2025 (III квартал)', value: 0.6 }, // Это процент!
  ]
  // **Примечание:** На изображении 6.80 млн, но для "Общего уровня безработицы" (уровня) обычно используются проценты. 
  // Я оставляю 6.8 как процент, чтобы соответствовать логике "уровня безработицы".

  // Данные для pie chart: Безработица среди молодежи
  const youthData = [
    { name: 'Безработные 15-24 лет', value: 10.5, fill: '#f59e0b' },
    { name: 'Занятые 15-24 лет', value: 89.5, fill: '#10b981' },
  ]

  // Данные для роста населения
  const populationData = [
    { year: '2021', value: 34.5 },
    { year: '2022', value: 35.27 },
    { year: '2023', value: 36.02 },
    { year: '2024', value: 36.80 },
    { year: '2025', value: 38.06 },
  ]

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0]
      let displayValue = ''
      
      if (typeof data.value === 'number') {
        // Проверяем, является ли это BarChart с годами (Общий уровень безработицы) 
        // или PieChart (youthData, registeredData) с процентами.
        // Используем dataKey из BarChart ('year') для идентификации данных по годам.
        const isUnemploymentRate = unemploymentData.some(d => d.year === data.name);
        
        if (isUnemploymentRate || data.name.includes('%') || data.name.includes('Безработные') || data.name.includes('Занятые')) {
          displayValue = `${data.value.toFixed(1)}%` // Формат для процентов
        } else if (data.name) {
          // Для данных о населении (populationData)
          displayValue = `${data.value.toFixed(2)} млн` // Формат для миллионов
        } else {
            // Если это данные из BarChart, где data.name не установлен (как в BarChart с годами)
            // Дополнительная проверка на совпадение year, если name отсутствует
            const dataPoint = unemploymentData.find(d => d.year === data.payload.year)
            if (dataPoint) {
              displayValue = `${data.value.toFixed(1)}%`
            } else {
              displayValue = `${data.value.toFixed(2)} млн` 
            }
        }
      } else {
        displayValue = String(data.value)
      }
      
      return (
        <div className="bg-white p-3 border border-gray-200 rounded shadow-lg">
          {/* Для BarChart с годами data.name может быть пустым, используем data.payload.year */}
          <p className="font-semibold mb-1">{data.name || data.payload?.year || ''}</p> 
          <p className="text-primary-600 font-bold text-lg">
            {displayValue}
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <section id="stats" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          {t('stats.title')}
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {t('stats.subtitle')}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Безработица по годам */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-900">{t('stats.unemployment.title')}</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={unemploymentData}>
                <XAxis dataKey="year" />
                <YAxis domain={[0, 8]} tickFormatter={(value) => `${value}%`} /> {/* Добавляем % к YAxis */}
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(59, 130, 246, 0.1)' }} />
                <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]}>
                  {unemploymentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 2 ? '#10b981' : '#3b82f6'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 text-sm text-gray-600">
              <p className="font-semibold">{t('stats.unemployment.change')}</p>
              <p>{t('stats.unemployment.count')}</p>
            </div>
          </div>

          {/* Официально зарегистрированные */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-900">{t('stats.registered.title')}</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={registeredData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {registeredData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 text-sm text-gray-600">
              <p className="font-semibold">{t('stats.registered.only')}</p>
              <p>{t('stats.registered.most')}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Безработица среди молодежи */}
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-900">{t('stats.youth.title')}</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={youthData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {youthData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 text-sm text-gray-600">
              <p className="font-semibold">{t('stats.youth.percent')}</p>
              <p>{t('stats.youth.dynamic')}</p>
            </div>
          </div>

          {/* Рост населения */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-900">{t('stats.population.title')}</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={populationData}>
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(16, 185, 129, 0.1)' }} />
                <Bar dataKey="value" fill="#10b981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 text-sm text-gray-600">
              <p className="font-semibold">{t('stats.population.growth')}</p>
              <p>{t('stats.population.demand')}</p>
            </div>
          </div>
        </div>

        {/* Таблица с данными */}
        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4 text-gray-900">{t('stats.table.title')}</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="p-3 font-semibold">{t('stats.table.indicator')}</th>
                  <th className="p-3 font-semibold">{t('stats.table.2024')}</th>
                  <th className="p-3 font-semibold">{t('stats.table.2025')}</th>
                  <th className="p-3 font-semibold">{t('stats.table.change')}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">{t('stats.table.unemployment')}</td>
                  <td className="p-3">{t('stats.table.unemployment.2024').split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}</td>
                  <td className="p-3">{t('stats.table.unemployment.2025')}</td>
                  <td className="p-3 text-green-600">{t('stats.table.unemployment.change')}</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">{t('stats.table.count')}</td>
                  <td className="p-3">{t('stats.table.count.2024')}</td>
                  <td className="p-3">-</td>
                  <td className="p-3">-</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">{t('stats.table.registered')}</td>
                  <td className="p-3">{t('stats.table.registered.2024')}</td>
                  <td className="p-3">-</td>
                  <td className="p-3">-</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">{t('stats.table.youth')}</td>
                  <td className="p-3">{t('stats.table.youth.2024')}</td>
                  <td className="p-3">{t('stats.table.youth.2025')}</td>
                  <td className="p-3 text-green-600">{t('stats.table.youth.change')}</td>
                </tr>
                <tr>
                  <td className="p-3">{t('stats.table.women')}</td>
                  <td className="p-3">{t('stats.table.women.2024')}</td>
                  <td className="p-3">-</td>
                  <td className="p-3">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroStats