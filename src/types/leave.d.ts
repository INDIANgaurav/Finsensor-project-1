export type LeaveType = 'PTO' | 'Sick' | 'Vacation' | 'Comp';

export interface LeaveEvent {
  title: string;
  date: string;
  type: LeaveType;
}
