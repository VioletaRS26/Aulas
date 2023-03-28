import React from "react";
import Formu from '../components/Formu';

function Form1() {
    return(
        <div>
            <Formu/>
           <div className="flex flex-col items-center ">
            <div className="flex flex-col justify-center items-center m-3 rounded-xl bg-slate-300 w-2/5 ">
                <div className="m-12 w-3/5">
                    <img src="./mouratech.png" alt="Moura Tech" />
                </div>
                <h1 className="text-3xl font-bold">Informe sua Matrícula</h1><br></br>
                <form className="flex flex-col justify-center items-center m-1 w-30 " >
                        <div className="flex flex-col  my-3">
                            <input type="text" name="username" placeholder="Matrícula" className="b-2  text-justify focus:border-black border-2 border-gray-300 rounded-2xl py-1 px-9"/>
                            <div className="flex justify-center m-3">
                                <button className="bg-blue-400 w-1/2 h-9 rounded-xl">Próximo</button>
                            </div>
                        
                        </div>
                    </form>
            </div>
         </div>
        </div>
    )
}
export default Form1;