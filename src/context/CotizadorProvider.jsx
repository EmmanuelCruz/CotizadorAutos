import { createContext, useState } from 'react';
import { getYearsDif, calcularMarca, calcularPlan, formatearDinero } from '../helpers';

const CotizadorContext = createContext()

const CotizadorProvider = ({ children }) => {

  const [datos, setDatos] = useState({
    marca: '',
    year: '',
    plan: ''
  })

  const [error, setError] = useState('')
  const [resultado, setResultado] = useState(0)
  const [cargando, setCargando] = useState(false)

  const handleChangeData = e =>{
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }

  const cotizarSeguro = () => {
    let resultado = 2000;
    const diferencia = getYearsDif(datos.year)
    resultado -= ((diferencia * 3) * resultado) / 100
    resultado *= calcularMarca(datos.marca)
    resultado *= calcularPlan(datos.plan)

    resultado = formatearDinero(resultado)

    setCargando(true)

    setTimeout(() => {
      setResultado(resultado)
      setCargando(false)
    }, 2000);

  }

  return(
    <CotizadorContext.Provider
      value={{
        handleChangeData,
        datos,
        error,
        setError,
        cotizarSeguro,
        resultado,
        cargando
      }}
    >
      {children}
    </CotizadorContext.Provider>
  )
}

export {
  CotizadorProvider
}

export default CotizadorContext