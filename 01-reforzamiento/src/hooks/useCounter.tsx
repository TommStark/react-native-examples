import { useState } from 'react';

export const useCounter = (valor:number = 10) => {
    const [counter, setCounter] = useState(valor);

    const accum = (number:number)=>{
        setCounter(counter + number);
    }

    return{
        counter,
        accum,
    }

}
