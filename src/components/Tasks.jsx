import NewTask from "./NewTask.jsx";

export default function Task({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4 ">Task</h2>
      <NewTask onAdd={onAdd} />
      {tasks.lenght === 0 && (
        <p className="text-stone-800 mb-4">
          Questo progetto non ha ancora nessun Task
        </p>
      )}

      {tasks.length >0 && (
         <ul className="p-4 mt-8 rounded-md bg-stone-100">
            {tasks.map(task => (
                <li key={task.id} className="flex justify-between my-4">
                    <span>{task.text}</span>
                    <button onClick={()=>onDelete(task.id)} className="text-stone-700 hover:text-red-500">Clear</button>
                </li>
            ))}
         </ul>
      )}

     
    </section>
  );
}
