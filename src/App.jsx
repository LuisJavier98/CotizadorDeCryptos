import { useEffect, useState } from 'react'
import './css/style.css'
import styled from '@emotion/styled'
import imagenCripto from './img/imagen-criptos.png'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'

const Contenedor = styled.div`
max-width:900px;
margin:0 auto;
width:90%;
@media(min-width:992px){
  display:grid;
  grid-template-columns:repeat(2,1fr);
  column-gap:2rem
}
`
const Heading = styled.h1`
font-family:'Lato',sans-serif;
color:#FFF;
text-align:center;
font-weight:700;
margin-top:80px;
margin-bottom:50px;
font-size:24px;
@media (min-width: 992px){
  font-size:40px
}
&::after{
  content:'';
  width:100px;
  height:6px;
  background-color:#66A2FE;
  display:block;
  margin:10px auto 0 auto;
  font-size:34px
}

`
const Imagen = styled.img`
max-width:400px;
width:80%;
margin:100px auto 0 auto;
display:block
`

function App() {

  const [objeto, setobjeto] = useState({})
  const [cotizacion, setcotizacion] = useState({})
  const [cargando, setcargando] = useState(false)

  useEffect(() => {
    if (Object.keys(objeto).length > 0) {
      const obtenerCripto = async () => {
        setcargando(true)
        setcotizacion({})
        console.log(objeto)
        const url = `
          https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${objeto.stateCripto}&tsyms=${objeto.stateMoneda}
        ` ;
        const resultado = await fetch(url)
        const respuesta = await resultado.json()
        setcotizacion(respuesta.DISPLAY[objeto.stateCripto][objeto.stateMoneda])
        setcargando(false)
      }
      obtenerCripto()
    }
  }, [objeto])
  return (
    <Contenedor>
      <Imagen
        src={imagenCripto}
        alt='Imagenes criptomonedas'
      />
      <div>
        <Heading className="App">
          Cotiza criptomonedas al instante
        </Heading>
        <Formulario setobjeto={setobjeto} />
        {cargando && <Spinner />}
        {cotizacion.PRICE && <Resultado cotizacion={cotizacion} />}
      </div>

    </Contenedor>
  )
}

export default App
