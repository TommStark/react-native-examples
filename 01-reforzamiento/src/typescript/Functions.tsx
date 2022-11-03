
const Functions = () => {

    const sumar = ( a:number, b:number):number => {
        return a + b;
    }

    return (
    <>
        <h3>Functional components</h3>
        <span>
            el resultado de sumar es : {sumar(3, 55)}
        </span>
    </>
    )
}

export default Functions