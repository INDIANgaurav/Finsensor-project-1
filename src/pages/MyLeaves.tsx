import { useNavigate } from "react-router-dom";
export default function MyLeaves() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="text-blue-600 hover:underline mb-4 text-sm"
      >
        ← Go Back
      </button>
      <h1 className="text-xl font-bold mb-4">My Leaves</h1>
      <p>You can see all the leaves you have applied for here.</p>
    </div>
  );
}
