import React from "react";
import ReactDOM  from "react-dom/client";

//Usando Classe
/*class OlaMundo extends React.Component{
    render(){
        return <h1>Olá {this.props.nome}</h1>
    }
}*/
//Usando função
function OlaMundo(props){
    return <h1>Olá {props.nome}</h1>
}

class Pagina01 extends React.Component{
    render(){
        return (
            <>
                <OlaMundo nome = {this.props.nome[0]}></OlaMundo>
                <OlaMundo nome = {this.props.nome[1]}></OlaMundo>
            </>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Pagina01 nome = {["Ana", "Jambo"]}/>);

