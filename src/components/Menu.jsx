import { NavLink } from "react-router-dom";

function Menu(){
    return (
        <nav className="h-8 px-4 bg-azulEscuro text-white">
            <ul className="h-8 flex flex-row gap-4">
                <li class="imag">
                    <NavLink to='/' className='hover:underline'>
                        Home Page
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Login' className='hover:underline'>
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Exemplo2' className='hover:underline'>
                        Cronometro
                    </NavLink>
                </li>
                <li>
                    <NavLink to='jogo_da_velha' className='hover:underline'>
                        Jogo da Velha 
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;