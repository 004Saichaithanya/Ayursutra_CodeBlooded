export default function PractitionerDashboard() {
  return (
    <div className="flex">
      <div className="w-64 bg-gray-100 p-4 h-screen">Sidebar</div>
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Practitioner Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">Manage Sessions</div>
          <div className="bg-white p-4 rounded shadow">Feedback Summary</div>
        </div>
        <div className="mt-6 bg-white p-4 rounded shadow">Analytics</div>
      </div>
    </div>
  );
}
