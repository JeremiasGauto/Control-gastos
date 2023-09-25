import cerrarBtn from '../assets/cerrar.svg'


function Modal({ setModal, animarModal, setAnimarModal }) {

    const ocultarModal = () => {

        setAnimarModal(false);


        setTimeout(() => {
            setModal(false)

        }, 500)
    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img
                    src={cerrarBtn}
                    alt="cerrar modal"
                    onClick={ocultarModal}
                />
            </div>

            <form className={`formulario ${animarModal ? "animar" : "cerrar"}`} >
                <legend>Nuevo Gasto</legend>

                <div className='campo'>
                    <label htmlFor="nombre">Nombre de gasto</label>
                    <input
                        id='nombre'
                        type="text"
                        placeholder='Añade el nombre del gasto'
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="cantidad">Cantidad</label>
                    <input
                        id='cantidad'
                        type="number"
                        placeholder='Añade la cantidad  del gasto ej:300'
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="categoria">Categoria</label>
                    <select id="categoria">
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

                <input
                    type="submit"
                    value="Añadir"
                />

            </form>
        </div>
    )
}

export default Modal