import { useState } from 'react'
import Header from './Components/Header'
import iconoNuevoGasto from './assets/nuevo-gasto.svg'


function App() {
 
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);


  return (
    <div>
        <Header
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
      />
      
      {isValidPresupuesto && (<div className='nuevo-gasto'>
        <img
          src={iconoNuevoGasto} alt="iconoNuevoGasto" />
      </div>)}
      

    </div>
      
  
  )
}

export default App
