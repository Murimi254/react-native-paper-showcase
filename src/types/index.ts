export type TaskStatus = "done" | "todo";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: number;
}
