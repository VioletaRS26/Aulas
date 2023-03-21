import React from "react";
import ReactDOM  from "react-dom/client";
import Menu from "./Menu";

class Timer extends React.Component {

    constructor(props){
        super(props);
        this.state = {seconds: this.props.start};
    }

    contar(){
        this.setState(
            state => ({seconds: state.seconds + 1})
        );
    }
    startStop(){

        if(this.interval ){
            clearInterval(this.interval);
        }else{
            this.interval = setInterval(() => this.contar(), this.props.ms);
        }
    }


    componentDidMount(){
        this.interval = setInterval(() => this.contar(), this.props.ms);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render(){
        return (
            <>
                <div className="flex flex-col justify-center items-center m-4 p-5">
                    <h1 className="text-3xl font-bold">Cronometro</h1>
                    <div className="bg-azulEscuro w-96 h-16 m-6 p-5 rounded-xl flex flex-col justify-center items-center">
                        <h1 className= "text-5xl text-white cronometro">
                        {this.state.seconds}
                        </h1>
                    </div>
                
                </div>
                <div className="flex flex-row justify-center w-96 m-2 items-center">
                    <button onClick={this.startStop} className="bg-azulEscuro text-white w-36 m-4 px-2 py-2 rounded-xl items-center">Iniciar/Parar</button>
                    <button onClick={this.startStop} className="bg-azulEscuro text-white w-36 m-4 px-2 py-2 rounded-xl items-center">Zera</button>
                </div>
            </>
            
            
        );
    }
}

export default Timer; // Possibilita a importanção do componente