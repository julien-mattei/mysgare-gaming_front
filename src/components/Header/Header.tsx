import { NavLink } from 'react-router';
import './Header.scss';

export function Header(){

    return (
        <aside>
            <p>Mysgare Gaming</p>
            <nav className='aside_nav'>
                <NavLink to="/" className='aside_nav--button button'>Home</NavLink>
                <NavLink to="/gamelist" className='aside_nav--button button'>Jeux</NavLink> 
                <NavLink to="/runlist" className='aside_nav--button button'>Runs</NavLink> 
                <NavLink to="#" className='aside_nav--button button'>Stats</NavLink>  
            </nav>
            <section>
                <NavLink to="#" className='button'>Connexion</NavLink> 
            </section>
        </aside>
    )
}