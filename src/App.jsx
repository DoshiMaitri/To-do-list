import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [Todos,setTodos]=useState([])//empty array bcoz if no todo present in the array then we will know its empty
  const addTodo = (todo) => {
    // setTodos(todo) - this will replace all the todos in the array to the new todo,
    //thn only the new todo will be present in the array

    // so we use this method 
    setTodos((prev)=>[{id:Date.now(),...todo},...prev]) 
    // { id, todo }	{ id, todo: { title, completed } } ← ❌ nested
    // { id, ...todo }	{ id, title, completed } ← ✅ flat, correct

  }
  const updateTodo = (id,todo) =>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) =>{
    // what filter does is that if the condition is true then it will add else it will not
    setTodos((prev)=>prev.filter((prevtodo)=>(prevtodo.id!==id)))
  }

  const toggleComplete = (id) =>{
    setTodos((prev)=>prev.map((prevtodo)=>(prevtodo.id)===id?{...prevtodo,completed: !prevtodo.completed}:prevtodo))
  }

  // local storage takes string and gives string 
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0){
      setTodos(todos)
    }
  
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(Todos))
  },[Todos])

  return (
    <TodoProvider value={{Todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8 w-full">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* key is not for users, it's for React (the computer) to understand the structure of a list.? */}
            {Todos.map((todo)=>(
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
      </div>
    </div>
    </TodoProvider>
  )
}

export default App
