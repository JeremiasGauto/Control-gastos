import React from 'react'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'
import { formatearFecha } from '../helpers';

import IconoAhorro from '../assets/icono_ahorro.svg'
import IconoCasa from '../assets/icono_casa.svg'
import IconoComida from '../assets/icono_comida.svg'
import IconoGastos from '../assets/icono_gastos.svg'
import IconoOcio from '../assets/icono_ocio.svg'
import IconoSalud from '../assets/icono_salud.svg'
import IconoSuscripciones from '../assets/icono_suscripciones.svg'

const diccionarioIconos = {
    Ahorro: IconoAhorro,
    Comida: IconoComida,
    Casa: IconoCasa,
    Gastos: IconoGastos,
    Ocio: IconoOcio,
    Salud: IconoSalud,
    Suscripciones: IconoSuscripciones
}


function Gasto({ gasto, setGastoEditar, eliminarGatos }) {

    const { nombre, cantidad, categoria, id, fecha } = gasto;

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setGastoEditar(gasto)}>
                Editar
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction onClick={() => eliminarGatos(id)}
            destructive={true}
            >
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className='gasto sombra'>
                    <div className='contenido-gasto'>
                        <img
                            src={diccionarioIconos[categoria]}
                            alt="Icono Gasto"


                        />

                        <div className='descripcion-gasto'>

                            <p className='categoria'>
                                {categoria}
                            </p>
                            <p className='nombre-gasto'>
                                {nombre}
                            </p>
                            <p className='fecha-gasto'>
                                agregado el:{' '}
                                <span>{formatearFecha(fecha)}</span>
                            </p>

                        </div>

                    </div>
                    <p className='cantidad-gasto'>${cantidad}</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default Gasto