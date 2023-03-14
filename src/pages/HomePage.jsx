import React from "react";
import Exemplo1 from '../components/Exemplo1';
import Menu from "../components/Menu";

function HomePage(){
    return(
        <div className="bg-gray-400 h-screen w-screen">
            <Menu/>
            <Exemplo1 start={0} ms={1000}/>
        </div>
    )
}

export default HomePage;