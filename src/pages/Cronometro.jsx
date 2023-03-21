import Exemplo1 from '../components/Exemplo1';
import Menu from '../components/Menu';

function Cronometro() {
    return(
        <div>
            <Menu/>
            <div className='flex flex-col justify-center items-center '>
                <Exemplo1 start={0} ms={1000}/>
            </div>
        </div>
    )
}
export default Cronometro;