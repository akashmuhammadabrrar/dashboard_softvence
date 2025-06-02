import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Réparation", value: 40, color: "#3b82f6" },
  { name: "Entretien", value: 30, color: "#10b981" },
  { name: "Diagnostic", value: 20, color: "#f59e0b" },
  { name: "Autres", value: 10, color: "#6b7280" },
]

export default function DonutChartCard() {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm w-full">
      <h3 className="text-sm font-medium text-muted-foreground mb-4">Distribution des services</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            dataKey="value"
            label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
