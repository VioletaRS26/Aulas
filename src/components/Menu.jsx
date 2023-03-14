import { NavLink } from "react-router-dom";

function Menu(){
    return (
        <nav className="h-8 px-4 bg-azulEscuro text-white">
            <ul className="h-8 flex flex-row gap-4">
                <li>
                    <NavLink to='/Login' className='hover:underline'>
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink to='Exemplo2' className='hover:underline'>
                        Exemplo2
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;