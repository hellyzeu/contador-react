import { useState, } from "react"

export default function Contador(props) {

  const [numero, setNumero] = useState(0)
  
  function somar() {
    setNumero(numero + 1) 

  }
  function subtrair() {
    setNumero(numero - 1)
  }
  function zera() {
    setNumero(0)
  }
 
  
  return <div>
    <h1>{props.nome}</h1>
    <p>{numero}</p>
    <button onClick={subtrair}>menos</button>
    <button onClick={somar}>mais</button>
    <button onClick={zera}>zero</button>
  </div>
}