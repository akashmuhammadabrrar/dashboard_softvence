import { Pencil, Eye, X, Trash2, Filter, Plus } from "lucide-react";
import FilterDropdown from "@/components/ui/DropdownMenu";


const statusOptions = ["Approved", "Pending", "Rejected"];
const categoryOptions = ["IT & Software", "Business", "Design", "Legal", "Marketing"];
const locationOptions = ["New York", "London", "Paris", "Toronto", "Sydney"];
const dateRangeOptions = ["Last 7 days", "Last 30 days", "Last 6 months"];




export default function Usesrs() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Service Listings</h1>
        <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 text-sm flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add New Service
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 text-sm text-gray-600 items-center">
  <FilterDropdown label="Status" options={statusOptions} />
  <FilterDropdown label="Category" options={categoryOptions} />
  <FilterDropdown label="Location" options={locationOptions} />
  <FilterDropdown label="Date Range" options={dateRangeOptions} />
  <button className="text-orange-500 font-medium">Clear Filters</button>
</div>

      {/* Table */}
      <div className="overflow-auto border rounded-lg">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-50 border-b text-gray-700">
            <tr>
              <th className="px-4 py-3">Service Name</th>
              <th className="px-4 py-3">Provider</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Listed Date</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {[
              {
                name: "Professional Web Development",
                desc: "Custom website development services",
                provider: "John Smith",
                category: "IT & Software",
                location: "New York, USA",
                status: "Approved",
                date: "2024-01-15",
              },
              {
                name: "Business Consulting Services",
                desc: "Strategic business consulting and planning",
                provider: "Sarah Johnson",
                category: "Business",
                location: "London, UK",
                status: "Pending",
                date: "2024-01-14",
              },
              {
                name: "Interior Design Services",
                desc: "Complete interior design and decoration",
                provider: "Michael Brown",
                category: "Design",
                location: "Paris, France",
                status: "Rejected",
                date: "2024-01-13",
              },
              {
                name: "Legal Consultation",
                desc: "Professional legal advice and consultation",
                provider: "Emily Davis",
                category: "Legal",
                location: "Toronto, Canada",
                status: "Approved",
                date: "2024-01-12",
              },
              {
                name: "Marketing Strategy",
                desc: "Digital marketing and brand strategy",
                provider: "David Wilson",
                category: "Marketing",
                location: "Sydney, Australia",
                status: "Pending",
                date: "2024-01-11",
              },
            ].map((service, idx) => (
              <tr key={idx} className="bg-white hover:bg-gray-50">
                <td className="px-4 py-3">
                  <div className="font-medium">{service.name}</div>
                  <div className="text-gray-500 text-xs">{service.desc}</div>
                </td>
                <td className="px-4 py-3 font-semibold">{service.provider}</td>
                <td className="px-4 py-3">{service.category}</td>
                <td className="px-4 py-3">{service.location}</td>
                <td className="px-4 py-3">
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${
                      service.status === "Approved"
                        ? "bg-green-100 text-green-600"
                        : service.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {service.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-500">{service.date}</td>
                <td className="px-4 py-3 space-x-2">
                  <Pencil className="inline w-4 h-4 cursor-pointer text-gray-500 hover:text-blue-600" />
                  <Eye className="inline w-4 h-4 cursor-pointer text-gray-500 hover:text-green-600" />
                  <X className="inline w-4 h-4 cursor-pointer text-gray-500 hover:text-orange-600" />
                  <Trash2 className="inline w-4 h-4 cursor-pointer text-gray-500 hover:text-red-600" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {/* <div className="flex items-center justify-between text-sm text-gray-600 pt-2">
        <span>
          Show{" "}
          <select className="border rounded px-2 py-1 ml-1 text-sm">
            <option>10</option>
          </select>{" "}
          entries
        </span>
        <span className="flex items-center gap-2">
          <span>Showing 1 to 5 of 5 entries</span>
          <button className="bg-orange-500 text-white rounded px-2 py-1 text-xs">1</button>
        </span>
      </div> */}
    </div>
  );
}
