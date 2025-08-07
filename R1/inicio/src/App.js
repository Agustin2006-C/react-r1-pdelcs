import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Holamundo() {
  return <h1>Hola Mundo</h1>;
}

function Presentacion(props) {
  return (
    <div className="tarjeta">
      <img src={props.imagen} alt={`${props.nombre} ${props.apellido}`} width="150" />
      <h2>{props.nombre} {props.apellido}</h2>
      <p>{props.profesion}</p>
    </div>
  );
}

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h3>Contador: {contador}</h3>
      <div className="botones-centro">
        <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        <button onClick={() => setContador(contador - 1)}>Decrementar</button>
      </div>
    </div>
  );
}


function Listatareas() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    if (nuevaTarea.trim() === '') return;

    const nueva = {
      id: Date.now(),
      texto: nuevaTarea,
      completada: false
    };

    setTareas([...tareas, nueva]);
    setNuevaTarea('');
  };

  const marcarComoCompletada = (id) => {
    const tareasActualizadas = tareas.map(tarea =>
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    );
    setTareas(tareasActualizadas);
  };

  return (
    <div>
      <h3>Lista de Tareas</h3>
      <input 
        type="text" 
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Escribe una tarea..."
      />
      <div className='boton-lista'> 
      <button onClick={agregarTarea}>Agregar</button>
      </div>
      
      <ul>
        {tareas.map(tarea => (
          <li 
            key={tarea.id}
            style={{ 
              textDecoration: tarea.completada ? 'line-through' : 'none',
              cursor: 'pointer'
            }}
            onClick={() => marcarComoCompletada(tarea.id)}
          >
            {tarea.texto}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [enviado, setEnviado] = useState(false);

  const manejarEnvio = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del form (recargar)
    if (nombre.trim() !== '') {
      setEnviado(true);
    }
  };

  return (
    <div>
      <h3>Formulario de Bienvenida</h3>

      {enviado ? (
        <h4>¡Bienvenido, {nombre}!</h4>
      ) : (
        <form onSubmit={manejarEnvio}>
          <input 
            type="text" 
            placeholder="Ingresa tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
}


function App() {
  return (
    <div>
      <h2>React 1</h2>
      <Holamundo />
      <Presentacion 
        nombre="Agustin"
        apellido="Contreras"
        profesion="Desarrollador Web"
        imagen="/foto1.png"
      />
      <Contador />
      <Listatareas />
      <Formulario />
    </div>
  );
}

export default App;
