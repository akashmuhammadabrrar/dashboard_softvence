import { CreditCard, Landmark } from "lucide-react"

const bookings = [
  {
    service: "Car Repair",
    date: "Tomorrow, 10:00 AM",
    duration: "2 hours",
    amount: "$149.00",
    status: "Confirmed",
  },
  {
    service: "Car Repair",
    date: "Dec 15, 2:30 PM",
    duration: "2 hours",
    amount: "$89.00",
    status: "Pending",
  },
  {
    service: "Car Repair",
    date: "Dec 18, 9:00 AM",
    duration: "2 hours",
    amount: "$199.00",
    status: "Confirmed",
  },
]

const transactions = [
  {
    id: "TRX-2023-001",
    service: "Car Repair",
    date: "Dec 1, 2023",
    amount: "$149.00",
    status: "Completed",
    method: "Credit Card",
  },
  {
    id: "TRX-2023-002",
    service: "Car Repair",
    date: "Dec 3, 2023",
    amount: "$89.00",
    status: "Pending",
    method: "PayPal",
  },
  {
    id: "TRX-2023-003",
    service: "Car Repair",
    date: "Dec 5, 2023",
    amount: "$299.00",
    status: "Completed",
    method: "Credit Card",
  },
  {
    id: "TRX-2023-004",
    service: "Car Repair",
    date: "Dec 7, 2023",
    amount: "$199.00",
    status: "Refunded",
    method: "Debit Card",
  },
  {
    id: "TRX-2023-005",
    service: "Car Repair",
    date: "Dec 10, 2023",
    amount: "$99.00",
    status: "Completed",
    method: "Credit Card",
  },
]

const getStatusStyle = (status: string) => {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-600"
    case "Pending":
      return "bg-yellow-100 text-yellow-600"
    case "Refunded":
      return "bg-red-100 text-red-600"
    default:
      return ""
  }
}

const getMethodIcon = (method: string) => {
  switch (method) {
    case "Credit Card":
      return <CreditCard className="w-4 h-4 inline-block ml-1" />
    case "PayPal":
      return <CreditCard className="w-4 h-4 inline-block ml-1" />
    case "Debit Card":
      return <Landmark className="w-4 h-4 inline-block ml-1" />
    default:
      return null
  }
}

const History = () => {
  return (
    <div className="p-4 md:p-6 space-y-8">
        <h2 className="text-2xl">Booking History</h2>
        <hr />
      {/* Stats Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 shadow">
          <p className="text-sm text-gray-500">Active Bookings</p>
          <h2 className="text-2xl font-bold">3</h2>
          <p className="text-xs text-gray-400">Upcoming</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow">
          <p className="text-sm text-gray-500">Completed Bookings</p>
          <h2 className="text-2xl font-bold">12</h2>
          <p className="text-xs text-gray-400">This Month</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow">
          <p className="text-sm text-gray-500">Total Revenue</p>
          <h2 className="text-2xl font-bold">$1,248.00</h2>
          <p className="text-xs text-gray-400">This Month</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow">
          <p className="text-sm text-gray-500">Pending Payments</p>
          <h2 className="text-2xl font-bold">$245.00</h2>
          <p className="text-xs text-gray-400">To Collect</p>
        </div>
      </div>

      {/* Upcoming Bookings */}
      <div>
        <h3 className="text-md font-semibold mb-3">Upcoming Bookings</h3>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {bookings.map((b, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow space-y-1">
              <div className="flex justify-between">
                <div>
                  <h4 className="font-semibold">{b.service}</h4>
                  <p className="text-sm text-gray-500">{b.date}</p>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    b.status === "Confirmed"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {b.status}
                </span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{b.duration}</span>
                <span className="text-black font-medium">{b.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Transaction History */}
      <div>
        <h3 className="text-md font-semibold mb-3">Transaction History</h3>
        <div className="overflow-x-auto bg-white rounded-xl shadow">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 text-left">
              <tr>
                <th className="px-4 py-2">Transaction ID</th>
                <th className="px-4 py-2">Service</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Payment Method</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, idx) => (
                <tr
                  key={idx}
                  className="border-t border-gray-100 hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-2">{tx.id}</td>
                  <td className="px-4 py-2">{tx.service}</td>
                  <td className="px-4 py-2">{tx.date}</td>
                  <td className="px-4 py-2">{tx.amount}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`text-xs px-2 py-1 rounded ${getStatusStyle(
                        tx.status
                      )}`}
                    >
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 flex items-center gap-1">
                    {tx.method} {getMethodIcon(tx.method)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default History
