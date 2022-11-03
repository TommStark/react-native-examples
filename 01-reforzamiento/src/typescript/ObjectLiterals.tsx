
interface Persona{
    nombreCompleto: string;
    edad: number;
    dir:Direction
}

interface Direction{
    pais:string;
    numero:number;
}


const ObjectLiterals = () => {

    const persona:Persona = {
        nombreCompleto: 'Fernando',
        edad : 35,
        dir :{
            pais: 'canada',
            numero : 655
        }
    }

    return (
        <>
        <h3>Objetos literales</h3>
            <code>
                <pre>
                        {JSON.stringify(persona,null, 2)}       
                </pre>
            </code>
        </>
        )
}

export default ObjectLiterals