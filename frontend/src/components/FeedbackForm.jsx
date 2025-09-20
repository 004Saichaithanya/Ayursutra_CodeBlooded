export default function FeedbackForm() {
  return (
    <form className="flex flex-col gap-3">
      <textarea placeholder="Your feedback..." className="border p-2 rounded"/>
      <select className="border p-2 rounded">
        <option>1 - Poor</option>
        <option>2 - Fair</option>
        <option>3 - Good</option>
        <option>4 - Very Good</option>
        <option>5 - Excellent</option>
      </select>
      <button className="bg-green-600 text-white py-2 rounded">Submit</button>
    </form>
  );
}
