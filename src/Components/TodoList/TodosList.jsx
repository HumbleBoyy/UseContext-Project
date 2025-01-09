import React, { useContext, useState } from 'react'
import Modal from '../Modal/Modal'
import { Context } from '../../Context/Context'
import {PencilIcon, Trash2 } from 'lucide-react'

const TodosList = () => {
      const {todos, deleteTodo, editTodo} = useContext(Context)

      const [editModal,setEditModal] = useState(false)
      const [editInputValue, setEditInputValue] = useState()
      const [editId, setEditId] = useState(null)

      const handleEditBtnClick = (id) => {
         setEditModal(true)
         const editObj = todos.find(item => item.id == id)
         setEditId(id)
         setEditInputValue(editObj.text)
         
      }
      const handleEditSubmit = (e) => {
         e.preventDefault()
         const data = {
            text: editInputValue
         }

         editTodo(editId, data)
         setEditModal(false)
      }
  return (
    <div className='flex mx-auto justify-center'>
    <div className="w-[500px] space-y-2">
        {todos.map(item => (
            <div
                key={item.id}
                className="flex items-center gap-2 bg-slate-900/50 p-4 rounded-lg group"
                >
            <div className="flex-1">
                <p className={`text-slate-100`}>
                    {item.text}
                </p>
            </div>
            <button
                onClick={() =>  deleteTodo(item.id)}
                className="text-slate-500 p-2 rounded-md hover:text-red-400"
            >
                <Trash2 className="h-4 w-4" />
            </button>
            <button
                onClick={() => handleEditBtnClick(item.id)}
                className="text-slate-500 p-2 rounded-md hover:text-green-400"
            >
                <PencilIcon className="h-4 w-4" />
            </button>
            </div>
        ))}
        </div>
        <Modal openModal={editModal} setOpenModal={setEditModal} extraModalClass={"bg-slate-800"}>
            <form onSubmit={handleEditSubmit} className='p-24 flex justify-center items-center gap-2 flex-col px-5'>
                <input
                    value={editInputValue}
                    onChange={(e) => setEditInputValue(e.target.value)}
                    type="text"
                    name="todo"
                    placeholder="Add a task"
                    className="flex-1 w-[100%] p-3 rounded-md outline-none bg-slate-900/50 border-slate-700 text-slate-100 placeholder:text-slate-500"
                />
                <button 
                    type="submit"
                    className="bg-pink-100 w-[100%] p-3 text-center rounded-md text-slate-900 hover:bg-pink-200"
                >
                    Edit
                </button>
            </form>
        </Modal>
  
    </div>
  )
}

export default TodosList
