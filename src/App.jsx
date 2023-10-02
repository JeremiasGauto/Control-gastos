import { useState, useEffect } from 'react'
import Header from './Components/Header'
import Modal from './Components/Modal';
import ListadoGastos from './Components/ListadoGastos';
import { generarId } from './helpers';
import iconoNuevoGasto from './assets/nuevo-gasto.svg'
import { object } from 'prop-types';


function App() {

  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  );
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  );
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastoEditar, setGastoEditar] = useState({})

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);


      setTimeout(() => {
        setAnimarModal(true);
      }, 500)
    }

  }, [gastoEditar])


  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }, [presupuesto])




  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? []);
  }, [gastos])



  useEffect(() => {
    const presupuestoLs = Number(localStorage.getItem('presupuesto')) ?? 0

    if (presupuestoLs > 0) {
      setIsValidPresupuesto(true)
    }

  }, [])


  const handleNuevoGasto = () => {
    setModal(true);
    setGastoEditar({});

    setTimeout(() => {
      setAnimarModal(true);
    }, 500)

  }

  const guardarGasto = gasto => {
    if (gasto.id) {

      const gastoActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastoActualizados);
      setGastoEditar({});

    } else {



      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto])
    }
    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);

  }

  const eliminarGatos = (id) => {
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id);
    setGastos(gastosActualizados);
  }


  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <>
          <main>
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGatos={eliminarGatos}
            />
          </main>

          <div className='nuevo-gasto'>
            <img
              src={iconoNuevoGasto}
              alt="iconoNuevoGasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal && <Modal
        setModal={setModal}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        guardarGasto={guardarGasto}
        gastoEditar={gastoEditar}
        setGastoEditar={setGastoEditar}
      />}

    </div>


  )
}

export default App
