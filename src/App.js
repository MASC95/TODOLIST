import freeCodecampLogo from './imagenes/freecodecamp-logo.svg';
import './App.css';
import './stylesheet/tarea.css'
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='row'>
      <div className='col-3'>
      
      </div>
      <div className='col-8'>
    <div className="aplicacion-tareas">
      <div className='row'>
      <div className='freecodecamp-logo-contenedor d-inline'>
        <img src={freeCodecampLogo} className="freecodecamp-logo" alt='LOGO-FREECODECAMP' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Tareas a realizar/Mis Tareas</h1>
        <ListaDeTareas/>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default App;