import { useLocation } from 'react-router';
import './Header.scss';
import { FilterBar } from '../FilterBar/FilterBar';

interface HeaderProps {
  title: string;
  text: string;
}

export function Header({title, text}: HeaderProps) {
    const location = useLocation();

    console.log(location.pathname)

    return (
        <header className={location.pathname === "/" ? 'header--home' : 'header--default'}>
            {location.pathname === "/gamelist" || location.pathname === "/runlist" ?
                <section className='header_default--filter'>
                    <FilterBar/>
                </section>:
                <></>
            }
            <section className='header_title'>
                <h1>{title}</h1>
                <p>{text}</p>
            </section>
            {location.pathname === "/" &&
                <section className='header_image'>
                    <img src="/image_test.webp" alt="" className='header_image--cover'/>
                    <p>Jeu en cours sur la chaine</p>
                </section>
            }
        </header>
    )
}