 import type { LeaveEvent } from "../types/leave";

export const leaveColors = {
  PTO: '#3b82f6',        
  Sick: '#22c55e',      
  Vacation: '#f59e0b',  
  Comp: '#a855f7',       
};

export const dummyLeaves: LeaveEvent[] = [
  { title: 'Umesh ', date: '2025-07-02', type: 'PTO' },
  { title: 'Gaurav ', date: '2025-07-10', type: 'Sick' },
  { title: 'Aryan ', date: '2025-07-20', type: 'Vacation' },
];
