import { CheckIcon, TrashIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface Tasks {
  id: number;
  value: string;
  isCompleted: boolean;
}

interface TodoItem {
  task: Tasks;
  deleteItem: (id: number) => void;
  checkItem: (id: number) => void;
}
export function TodoItem({ task, deleteItem, checkItem }: TodoItem) {
  function deleteTaskHandler() {
    deleteItem(task.id);
  }

  function checkHandler() {
    checkItem(task.id);
  }

  return (
    <>
      <div
        className={`border-yellow-600 ${
          task.isCompleted ? "bg-green-600 text-white line-through" : "bg-gray-400 text-black"
        }  rounded-lg p-2 text-2xl flex justify-between transition-colors`}
      >
        <div>{task.value}</div>
        <div className="flex items-center pr-5 justify-between w-1/6">
          <div
            onClick={checkHandler}
            className={`flex ${task.isCompleted ? "bg-orange-600" : "bg-green-600"} px-2 py-1 rounded-lg`}
          >
            {task.isCompleted ? (
              <XMarkIcon className="h-6 w-6 text-white cursor-pointer" />
            ) : (
              <CheckIcon className="h-6 w-6 text-white cursor-pointer" />
            )}
          </div>
          <div
            onClick={deleteTaskHandler}
            className="flex bg-red-600 px-2 py-1 rounded-lg"
          >
            <TrashIcon className="h-6 w-6 text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
}
