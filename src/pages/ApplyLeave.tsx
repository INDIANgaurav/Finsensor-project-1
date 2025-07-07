import LeaveForm from "../components/LeaveForm";
import { useNavigate } from "react-router-dom";
export default function ApplyLeave() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="text-blue-600 hover:underline mb-4 text-sm"
      >
        ← Go Back
      </button>
      <h1 className="text-xl font-bold mb-4">Apply for Leave</h1>
      <LeaveForm />
    </div>
  );
}
