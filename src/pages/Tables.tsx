
import DonutChartCard from "@/components/ui/DonutChartCard"
import LineChartCard from "@/components/ui/LineChartCard"
import StatsCard from "@/components/ui/StatsCard"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const Tables = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard label="Utilisateurs actifs" value="12,458" change="+12%" />
        <StatsCard label="Professionnels vérifiés" value="842" change="+5%" />
        <StatsCard label="Réservations du jour" value="156" change="+8%" />
        <StatsCard label="Revenu mensuel" value="45,890 €" change="+15%" />
      </div>
      {/* charts */}
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <LineChartCard />
      <DonutChartCard />
    </div>

    {/* table data */}
    <h2 className="text-2xl">Recent Activity</h2>

    <Table>
 
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Date</TableHead>
      <TableHead>Type</TableHead>
      <TableHead>Users</TableHead>
      <TableHead >Actions</TableHead>
      <TableHead >Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="text-gray-600">23 Jan 2025</TableCell>
      <TableCell className="text-gray-600">Reservation</TableCell>
      <TableCell className="text-gray-600">Tom Cruise</TableCell>
      <TableCell className="text-gray-600" >Submission Document</TableCell>
      <TableCell className="text-gray-600">Complete</TableCell>
    </TableRow>
  </TableBody>
</Table>

    </div>
  )
}

export default Tables
