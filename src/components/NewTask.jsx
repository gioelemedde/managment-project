import { useState } from "react";
export default function NewTask({onAdd}) {
  const [enterTask, setEnterTask] = useState('');

  function handleChange(event) {
    setEnterTask(event.target.value);
  }

  function hadleClick(){
    onAdd(enterTask)
    setEnterTask('');
  }
  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handleChange}
        type="text"
        className="w-64 px-2 py-2 rounded-sm bg-stone-200"
        value={enterTask}
      />
      <button onClick={hadleClick} className="text-stone-700 hover:text-stone-950">Add Task</button>
    </div>
  );
}
