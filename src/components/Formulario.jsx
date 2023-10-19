import { useEffect,useState } from "react";
import styled from "@emotion/styled";

import useSelectMonedas from '../hooks/useSelectMonedas'

import {monedas} from '../data/monedas';


const InputSubmit = styled.input`

background-color: #8497ff;
border:none;
width: 100%;
padding: 10px;
color: #fff;
font-weight:700;
text-transform: uppercase;
font-size:20px;
border-radius:5px;
margin-top:30px;
transition: background-color .3s ease;

&:hover {

    background-color:#7A7DFE;
    cursor: pointer;

}


`

const Formulario = () => {


  const [criptos, setCriptos] = useState([])
  const [moneda,SelectMonedas] = useSelectMonedas('Elige tu moneda',monedas)
  const [criptomoneda,SelectCriptomonedas] = useSelectMonedas('Elige tu criptomoneda',criptos)


  useEffect(() => {

    const consultarApi = async () => {

      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

      const respuesta = await fetch(url)
      const  resultado = await respuesta.json()

      const arrayCripto = resultado.Data.map(cripto => {
         
         const objetoCripto ={
            id:cripto.CoinInfo.Name,
            nombre:cripto.CoinInfo.FullName,
         }

         return objetoCripto
      })
     setCriptos(arrayCripto)
      

    }
    consultarApi();

  },[])
   
  return (


    <form action="">

        <SelectMonedas
        
        />

        <SelectCriptomonedas/>

      <InputSubmit type="submit" value="Cotizar" />
    </form>
  );
};

export default Formulario;
