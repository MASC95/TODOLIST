import React, {useState} from 'react'
import TareaFormulario from './TareaFormulario'
import '../stylesheet/ListaDeTareas.css'
import Tarea from './Tarea'


const ListaDeTareas = () => {
    const[tareas, setTareas]= useState([]);
    const agregarTarea = tarea =>{
        console.log("tarea agregada")
        console.log(tarea)
    }
  return (
   <>
    <TareaFormulario/>
    <div className='tarea-lista-contenedor'>
        {
           tareas.map((tarea) =>
           <Tarea
           texto={tarea.texto}
           completada={tarea.completada}
           />
           )
        }
    </div>
   </>
  )
}

export default ListaDeTareas