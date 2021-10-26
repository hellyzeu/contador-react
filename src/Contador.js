import { useState } from "react"

export default function Contador(props) {

  const [numero, setNumero] = useState(0)

  function somar() {
    setNumero(numero + 1)
  }

  return <div>
    <h1>{props.nome}</h1>
    <p>{numero}</p>
    <button>menos</button>
    <button onClick={somar}>mais</button>
  </div>


}