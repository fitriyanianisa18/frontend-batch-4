export default function TodoEdit ({startEdit, saveEdit, editId, editText, setEditText}) {
    return (
        <div className="flex items-center gap-2">
        <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') saveEdit(editId); }}
            placeholder="Edit Task"
            className="flex-grow px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
        />
        <button onClick={() => saveEdit(editId)} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Save</button>
        </div>
    );    
}