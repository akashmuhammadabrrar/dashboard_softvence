import { Routes, Route } from "react-router-dom"
import DashboardLayout from "./Layouts/DashboardLayouts"
import Tables from "./pages/Tables"
import Usesrs from "./pages/Usesrs"

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Tables />} /> {/* Optional homepage */}
        <Route path="tables" element={<Tables />} />
        <Route path="users" element={<Usesrs />} />
      </Route>
    </Routes>
  )
}

export default App
