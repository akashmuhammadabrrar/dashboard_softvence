
interface StatsCardProps {
  label: string
  value: string | number
  change: string
  changePositive?: boolean
}

const StatsCard = ({
  label,
  value,
  change,
  changePositive = true,
}: StatsCardProps) => {
  return (
    <div className="rounded-xl bg-white p-4 shadow-sm border w-full">
      <p className="text-sm text-muted-foreground">{label}</p>
      <div className="flex items-center justify-between mt-2">
        <h2 className="text-xl font-semibold">{value}</h2>
        <span className={`text-sm ${changePositive ? "text-green-500" : "text-red-500"}`}>
          {change}
        </span>
      </div>
    </div>
  )
}

export default StatsCard
