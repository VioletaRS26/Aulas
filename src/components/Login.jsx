import React, {useState} from "react";


function Login(){
    const[inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }

    return(
        <div className=" grow flex flex-col items-center bg-whit">
            <div className="flex flex-col justify-center items-center m-3 rounded-xl bg-slate-300 w-2/5 h-full">
                <div className="m-14">
                    <img src="./logo.png" alt="Logo" />
                </div>
                <h1 className="text-3xl font-bold">Entre com sua conta</h1><br></br>
                <form className="flex flex-col justify-center items-center m-2 w-30 " onSubmit={handleSubmit} >
                        <div className="flex flex-col  my-3">
                            <input type="text" name="username" value={inputs.username || ""} onChange={handleChange} placeholder="Name" className="b-2  text-justify focus:border-black border-2 border-gray-300 rounded-2xl py-1 px-9"/>
                            <input type="text" name="inputs.senha" value={inputs.senha || ""} onChange={handleChange} placeholder="Senha" className="b-2  text-justify my-2 focus:border-black border-2 border-gray-300 rounded-2xl py-1 px-9"/>
                            <a href="#" className="grow flex flex-col justify-start">Esqueceu a senha?</a>
                            <div className="flex justify-center m-3">
                                <button className="bg-blue-400 w-1/2 h-9 rounded-xl">Entrar</button>
                            </div>
                        
                        </div>
                    </form>
            </div>
        </div>

    )
}
export default Login;