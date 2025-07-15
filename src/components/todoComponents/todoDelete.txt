export default function TodoDelete({ onDelete, todoId }) {
  return (
    <button className="text-red-500 font-bold" onClick={() => onDelete(todoId)}>
      Delete
    </button>
  );
}