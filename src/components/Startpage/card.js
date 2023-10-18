import axios from "axios";
import { useEffect, useState } from "react";
import { Fade } from 'react-awesome-reveal';

const Card = () => {

  const [data, setData] = useState([])
  
  useEffect(() => {
    axios.get("https://dizzy-knickers-fawn.cyclic.app/all")
      .then(async(res) => {
        await setData(res.data)
      })
    .catch(err => console.log(err))
  }, [])

  return(
    <div className="mx-auto max-w-screen-xl mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mr-10 ml-10">
      {data.map(element => (
        <div className="p-6 border rounded-lg shadow-xl hover:scale-105 hover:border-pink-500 duration-300">
          <Fade delay={1e2} cascade damping={0.1} direction="up">
            <img src={element.img} className="w-32"/>
            <h5 className="mb-3 mt-2 text-2xl font-semibold">{element.nome}</h5>
            <p> {element.valor} </p>
            <p className="text-transparent bg-gradient-to-r bg-clip-text from-pink-500 to-blue-500 text-lg font-black">Criadores: {element.criadores}</p>
            <p> {element.resumo} </p>
          </Fade>
        </div>
        ))}
    </div>
  );
}


export default Card