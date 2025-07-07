import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { dummyLeaves, leaveColors } from '../utils/constants';
import { AiOutlineArrowsAlt } from "react-icons/ai";
export default function CalendarView() {
  return (
    <div className=" ">
     
      <div className="flex items-center justify-between ">
        <select className="border border-gray-300 w-68 rounded px-2 py-1 border-b-2 border-b-black text-sm">
          <option value="all">My Calendar</option>
          {Object.keys(leaveColors).map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>

        <div className="flex items-center gap-2">
          {Object.entries(leaveColors).map(([type, color]) => (
            <div key={type} className="flex items-center gap-2">
              <div
                className="w-3 h-3  "
                style={{ backgroundColor: color }}
              ></div>
              <span className="text-sm text-gray-600">{type}</span>
              
            </div>
          ))}
          <span className='text-blue-800'>...</span>
          <AiOutlineArrowsAlt className='text-blue-900 h-12 font-extrabold ' />
        </div>
      </div>

      
      <FullCalendar 
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        height="auto"
        events={dummyLeaves.map(event => ({
          title: event.title,
          date: event.date,
          color: leaveColors[event.type],
        }))}
      />
    </div>
  );
}
