import { MARCAS, YEARS, PLANES } from '../constants'
import { Fragment, useContext } from 'react'
import useCotizador from '../hooks/useCotizador'
import Error from './Error'

const Formulario = () => {

  const { handleChangeData, datos, error, setError, cotizarSeguro } = useCotizador()

  const handleSubmit = e => {
    e.preventDefault()

    if(Object.values(datos).includes('')){
      setError("Todos los campos son obligatorios")
      return
    }

    setError('')
    cotizarSeguro()
  }

  return (
    <>
      <form onSubmit={handleSubmit} action="">
        <div className="my-5">
          <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">Marca</label>
          <select 
            onChange={e => handleChangeData(e)} 
            className="w-full bg-white border border-gray-200" 
            name="marca" 
            value={datos.marca}
            id=""
          >
            <option value="">-- Seleccionar marca --</option>
            {
              MARCAS.map(marca => (
                <option key={marca.id} value={marca.id}>{marca.nombre}</option>
              ))
            }
          </select>
        </div>

        <div className="my-5">
          <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">Año</label>
          <select 
            onChange={e => handleChangeData(e)} 
            className="w-full bg-white border border-gray-200" 
            name="year" 
            id=""
            value={datos.year}
          >
            <option value="">-- Seleccionar año --</option>
            {
              YEARS.map(year => (
                <option key={year} value={year}>{year}</option>
              ))
            }
          </select>
        </div>

        <div className="my-5">
          <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">Planes</label>
          <div className='flex gap-3 items-center'>
            {
              PLANES.map(plan => (
                <Fragment key={plan.id}>
                  <label htmlFor="">{plan.nombre}</label>
                  <input onChange={e => handleChangeData(e)}  type="radio" name='plan' value={plan.id}/>
                </Fragment>
              ))
            }
          </div>
        </div>

        <input value='Cotizar' className='w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold' type="submit" />

        {
          error && 
          <Error />
        }
      </form>
    </>
  )
}

export default Formulario
