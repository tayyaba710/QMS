export interface Ticket {
  id?: string;
  title: string;
  status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED';
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  assignee?: string;
  createdAt?: string;
  updatedAt?: string;
}