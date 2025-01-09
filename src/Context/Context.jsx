import { createContext, useState } from "react";

export const Context = createContext()

export const TodoContext = ({children}) => {

    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])

    const saveTodo = (data) => setTodos([...todos, data])


    const deleteTodo = (id) => {
        const deleteIndex = todos.findIndex(item => item.id == id)
        todos.splice(deleteIndex, 1)
        setTodos([...todos])
    }

    const editTodo = (id, data) => {
        const editData = todos.find(item => item.id == id)
        editData.text = data.text
        setTodos([...todos])
    }



    localStorage.setItem("todos", JSON.stringify(todos))

    return(
    <Context.Provider value={{todos, setTodos, saveTodo, deleteTodo, editTodo}}>
        {children}
    </Context.Provider>
    )

}

