import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import Error from './Error'

const InputSubmit = styled.input`
background-color:#9497FF;
border:none;
width:100%;
padding:10px;
color:3px;
font-weight:700;
text-transform:uppercase;
font-size:10px;
border-radius:5px;
&:hover{
  background-color:#7A7DFE;
  cursor:pointer
}
  

`
const formulario = ({ setobjeto }) => {
  const monedas = [
    { id: 'USD', nombre: 'Dolar de Estados Unidos' },
    { id: 'MXN', nombre: 'Peso Mexicano' },
    { id: 'EUR', nombre: 'Euro' },
    { id: 'GBP', nombre: 'Libra Esterlina' }
  ]

  const [criptos, setcriptos] = useState([])
  const [stateMoneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas)
  const [stateCripto, SelectCripto] = useSelectMonedas('Elige tu criptomoneda', criptos)
  const [error, seterror] = useState(false)
  useEffect(() => {

    const consultarAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      const arrayCriptos = resultado.Data.map(cripto => {
        return {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName
        }
      })
      setcriptos(arrayCriptos)
    }
    consultarAPI()
  }, [])


  const handleSubmit = e => {
    e.preventDefault()
    if (stateMoneda == '' || stateCripto == '') {
      seterror(true)
    }
    else {
      setobjeto({ stateMoneda, stateCripto })
      seterror(false)
    }
  }

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={handleSubmit} action="">
        <SelectMonedas />
        <SelectCripto />
        <InputSubmit type="submit" value='Cotizar' />
      </form>
    </>
  )
}

export default formulario