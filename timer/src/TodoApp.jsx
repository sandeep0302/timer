import React, { useState, useEffect } from 'react';
import { Trash2, Edit2, Check, X, Calendar, Bell } from 'lucide-react';

export const TodoApp = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [newTodo, setNewTodo] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: newTodo.trim(),
          completed: false,
          createdAt: new Date().toISOString(),
          dueDate: null
        }
      ]);
      setNewTodo('');
    }
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditValue(todo.text);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditValue('');
  };

  const saveEdit = (id) => {
    if (editValue.trim()) {
      setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, text: editValue.trim() } : todo
      ));
      setEditingId(null);
      setEditValue('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Todo List</h1>
      
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add
          </button>
        </div>
      </form>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('active')}
          className={`px-4 py-2 rounded ${filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
        >
          Active
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-4 py-2 rounded ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
        >
          Completed
        </button>
      </div>

      <div className="space-y-3">
        {filteredTodos.map(todo => (
          <div
            key={todo.id}
            className={`flex items-center gap-3 p-3 bg-gray-50 rounded-lg ${
              todo.completed ? 'opacity-75' : ''
            }`}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
              className="w-5 h-5 text-blue-500"
            />
            
            {editingId === todo.id ? (
              <div className="flex-1 flex items-center gap-2">
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className="flex-1 px-3 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoFocus
                />
                <button
                  onClick={() => saveEdit(todo.id)}
                  className="p-1 text-green-500 hover:text-green-600"
                >
                  <Check size={18} />
                </button>
                <button
                  onClick={cancelEditing}
                  className="p-1 text-red-500 hover:text-red-600"
                >
                  <X size={18} />
                </button>
              </div>
            ) : (
              <>
                <span
                  className={`flex-1 ${
                    todo.completed ? 'line-through text-gray-500' : ''
                  }`}
                >
                  {todo.text}
                </span>
                <span className="text-sm text-gray-500">
                  {new Date(todo.createdAt).toLocaleDateString()}
                </span>
                <button
                  onClick={() => startEditing(todo)}
                  className="p-1 text-gray-500 hover:text-gray-700"
                >
                  <Edit2 size={18} />
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="p-1 text-red-500 hover:text-red-600"
                >
                  <Trash2 size={18} />
                </button>
              </>
            )}
          </div>
        ))}
      </div>

      {todos.length === 0 && (
        <div className="text-center py-6 text-gray-500">
          No todos yet. Add one above!
        </div>
      )}
    </div>
  );
};

export default TodoApp;