import React from 'react'
import Formulario from '../components/Formulario'
import useLetras from '../hooks/useLetras'
import Alerta from './Alerta';

const Appletras = () => {

    const { alerta } = useLetras();

  return (
    <>
      <header>Búsqueda de Letras de Canciones</header>
      <Formulario />

      <main> 
        {alerta && <Alerta>{alerta}</Alerta>}

      </main>
    </>
  )
}

export default Appletras
