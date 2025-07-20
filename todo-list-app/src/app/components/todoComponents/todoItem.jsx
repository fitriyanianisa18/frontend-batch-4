export default function TodoItem({todo}) {
    return (
        <li className="px-4 py-2 rounded bg-blue-400 text-gray-100">
            {todo.text}
        </li>
    )
}