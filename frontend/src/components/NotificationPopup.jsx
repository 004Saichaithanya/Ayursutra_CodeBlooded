export default function NotificationPopup({ message }) {
  return (
    <div className="fixed top-4 right-4 bg-yellow-200 border-l-4 border-yellow-600 text-yellow-800 p-4 rounded shadow">
      {message}
    </div>
  );
}
