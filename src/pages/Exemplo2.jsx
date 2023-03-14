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
            <h1>
                Contagem: {count}
            </h1>
            <button onClick={incrementar} className= 'bg-azulEscuro text-white rounded-lg'> Adicionar</button>
        </div>
        
    )
}

export default Exemplo2;