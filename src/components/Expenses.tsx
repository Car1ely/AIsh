import { useLanguage } from '../contexts/LanguageContext'

const Expenses = () => {
  const { t } = useLanguage()
  const expenses = [
    {
      category: 'Разработка',
      items: [
        { name: 'Зарплаты разработчиков', amount: '$6,000 - $7,000/месяц' },
        { name: 'Инфраструктура и серверы', amount: '$500 - $1,000/месяц' },
        { name: 'Инструменты разработки', amount: '$200 - $300/месяц' },
      ],
      total: '$6,700 - $8,300/месяц',
      icon: '💻',
    },
    {
      category: 'Поддержка',
      items: [
        { name: 'Техническая поддержка', amount: '$3,000 - $4,000/месяц' },
        { name: 'Служба поддержки пользователей', amount: '$2,000 - $3,000/месяц' },
        { name: 'Обновления и исправления', amount: '$1,000 - $2,000/месяц' },
      ],
      total: '$6,000 - $9,000/месяц',
      icon: '🔧',
    },
    {
      category: 'Маркетинг',
      items: [
        { name: 'Реклама в социальных сетях', amount: '$2,000 - $5,000/месяц' },
        { name: 'Контент-маркетинг', amount: '$1,000 - $2,000/месяц' },
        { name: 'Партнерства и мероприятия', amount: '$500 - $1,500/месяц' },
      ],
      total: '$3,500 - $8,500/месяц',
      icon: '📢',
    },
  ]

  const totalMonthly = '$16,200 - $25,800/месяц'
  const totalYearly = '$194,400 - $309,600/год'

  return (
    <section id="expenses" className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          {t('expenses.title')}
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
          {t('expenses.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {expenses.map((expense, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{expense.icon}</span>
                <h3 className="text-2xl font-bold text-gray-900">{expense.category}</h3>
              </div>
              <ul className="space-y-3 mb-4">
                {expense.items.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-start border-b border-gray-100 pb-2">
                    <span className="text-gray-700 text-sm">{item.name}</span>
                    <span className="text-primary-600 font-semibold text-sm ml-4">{item.amount}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-3 bg-primary-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">Итого:</span>
                  <span className="font-bold text-primary-700">{expense.total}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">{t('expenses.total.month')}</h3>
            <div className="text-4xl font-bold mb-2">{totalMonthly}</div>
            <p className="text-red-100">{t('expenses.total.includes')}</p>
          </div>
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">{t('expenses.total.year')}</h3>
            <div className="text-4xl font-bold mb-2">{totalYearly}</div>
            <p className="text-orange-100">{t('expenses.total.annual')}</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">{t('expenses.notes.title')}</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Расходы на разработку могут варьироваться в зависимости от размера команды</li>
            <li>• Поддержка проекта может обойтись дороже при росте пользовательской базы</li>
            <li>• Маркетинговые расходы могут увеличиваться для ускорения роста</li>
            <li>• Необходимо учитывать непредвиденные расходы (резерв 10-15%)</li>
            <li>• Расходы будут снижаться по мере масштабирования и оптимизации процессов</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Expenses

