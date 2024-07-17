
import { useEffect, useState } from 'react'
// import './App.css'
import TodoForm from './components/TodoForm'
import { TodoProvider, useTodo, TodoContext } from './contexts'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    // adding todo the array and in the first
    // setTodos((prevTodos) => [todo, ...prevTodos ])
    // setTodos((prevTodos) => [ ...prevTodos, todo ])
    
    // as todo is object having id, todoMsg, and  
    // completed we need to pass that
    
    setTodos((prevTodos) => [{id: Date.now(), ...todo }, ...prevTodos ])
  }

  const updateTodo = (id, todo) => {
    setTodos( (prev) => prev.map((prevTodo) => (prevTodo.id === id ) ? todo: prevTodo) )

    // prev.map((eachVal)=> {
    //   if(eachVal.id === id){
    //     todo  
    //   }
    // })
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((eachTodo) => eachTodo.id !== id ))
  }

  const toggleComplete = (id) => {
  //  setTodos( (prev) => prev.map( (prevTodo) => 
  //   prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo )) 
   setTodos( (prev) => prev.map( (prevTodo) => {
    if(prevTodo.id === id){
      return { ...prevTodo, completed: !prevTodo.completed }
    }
    else{
      return prevTodo
    }
   } ))
  }
  useEffect(() => {
    const todos =  JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0) {
      setTodos(todos)
    }

  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos) )
  }, [todos])

  return (
    // Destructuring the object of TodoContext
    <TodoProvider value= {{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map( (todo) => {
              return (
                <div key={todo.id}  className='w-full' >
                  <TodoItem todo={todo} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
