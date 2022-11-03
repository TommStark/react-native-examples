import { useCounter } from "../hooks/useCounter"

export const HookCounter = () => {

  const {counter,accum} = useCounter();

  return (
    <>
      <h3> Hook Contador: <small>{counter}</small></h3>
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
