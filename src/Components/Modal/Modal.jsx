const Modal = ({children, openModal, setOpenModal, extraModalClass}) => {
  return (
    <div id='wrapper' onClick={(e)=> e.target.id === "wrapper" ? setOpenModal(false) : ""} className={`fixed inset-0 flex items-center ${openModal ? "scale-1" : "scale-0"}  justify-center bg-[#00000079]`}>
       <div className={`w-[500px] h-[300px] bg-slate-100 ${extraModalClass} rounded-md relative`}>
           {children}
       </div>
    </div>
  )
}

export default Modal