import React, { useState } from 'react'

interface Todo {
  id: number
  text: string
  completed: boolean
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Learn TypeScript', completed: true },
    { id: 2, text: 'Explore CodeValid', completed: false }
  ])
  const [inputText, setInputText] = useState('')
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputText.trim()) return
    const newTodo: Todo = {
      id: Date.now(),
      text: inputText.trim(),
      completed: false
    }
    setTodos([...todos, newTodo])
    setInputText('')
  }

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id))
  }

  const clearCompleted = () => {
    setTodos(todos.filter((t) => !t.completed))
  }

  const filteredTodos = todos.filter((t) => {
    if (filter === 'active') return !t.completed
    if (filter === 'completed') return t.completed
    return true
  })

  return (
    <div style={{
      width: '100%',
      maxWidth: '450px',
      margin: '20px',
      padding: '30px',
      background: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1 style={{
        fontSize: '28px',
        fontWeight: '700',
        textAlign: 'center',
        margin: '0 0 20px 0',
        color: '#1f2937'
      }}>Task Manager</h1>
      
      {/* Add Todo Form */}
      <form onSubmit={handleAddTodo} style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <input
          id="todo-input"
          type="text"
          placeholder="What needs to be done?"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          style={{
            flex: 1,
            padding: '12px 16px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '15px',
            outline: 'none'
          }}
        />
        <button
          id="add-todo-btn"
          type="submit"
          style={{
            padding: '12px 20px',
            background: '#2563eb',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          Add
        </button>
      </form>

      {/* Todo List */}
      <ul id="todo-list" style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0' }}>
        {filteredTodos.map((todo, index) => (
          <li
            key={todo.id}
            id={`todo-item-${index}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 16px',
              borderBottom: '1px solid #f3f4f6',
              gap: '12px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <input
                id={`todo-checkbox-${index}`}
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                style={{ width: '18px', height: '18px', cursor: 'pointer' }}
              />
              <span
                id={`todo-text-${index}`}
                style={{
                  fontSize: '16px',
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  color: todo.completed ? '#9ca3af' : '#1f2937'
                }}
              >
                {todo.text}
              </span>
            </div>
            <button
              id={`delete-todo-btn-${index}`}
              onClick={() => deleteTodo(todo.id)}
              style={{
                background: 'none',
                border: 'none',
                color: '#ef4444',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Footer Controls */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '10px',
        paddingTop: '15px',
        borderTop: '1px solid #e5e7eb',
        color: '#6b7280',
        fontSize: '14px'
      }}>
        <span id="todo-count">
          {todos.filter((t) => !t.completed).length} items left
        </span>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '6px' }}>
          <button
            id="filter-all"
            onClick={() => setFilter('all')}
            style={{
              padding: '4px 8px',
              border: '1px solid ' + (filter === 'all' ? '#2563eb' : 'transparent'),
              borderRadius: '4px',
              background: 'none',
              cursor: 'pointer',
              color: filter === 'all' ? '#2563eb' : '#6b7280'
            }}
          >
            All
          </button>
          <button
            id="filter-active"
            onClick={() => setFilter('active')}
            style={{
              padding: '4px 8px',
              border: '1px solid ' + (filter === 'active' ? '#2563eb' : 'transparent'),
              borderRadius: '4px',
              background: 'none',
              cursor: 'pointer',
              color: filter === 'active' ? '#2563eb' : '#6b7280'
            }}
          >
            Active
          </button>
          <button
            id="filter-completed"
            onClick={() => setFilter('completed')}
            style={{
              padding: '4px 8px',
              border: '1px solid ' + (filter === 'completed' ? '#2563eb' : 'transparent'),
              borderRadius: '4px',
              background: 'none',
              cursor: 'pointer',
              color: filter === 'completed' ? '#2563eb' : '#6b7280'
            }}
          >
            Completed
          </button>
        </div>

        <button
          id="clear-completed-btn"
          onClick={clearCompleted}
          style={{
            background: 'none',
            border: 'none',
            color: '#6b7280',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          Clear completed
        </button>
      </div>
    </div>
  )
}
