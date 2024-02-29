import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './Contexts'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'

// both todos and todo are different todos apna useState wla hai and todo --> todos ek andar ka ek todo hai mtlb wo useState wala nahi hai yaad rakhna jo object hai to usme ham for map , each ye sab laga sakte hai


function App() {
  const [todos,setTodos] = useState([])

  const addTodo = (todo) =>{
    setTodos((prev)=>[{id:Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id,todo) =>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id === id ? todo: prevTodo )))
  }

  // oldTodo.map((eachVal)=>{   <-- Understand this
  //   if(eachVal.id === id){
  //     todo
  //   }
  // })


  const deleteTodo = (id) => {
    setTodos((oldTodo) => oldTodo.filter((oldTodo)=>oldTodo.id !== id ))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo, completed : !prevTodo.completed } : prevTodo))
  } 

  useEffect(()=>{
  const todos =  JSON.parse(localStorage.getItem("todos"))

  if(todos && todos.length){
    setTodos(todos)
  }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  })




  return (
    <TodoProvider value={ {todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                      {todos.map((todo) => (
                        <div key={todo.id}
                        className='w-full'>
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
