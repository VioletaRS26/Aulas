import React, {useEffect, useState} from "react";
import Menu from "../components/Menu";

function Exemplo2(){

    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.title = 'Você clicou ${count} vezes';
    }, [count]);

    function incrementar(){
        setCount(count +1);
    }

    return(
        <div>
            <Menu/>
            <div className="flex flex-col items-center justify-center m-7">
                <h1 className="text-3xl font-bold">
                    Contagem: {count}
                </h1>
                <button onClick={incrementar} className= 'bg-azulEscuro text-white rounded-lg b-2 p-2 m-5'> Adicionar</button>
            </div>
        </div>
        
    )
}

export default Exemplo2;