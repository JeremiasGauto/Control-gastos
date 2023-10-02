import React from 'react'
import Gasto from './Gasto'


function ListadoGastos({ gastos, setGastoEditar, eliminarGatos }) {
    return (

        <div className='Listado-gastos contenedor'>
            <h2>{gastos.length ? 'Gastos' : 'no hay gastos aun'}</h2>

            {gastos.map(gasto => (
                <Gasto
                    key={gasto.id}
                    gasto={gasto}
                    setGastoEditar={setGastoEditar}
                    eliminarGatos={eliminarGatos}
                />
                
            ))}


        </div>

    )
}

export default ListadoGastos