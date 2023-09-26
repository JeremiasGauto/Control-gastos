import { useState } from "react";
import Mensaje from "./Mensaje";
import cerrarBtn from "../assets/cerrar.svg";

function Modal({ setModal, animarModal, setAnimarModal, guardarGasto }) {
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria] = useState('');
    const [mensaje, setMensaje] = useState('');

  const ocultarModal = () => {
    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
    };
    

    const handleSubmit = e => {
        e.preventDefault();
        if ([nombre, cantidad, categoria].includes('')) {
            setMensaje('Todos los campos son obligatorios')

            setTimeout(() => {
                setMensaje('')
            },3000)
            return

        }

        guardarGasto({ nombre, cantidad, categoria });
        

    }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={cerrarBtn} alt="cerrar modal" onClick={ocultarModal} />
      </div>

          <form
              onSubmit={handleSubmit}
              className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
              <legend>Nuevo Gasto</legend>
              {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

        <div className="campo">
          <label htmlFor="nombre">Nombre de gasto</label>
          <input
            id="nombre"
            type="text"
            placeholder="Añade el nombre del gasto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            id="cantidad"
            type="number"
            placeholder="Añade la cantidad  del gasto ej:300"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoria</label>

          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">--Seleccione--</option>
            <option value="Ahorro">Ahorro</option>
            <option value="Comida">Comida</option>
            <option value="Casa">Casa</option>
            <option value="Gastos varios">Gastos varios</option>
            <option value="Ocio">Ocio</option>
            <option value="Salud">Salud</option>
            <option value="Suscripciones">Suscripciones</option>
          </select>
        </div>

        <input type="submit" value="Añadir" />
      </form>
    </div>
  );
}

export default Modal;
