import './Home.scss';
import { Header } from "../../components/Header/Header";
import { Footer } from '../../components/Footer/Footer';

export function Home() {

    const textLong = "Bienvenue sur le site de Mysgare Gaming, ici tu trouveras la liste de mes jeux, des stats sur mes jeux. Mais aussi la possibilité de voter pour les prchains jeux a venir"

    return (
        <main>
            <Header title="Mysgare Gaming" text={textLong}/>
            <section className='home_container'>
                <h2>Vote pour le prochain jeu</h2>
                <div className='game-vote'>
                    <article>
                        <img src="/image_test.webp" alt="" />
                        <button>voter</button>
                    </article>
                    <article>
                        <img src="/image_test.webp" alt="" />
                        <button>voter</button>
                    </article>
                    <article>
                        <img src="/image_test.webp" alt="" />
                        <button>voter</button>
                    </article>
                </div>
            </section>
            <Footer/>
         </main>   
    )
}