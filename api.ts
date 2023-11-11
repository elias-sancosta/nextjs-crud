import { ITask } from './types/tasks';

const baseUrl = 'http://localhost:3001';

export const getAllTasks = async (): Promise<ITask[]> => {
  const res = await fetch(`${baseUrl}/tasks`);
  const tasks = await res.json();
  return tasks;
};
