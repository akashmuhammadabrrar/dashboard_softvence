import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts"

const data = [
  { month: "Jan", reservations: 60 },
  { month: "Fév", reservations: 75 },
  { month: "Mar", reservations: 85 },
  { month: "Avr", reservations: 78 },
  { month: "Mai", reservations: 92 },
  { month: "Juin", reservations: 98 },
]

export default function LineChartCard() {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm w-full">
      <h3 className="text-sm font-medium text-muted-foreground mb-4">Réservations mensuelles</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="reservations" stroke="#3b82f6" strokeWidth={2} dot />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
