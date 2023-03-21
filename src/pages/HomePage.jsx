import React from "react";
import Menu from "../components/Menu";

function HomePage(){
    return(
        <div className="bg-gray h-screen w-screen">
            <Menu/>
            <div className="flex flex-col justify-center items-center my-20 ">
                <img src="./logo.png" alt="Logo" />
                <img src="./mouratech.png" alt="Moura Tech" className="py-10"/>
            </div>
        </div>
        
    )
}

export default HomePage;