import { TodoItem } from "./components/TodoItem";

export default function Home() {
  const tasks: string[] = [];
  const done: string[] = [];
  return (
    <>
      <div className="bg-black w-screen h-screen flex justify-center items-center">
        <div className="bg-gray-800 w-1/2 border border-gray-600 p-4 rounded-lg">
          <div className="flex flex-col items-center justify-center">
            <p className="text-3xl">TODO</p>
            <div className="w-2/3 flex items-center justify-center gap-8 mt-4">
              <input
                className="p-2 rounded-lg bg-gray-600 w-1/3"
                type="text"
                placeholder="Enter your tasks..."
                name=""
                id=""
              />
              <button className="bg-orange-600 p-4 rounded-lg">Add Task</button>
            </div>
          </div>
          <div className="bg-gray-700 mt-9 p-0 min-h-72 flex">
            {tasks.length === 0 ? (
              <div className="self-center text-center w-full text-gray-400 text-5xl">
                Nothing to do...
              </div>
            ) : (
              tasks.map((items, index) => <TodoItem key={index} />)
            )}
          </div>
        </div>
      </div>
    </>
  );
}
