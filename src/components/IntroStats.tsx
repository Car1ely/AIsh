import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useLanguage } from "../contexts/LanguageContext";

const IntroStats = () => {
  const { t } = useLanguage();

  // Данные
  const registeredData = [
    { name: "Зарегистрированные", value: 13.7, fill: "#3b82f6", type: "registered" },
    { name: "Незарегистрированные", value: 822.7, fill: "#ef4444", type: "registered" },
  ];

  const unemploymentData = [
    { year: "2024 (начало)", value: 0.83, type: "million" },
    { year: "2024 (средний)", value: 0.67, type: "million" },
    { year: "2025 (III квартал)", value: 0.6, type: "million" },
  ];

  const youthData = [
    { name: "Безработные 15-24 лет", value: 10.5, fill: "#f59e0b", type: "youth" },
    { name: "Занятые 15-24 лет", value: 89.5, fill: "#10b981", type: "youth" },
  ];

  const populationData = [
    { year: "2021", value: 34.5, type: "population" },
    { year: "2022", value: 35.27, type: "population" },
    { year: "2023", value: 36.02, type: "population" },
    { year: "2024", value: 36.8, type: "population" },
    { year: "2025", value: 38.06, type: "population" },
  ];

  // Tooltip
  const CustomTooltip = ({ active, payload }: any) => {
    if (!active || !payload || !payload.length) return null;

    const item = payload[0];
    const value = item.value;
    const type = item.payload?.type;
    const name = item.name || item.payload?.year;

    let display = "";

    if (type === "million") display = `${value.toFixed(2)} млн`;
    else if (type === "registered") display = `${value.toFixed(1)} тыс`;
    else if (type === "population") display = `${value.toFixed(2)} млн`;
    else if (type === "youth") display = `${value.toFixed(1)}%`;
    else display = value;

    return (
      <div className="bg-white p-3 border border-gray-200 rounded shadow-lg">
        <p className="font-semibold mb-1">{name}</p>
        <p className="text-primary-600 font-bold text-lg">{display}</p>
      </div>
    );
  };

  return (
    <section id="stats" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          {t("stats.title")}
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {t("stats.subtitle")}
        </p>

        {/* Блок 1: Безработица + Зарегистрированные */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

          {/* Безработица по годам */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              {t("stats.unemployment.title")}
            </h3>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={unemploymentData}>
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]}>
                  {unemploymentData.map((_, i) => (
                    <Cell key={i} fill={i === 2 ? "#10b981" : "#3b82f6"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            {/* ВОЗВРАЩАЮ ТЕКСТ */}
            <div className="mt-4 text-sm text-gray-600">
              <p className="font-semibold">{t("stats.unemployment.change")}</p>
              <p>{t("stats.unemployment.count")}</p>
            </div>
          </div>

          {/* Зарегистрированные */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              {t("stats.registered.title")}
            </h3>

            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={registeredData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  labelLine={false}
                >
                  {registeredData.map((item, i) => (
                    <Cell key={i} fill={item.fill} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>

            {/* ВОЗВРАЩАЮ ТЕКСТ */}
            <div className="mt-4 text-sm text-gray-600">
              <p className="font-semibold">{t("stats.registered.only")}</p>
              <p>{t("stats.registered.most")}</p>
            </div>
          </div>
        </div>

        {/* Блок 2: Молодёжь + Население */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Молодежь */}
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              {t("stats.youth.title")}
            </h3>

            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={youthData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  labelLine={false}
                >
                  {youthData.map((item, i) => (
                    <Cell key={i} fill={item.fill} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>

            {/* ВОЗВРАЩАЮ ТЕКСТ */}
            <div className="mt-4 text-sm text-gray-600">
              <p className="font-semibold">{t("stats.youth.percent")}</p>
              <p>{t("stats.youth.dynamic")}</p>
            </div>
          </div>

          {/* Население */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              {t("stats.population.title")}
            </h3>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={populationData}>
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="value" fill="#10b981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>

            {/* ВОЗВРАЩАЮ ТЕКСТ */}
            <div className="mt-4 text-sm text-gray-600">
              <p className="font-semibold">{t("stats.population.growth")}</p>
              <p>{t("stats.population.demand")}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IntroStats;
