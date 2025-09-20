export default function SessionCard({ session }) {
  return (
    <div className="border p-4 rounded shadow bg-white">
      <h3 className="font-bold">{session.title}</h3>
      <p>{session.date}</p>
      <p className="text-sm text-gray-600">{session.notes}</p>
    </div>
  );
}
