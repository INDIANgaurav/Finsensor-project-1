import LeaveCard from "../components/LeaveCard";
import LeaveForm from "../components/LeaveForm";
import CalendarView from "../components/Calenderview";
import { useNavigate } from "react-router-dom";

import { MdOutlineStickyNote2 } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { FaUserPlus } from "react-icons/fa6";
export default function Dashboard() {
  const navigate = useNavigate();

  return (
   <div className=" -m-2  ">

      {/* Main Content Area */}
      <div className="   ">
        {/* Top Leave Cards */}
        <div className="w-fit mb-2">
          <div className="grid grid-cols-2  sm:grid-cols-4 gap-1">
            <LeaveCard type="PTO" used={5} total={10} />
            <LeaveCard type="Sick" used={3} total={5} />
            <LeaveCard type="Vacation" used={0} total={0} />
            <LeaveCard type="Comp" used={0} total={0} />
          </div>
        </div>

        {/* Top Tabs */}
        <div className="flex gap-4 text-sm font-semibold justify-start items-center  pb-2">
          <button
            onClick={() => navigate("/apply")}
            className="flex items-center gap-1 pb-1 border-b-2 border-blue-600 text-blue-600"
          >
            <CiCirclePlus size={18} />
            Apply Leave
          </button>
          <button
            onClick={() => navigate("/my-leave")}
            className="flex items-center gap-1 hover:text-blue-600 hover:border-blue-600 pb-1 border-b-2 border-transparent"
          >
            <MdOutlineStickyNote2 size={18} />
            My Leaves
          </button>
          <button
            onClick={() => navigate("/my-approvals")}
            className="flex items-center gap-1 hover:text-blue-600 hover:border-blue-600 pb-1 border-b-2 border-transparent"
          >
            <FaUserPlus size={18} />
            My Approvals
          </button>
        </div>

        {/* Form and Calendar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* Form Section */}

          <LeaveForm />

          {/* Calendar Section */}

          <CalendarView />
        </div>
      </div>
    </div>
  );
}
