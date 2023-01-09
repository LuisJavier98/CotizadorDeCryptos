import styled from '@emotion/styled'
import React from 'react'

const Cotizacion = styled.div`
color:white;
font-family:'Lato',sans-serif;
display:flex;
align-items:center;
justify-content:space-between;
gap:1rem;
margin-top:30px
`
const Indice = styled.p`
font-size:20px;
span{
  font-weight:700
}
@media(max-width:420px){
font-size:15px
}
`
const Imagen = styled.img`
display:block;
width:30%

`
const Resultado = ({ cotizacion }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = cotizacion
  return (
    <Cotizacion>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen Cripto" />
      <div>
        <Indice>El precio es de <span>{PRICE}</span></Indice>
        <Indice>Precio mas alto del dia <span>{HIGHDAY}</span></Indice>
        <Indice>Precio mas bajo del dia <span>{LOWDAY}</span></Indice>
        <Indice>Variacion ultimas 24 horas<span>{CHANGEPCT24HOUR}</span></Indice>
        <Indice>Ultima actualizacion <span>{LASTUPDATE}</span> </Indice>
      </div>
    </Cotizacion>
  )
}

export default Resultado