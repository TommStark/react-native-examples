import React from 'react'

export const BasicTypes = () => {

    const name: string = 'Fernando';
    const age: number = 31;
    const isActive:boolean = false;

    const powers: string[] = ['speed','strong','fly','laser'];

    return (
        <>
            <h3>
                Tipos Basicos
            </h3>
            {name}, 
            {age},
            {isActive ?  'activo' : 'no activo'}
            <br/>
            {powers.join(', ')}
        </>
        )
}
