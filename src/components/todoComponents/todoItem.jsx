import TodoEdit from '@/components/todoComponents/todoEdit';
import TodoDelete from '@/components/todoComponents/todoDelete';

export default function TodoItem({ todo, toggleDone, deleteTodo, startEdit, saveEdit, isEditing, editText, setEditText }) {
  return (
    <li className="flex items-center gap-2 px-4 py-2 rounded bg-white shadow">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleDone(todo.id)}
        className="accent-green-500"
      />
      {isEditing ? (
        <TodoEdit
          editId={todo.id}
          editText={editText}
          setEditText={setEditText}
          saveEdit={saveEdit}
        />
      ) : (
        <>
          <span
            className={`flex-grow cursor-pointer ${todo.done ? 'line-through text-gray-400' : ''}`}
            onClick={() => toggleDone(todo.id)}
          >
            {todo.text}
          </span>
          <button className="text-yellow-500 font-bold" onClick={() => startEdit(todo.id, todo.text)}>Edit</button>
        </>
      )}
      <TodoDelete onDelete={deleteTodo} todoId={todo.id} />
    </li>
  );
}