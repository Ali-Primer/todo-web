"use client";
import { KeyboardEvent, ChangeEvent, useState, useEffect } from "react";
import { TodoItem } from "./components/TodoItem";

export default function Home() {
  const [value, setValue] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);

  function changeValue(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function getTask() {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(tasks);
  }

  useEffect(() => {
    getTask();
  }, []);

  function addTask() {
    if (value.trim() !== "") {
      const existTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      const updatedTasks = [...existTasks, value];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setValue("");
      getTask();
    }
  }

  function addTaskWithKeyboard(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      addTask();
    }
  }

  return (
    <>
      <div className="bg-black w-screen h-screen flex justify-center items-center box-border">
        <div className="bg-gray-800 w-1/2 border border-gray-600 p-4 rounded-lg">
          <div className="flex flex-col items-center justify-center">
            <p className="text-3xl">TODO</p>
            <div className="w-2/3 flex items-center justify-center gap-8 mt-4">
              <input
                className="p-3 rounded-lg bg-gray-600 w-1/3"
                type="text"
                placeholder="Enter your tasks..."
                name=""
                id=""
                value={value}
                onChange={changeValue}
                onKeyDown={addTaskWithKeyboard}
              />
              <button
                onClick={addTask}
                className="bg-orange-600 p-3 rounded-lg"
              >
                Add Task
              </button>
            </div>
          </div>
          <div className="bg-gray-700 mt-9 gap-4 min-h-72 flex flex-col p-3">
            {tasks.length === 0 ? (
              <div className="self-center text-center w-full text-gray-400 text-5xl">
                Nothing to do...
              </div>
            ) : (
              tasks.map((task, index) => <TodoItem task={task} key={index} />)
            )}
          </div>
        </div>
      </div>
    </>
  );
}
