import React from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'
const tarea = ({id, texto, completada, completarTarea, eliminarTarea}) => {
 


  return (
   <div className={completada ? 'tarea-contenedor completada': 'tarea-contenedor'}>
    <div className='tarea-texto' onClick={()=> completarTarea(id)}>
        {texto}
    </div>
    <div className='tarea-contenedor-iconos'>
      
    <button type="button" className="btn btn-primary " style={{width:'7vw'}} onClick={()=>eliminarTarea(id)}>ELIMINAR < AiOutlineCloseCircle /></button>
    </div>
   </div>

  )
}

export default tarea