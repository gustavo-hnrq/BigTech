import axios from "axios";
import { useEffect, useState } from "react";
import { Fade } from 'react-awesome-reveal';

const Card = () => {

  
  // Explicando esse bloco abaixo, ele busca todos os dados na API api-bigtech quando o componente React é carregado e atualiza o estado do componente com esses dados. 
  // Ele também cuida de erros que possam ocorrer durante o processo e mostra os erros no console.

  const [data, setData] = useState([])
  
  useEffect(() => {
    axios.get("https://motionless-bear-lingerie.cyclic.cloud/all")
      .then(async(res) => {
        await setData(res.data)
      })
    .catch(err => console.log(err))
  }, [])

  // Renderiza uma grade de informações sobre as Big Tech, incluindo seus nomes, preços atuais, imagens, criadores e um resumo da história da Big Tech

  return(
    <div className="mx-auto max-w-screen-xl mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mr-10 ml-10">
      {data.map(element => (
      // O {data} contém objetos que representam diferentes bigtechs e o map é utilizado
      // para percorrer cada objeto e renderizar um bloco de informações para cada uma delas.
        <div className="p-6 border rounded-lg shadow-xl hover:scale-105 hover:border-pink-500 duration-300">
            {/* O efeito de fade-in faz parte da biblioteca {react-awesome-reveal} que está
           com um atraso e sua direção será para cima. É aplicado a todos os elementos filhos. */}
          <Fade delay={250} cascade damping={0.1} direction="up">
            <img src={element.img} className="w-32"/>
            <h5 className="mb-3 mt-2 text-2xl font-semibold">{element.nome}</h5>
            <p className="text-lg mb-3 mt-2 ">Valor: {element.valorAvaliada} </p>
            <p className="mb-3 mt-2 text-transparent bg-gradient-to-r bg-clip-text from-pink-500 to-blue-500 text-lg font-black">Criadores: {element.criadores}</p>
            </Fade>
            <Fade delay={750} cascade>
              <p> {element.resumo} </p>
            </Fade>
        </div>
        ))}
    </div>
  );
}


export default Card