import styled from '@emotion/styled'
import React, { useState } from 'react'

const Label = styled.label`
color:white;
display:block;
font-family:'Lato',sans-serif;
font-weight:700;
font-size:24px;
margin:15px 0;
`
const Select = styled.select`
  width:100%;
  font-size:18px;
  padding:14px;
  border-radius:10px;
  margin-bottom:20px
`

const useSelectMonedas = (label, opciones) => {
  const [state, setstate] = useState('')

  const SelectMonedas = () => (
    <>
      <Label>{label}</Label>
      <Select value={state} onChange={e => setstate(e.target.value)} name="" id="">
        <option disabled value="">---Seleccione---</option>
        {opciones.map(opcion => <option key={opcion.id} value={opcion.id}>{opcion.nombre}</option>)}
      </Select>
    </>

  )
  return [state, SelectMonedas]
}

export default useSelectMonedas