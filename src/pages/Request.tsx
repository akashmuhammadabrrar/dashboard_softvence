
const Request = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 p-4 md:p-6 w-full bg-gray-50 min-h-screen">
      {/* Left Panel */}
      <div className="space-y-6">
        {/* Request Summary */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
              <h2 className="text-lg font-semibold">Request #RF-2024-0123</h2>
              <p className="text-sm text-muted-foreground">Submitted on Jan 23, 2024 at 10:45 AM</p>
            </div>
            <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Pending Review</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 mt-6 gap-4 text-sm">
            <div>
              <h4 className="font-semibold">Customer</h4>
              <p>Sarah Johnson<br />ID: CUS-789012</p>
            </div>
            <div>
              <h4 className="font-semibold">Professional</h4>
              <p>Michael Brown<br />ID: PRO-345678</p>
            </div>
          </div>

          <hr className="my-4" />

          <p className="text-sm text-muted-foreground">Request Amount</p>
          <p className="text-2xl font-bold">$249.99</p>
        </div>

        {/* Select Action */}
        <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
          <div>
            <label className="block text-sm font-medium">Select Action</label>
            <select className="mt-1 w-full border border-gray-300 rounded p-2">
              <option>Select an action</option>
              <option>Approve</option>
              <option>Reject</option>
              <option>Request More Info</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Add a note (optional)</label>
            <textarea
              rows={4}
              placeholder="Enter your note here..."
              className="mt-1 w-full border border-gray-300 rounded p-2 resize-none"
              maxLength={500}
            ></textarea>
            <div className="text-right text-xs text-muted-foreground mt-1">0/500 characters</div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-3 rounded text-sm">
            <strong>Action Preview:</strong> Select an action to see the preview and potential impact.
          </div>

          <div className="flex gap-3">
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">Confirm Action</button>
            <button className="text-gray-600">Cancel</button>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <aside className="space-y-6">
        {/* Customer History */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-sm font-semibold mb-3">Customer History</h3>
          <ul className="space-y-1 text-sm">
            <li>Total Requests: <strong>5</strong></li>
            <li>Approved Refunds: <strong>3</strong></li>
            <li>Avg Response Time: <strong>2.4 days</strong></li>
          </ul>
        </div>

        {/* Professional Rating */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-sm font-semibold mb-3">Professional Rating</h3>
          <ul className="space-y-1 text-sm">
            <li>Overall Rating: <strong>4.8 ⭐</strong></li>
            <li>Response Rate: <strong>98%</strong></li>
            <li>On-time Completion: <strong>95%</strong></li>
          </ul>
        </div>

        {/* Similar Cases */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-sm font-semibold mb-3">Similar Cases</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between">
              <span>RF-2024-0120<br /><span className="text-xs text-muted-foreground">$149.99</span></span>
              <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">Approved</span>
            </li>
            <li className="flex justify-between">
              <span>RF-2024-0120<br /><span className="text-xs text-muted-foreground">$149.99</span></span>
              <span className="bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded">Pending</span>
            </li>
            <li className="flex justify-between">
              <span>RF-2024-0120<br /><span className="text-xs text-muted-foreground">$149.99</span></span>
              <span className="bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded">Pending</span>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Request;