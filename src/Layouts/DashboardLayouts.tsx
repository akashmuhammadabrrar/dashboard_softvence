import { Outlet } from "react-router-dom"
import { Home, Users, History, Mail } from "lucide-react"
import { Link } from "react-router-dom"
import Navbar from "@/components/ui/navbar"

const menu = [
  { icon: Home, label: "Table De Board", to: "/tables" },
  { icon: Users, label: "Users", to: "/users" },
  { icon: History, label: "History", to: "/history" },
  { icon: Mail, label: "Requests", to: "/requests" },
]

export default function DashboardLayout() {
  return (
    <div className="grid grid-cols-[20%_80%] min-h-screen w-full">
      {/* Sidebar (plain custom layout) */}
      <aside className="bg-gray-100 p-4">
        <h2 className="text-lg font-bold mb-4">Admin Panel</h2>
        <nav className="flex flex-col gap-2">
          {menu.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="flex items-center gap-2 text-sm hover:underline"
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      {/* <Navbar></Navbar> */}
      <main className="p-6 bg-white overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}
