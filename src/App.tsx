import { Routes, Route } from "react-router-dom"
import DashboardLayout from "./Layouts/DashboardLayouts"
import Tables from "./pages/Tables"
import Usesrs from "./pages/Usesrs"

import History from "./pages/History"
import Request from "./pages/Request"

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Tables />} /> {/* Optional homepage */}
        <Route path="tables" element={<Tables />} />
        <Route path="users" element={<Usesrs />} />
        <Route path="/history" element={<History></History>}/>
        <Route path="/requests" element={<Request></Request>}/>
      </Route>
    </Routes>
  )
}

export default App
