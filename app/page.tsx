import AddTask from './_components/AddTask';
import TodoList from './_components/TodoList';
import { getAllTasks } from '@/api';

export default async function Home() {
  const tasks = await getAllTasks();
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Todo List App</h1>
        <AddTask />
      </div>
      <TodoList tasks={tasks} />
    </main>
  );
}
