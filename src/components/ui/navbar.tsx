// src/components/ui/navbar.tsx
import { Bell, Globe, User } from "lucide-react"

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
      <input
        type="text"
        placeholder="Search..."
        className="border rounded px-3 py-2 w-1/3"
      />

      <div className="flex items-center gap-4">
        <Bell className="w-5 h-5" />
        <Globe className="w-5 h-5" />
        <div className="flex items-center gap-2">
          <User className="w-5 h-5" />
          <span>Admin</span>
        </div>
      </div>
    </div>
  )
}
