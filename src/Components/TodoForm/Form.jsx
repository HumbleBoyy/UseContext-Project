import React, { useContext } from 'react'
import { Context } from '../../Context/Context'

const Form = () => {
    const {todos, saveTodo, setTodos} = useContext(Context)

    const handleTodoSubmit = (e) => {
        e.preventDefault()
        const data = {
            id:todos.length ? todos[todos.length - 1].id + 1 : 1,
            text:e.target.todo.value
        }
        setTodos([...todos, data])
        e.target.reset()
    }
  return (
    <div className="w-[500px] flex flex-col justify-center items-center mx-auto">
            <h1 className="text-6xl font-light text-pink-100 mb-8">
            Just do it.
            </h1>
        
        <form onSubmit={handleTodoSubmit} className="w-full max-w-md flex gap-2 mb-8">
          <input
            type="text"
            name="todo"
            placeholder="Add a task"
            className="flex-1 p-3 rounded-md outline-none bg-slate-900/50 border-slate-700 text-slate-100 placeholder:text-slate-500"
          />
          <button 
            type="submit"
            className="bg-pink-100 w-[100px] text-center rounded-md text-slate-900 hover:bg-pink-200"
          >
            I Got This!
          </button>
        </form>
      </div>
    
  )
}

export default Form
