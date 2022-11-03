import { useState } from "react"

export const Counter = () => {

  const [counter, setCounter] = useState(0);

  const accum = (number:number)=>{
    setCounter(counter + number);
  }


  return (
    <>
      <h3> Contador: <small>{counter}</small></h3>
      <button 
        className="btn btn-primary"
        onClick={() => accum(1)}
      >
        +1
      </button>
      &nbsp;
      <button
        className="btn btn-primary"
        onClick={() => accum(-1)}
      >
        -1
      </button>
    </>

    )
}
