import { useState } from 'react'
import styled from '@emotion/styled'
import ImagenCripto from './img/imagen-criptos.png'

const Contenedor = styled.div `

  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  

`

const Imagen = styled.img `
  
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`


const Heading = styled.h1 `
  font-family: 'lato', sans-serif;
  color: #fff;

`



function App() {
  const [count, setCount] = useState(0)

  return (
    <Contenedor>
      <Imagen
      src={ImagenCripto}
      />

    <Heading>Desde la app</Heading>

    </Contenedor>

  )
}

export default App
