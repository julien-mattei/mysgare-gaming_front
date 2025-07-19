import './AsideBar.scss';

export function AsideBar(){

    return (
        <aside>
            <section className='aside_logo'>
                <img src="/image_test.webp" alt="logo" className='logo--rounded'/>
            </section>
            <nav>
                <a href="#">Home</a>
                <a href="#">Jeux</a>
                <a href="#">Runs</a>
                <a href="#">Stats</a>
            </nav>
            <section>
                <a href="#">Connexion</a>
            </section>
        </aside>
    )
}