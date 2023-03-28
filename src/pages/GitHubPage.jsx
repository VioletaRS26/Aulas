import Menu from '../components/Menu';
import axios from 'axios';
import React, {useEffect, useState} from "react";

function GitHubPage(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const url = 'https://api.github.com/users/jobsontn/repos';
    useEffect(() => {
        
        axios.get(url)
            .then((response)=>{
                //manipula o sucesso da requisição
                setData(response.data);
            })
            .catch((error) => {
                //manipula erros da requisição
                console.error(error);
            })
            .finally(() =>{
                //
                setLoading(false);
            });
    }, []);
    function exibir_dados(){
        if(loading){
            return <h1>Carrregando...</h1>
        }
        return(
            <ul>
                {data.map((repo) => {
                    return(
                        <li key={repo.full_name}>
                            <strong>{repo.full_name}</strong>
                            <p>{repo.description}</p>
                        </li>
                    );
                })}
            </ul>
        );
    }
    return(
        <div className='bg-gray-400 h-screen w-screen'>
            <Menu/>
            {exibir_dados()}
            
        </div>
    );
} 
export default GitHubPage;