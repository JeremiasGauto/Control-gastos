import React from 'react'
import Gasto from './Gasto'


function ListadoGastos({
    gastos,
    setGastoEditar,
    eliminarGatos,
    filtro,
    gastosFiltrados
}) {
    return (

        <div className='Listado-gastos contenedor'>
           
            
            {
                filtro ? (
                    <>
                        <h2>{gastosFiltrados.length ? 'Gastos' : 'No hay gastos en esta categoria'}</h2>
                        {gastosFiltrados.map(gasto => (
                            <Gasto
                                key={gasto.id}
                                gasto={gasto}
                                setGastoEditar={setGastoEditar}
                                eliminarGatos={eliminarGatos}
                            />

                            ))}
                    </>
                ) : (
                        <>
                            <h2>{gastos.length ? 'Gastos' : 'No hay gastos aun'}</h2>
                       { gastos.map(gasto => (
                            <Gasto
                                key={gasto.id}
                                gasto={gasto}
                                setGastoEditar={setGastoEditar}
                                eliminarGatos={eliminarGatos}
                            />

                            ))}
                        </>
                )
            }


            {}


        </div>

    )
}

export default ListadoGastos