import './GetStarted.css'

const cadena = 'Reyy';
const num = 123;
const buleano = false;
const obj = { name: 'Reyy' }; //los objetos directamento no se pueden renderizar
const arr = [1,2,3,4,5,6,7,8,9];
const fnSum = (a, b) => a + b;

// es recomendable colocar las declaraciones fuera del Componente
// para que no vuelva a reservarse en memoria espacio para ellas
// cada vez que se renderice el componente

export const GetStarted = () =>{
    return (
        <>
            <div className="content">
                <p> cadena: <span>  { cadena } </span> </p>
                <p> num: <span>  { num } </span> </p>
                <p> buleano: <span>  { buleano } </span> </p>
                <p> obj: <span>  { JSON.stringify(obj) } </span>  </p>
                <p> arr: <span>  { 
                    arr.map((item, index) => {
                        return (
                            <ul>
                                <li key={index}>  { `item: ${item} `} </li>
                            </ul>
                        )
                    })
                } </span> </p>
                <p>
                    funcion: { fnSum(1, 2) }
                </p>
            </div>
        </>
    )
}