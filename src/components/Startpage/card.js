import axios from "axios";
import { useEffect, useState } from "react";
import { Fade } from 'react-awesome-reveal';

const Card = () => {

  const [data, setData] = useState([])
  
  // LINK DA API: https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=99

  useEffect(() => {
    axios.get("https://dizzy-knickers-fawn.cyclic.app/all")
      .then(async(res) => {
        await setData(res.data)
      })
    .catch(err => console.log(err))
  }, [])

  // Renderiza uma grade de informações sobre as criptomoedas, incluindo seus nomes, preços atuais, imagens e variações de preço nas últimas 24 horas
  return(
    <div className="mx-auto max-w-screen-xl mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mr-10 ml-10">
      {/* O {data} contém objetos que representam diferentes criptomoedas e o map é utilizado
      para percorrer cada objeto e renderizar um bloco de informações para cada uma delas.*/}
      {data.map(element => (
        <div className="p-6 border rounded-lg shadow-xl hover:scale-105 hover:border-pink-500 duration-300">
          {/* O efeito de fade-in faz parte da biblioteca {react-awesome-reveal} que está
           com um atraso e sua direção será para cima. É aplicado a todos os elementos filhos.  */}
          <Fade delay={1e2} cascade damping={0.1}>
            <img src={element.img} className="w-32"/>
            <h5 className="mb-3 mt-2 text-2xl font-semibold">{element.nome}</h5>
            <p className="text-transparent bg-gradient-to-r bg-clip-text from-pink-500 to-blue-500 text-lg font-black">Criadores: {element.criadores}</p>
            <p> {element.resumo} </p>
          </Fade>
        </div>
        ))}
    </div>
  );
}


export default Card