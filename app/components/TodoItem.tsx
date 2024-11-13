interface TodoItem {
  task: string;
}
export function TodoItem({ task }: TodoItem) {
  return <>
    <div className="border-yellow-600 bg-yellow-700 text-yellow-200 rounded-lg p-2 text-2xl">
      <div>
        {task}
      </div>
      <div></div>
    </div>
  </>;
}
