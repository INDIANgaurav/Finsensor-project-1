import { useNavigate } from "react-router-dom";
export default function MyApprovals() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="text-blue-600 hover:underline mb-4 text-sm"
      >
        ← Go Back
      </button>
      <h1 className="text-xl font-bold mb-4">Leaves to Approve</h1>
      <p>Here you will see leave requests pending your approval.</p>
    </div>
  );
}
