import { Outlet, useLocation, Link } from "react-router-dom"
import { Home, Users, History, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const menu = [
  { icon: Home, label: "Table De Board", to: "/tables" },
  { icon: Users, label: "Users", to: "/users" },
  { icon: History, label: "History", to: "/history" },
  { icon: Mail, label: "Requests", to: "/requests" },
]

export default function DashboardLayout() {
  const location = useLocation()

  return (
    <div className="grid grid-cols-[20%_80%] min-h-screen w-full">
      {/* Sidebar */}
      <aside className="bg-black p-4">
        <h2 className="text-lg text-white font-bold mb-4">Admin Panel</h2>
        <nav className="flex flex-col gap-2">
          {menu.map((item) => {
            const isActive = location.pathname === item.to

            return (
              <Link key={item.label} to={item.to}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start gap-2 ${
                    isActive
                      ? "bg-amber-400 text-white hover:bg-amber-400"
                      : "text-white hover:bg-zinc-800"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Button>
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* Main content */}
      <main className="p-6 bg-white overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}
