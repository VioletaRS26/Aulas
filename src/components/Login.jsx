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
        <div className="flex flex-col ba-white">
            <div className="flex flex-col items-center justify-center  w-15 rounded-xl">
                <div className="m-14">
                    <img src="./logo.png" alt="Logo" />
                </div>
                <h1 className="text-3xl font-bold">Entre com sua conta</h1><br></br>
                <form className=" flex-col items-center m-2 " onSubmit={handleSubmit} >
                        <div className="flex flex-col">
                            <input type="text" name="username" value={inputs.username || ""} onChange={handleChange} placeholder="Name" className="b-2  text-justify focus:border-black border-2 border-gray-300 rounded-2xl py-1 px-9"/>
                            <input type="text" name="inputs.senha" value={inputs.senha || ""} onChange={handleChange} placeholder="Senha" className="b-2  text-justify my-3 focus:border-black border-2 border-gray-300 rounded-2xl py-1 px-9"/>
                            <input type="submit" className=" b-2 px-4 bg-slate-400 "/>
                        </div>
                    </form>
            </div>
        </div>

    )
}
export default Login;