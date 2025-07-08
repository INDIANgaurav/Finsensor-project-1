import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { dummyLeaves, leaveColors } from '../utils/constants';
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

export default function CalendarView() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <>
      <div
        className={`bg-white rounded shadow p-4 transition-all duration-300 ${
          isFullScreen
            ? 'fixed inset-0 z-50 bg-white overflow-auto'
            : ''
        }`}
      >
        {/* Header with Select and Legend */}
        <div className="flex items-center justify-between mb-2">
          <select className="border border-gray-300 w-60 rounded px-2 py-1 border-b-2 border-b-black text-sm">
            <option value="all">My Calendar</option>
            {Object.keys(leaveColors).map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          <div className="flex items-center gap-3">
            {Object.entries(leaveColors).map(([type, color]) => (
              <div key={type} className="flex items-center gap-1">
                <div
                  className="w-2 h-2 "
                  style={{ backgroundColor: color }}
                ></div>
                <span className="text-sm text-gray-600">{type}</span>
              </div>
            ))}

            <span>...</span>
            {/* Toggle Fullscreen Icon */}
            {isFullScreen ? (
              <IoMdClose
                className="text-red-600 text-xl cursor-pointer"
                onClick={() => setIsFullScreen(false)}
                title="Close Full View"
              />
            ) : (
              <AiOutlineArrowsAlt
                className="text-blue-900 text-xl cursor-pointer"
                onClick={() => setIsFullScreen(true)}
                title="Full Preview"
              />
            )}
          </div>
        </div>

        {/* FullCalendar */}
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          height="auto"
          events={dummyLeaves.map((event) => ({
            title: event.title,
            date: event.date,
            color: leaveColors[event.type],
          }))}
        />
      </div>
    </>
  );
}
