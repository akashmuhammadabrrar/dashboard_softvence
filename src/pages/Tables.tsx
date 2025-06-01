
import StatsCard from "@/components/ui/StatsCard"

const Tables = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard label="Utilisateurs actifs" value="12,458" change="+12%" />
        <StatsCard label="Professionnels vérifiés" value="842" change="+5%" />
        <StatsCard label="Réservations du jour" value="156" change="+8%" />
        <StatsCard label="Revenu mensuel" value="45,890 €" change="+15%" />
      </div>
    </div>
  )
}

export default Tables
