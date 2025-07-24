import './Home.scss';
import { CardGame } from '../../components/CardGames/CardGame';
import { useGamesToVoted} from '../../hooks/use.games';

export function Home() {
    const { games, gamesLoad } = useGamesToVoted();
    const textLong = "Bienvenue sur le site de Mysgare Gaming, ici tu trouveras la liste de mes jeux, des stats sur mes jeux. Mais aussi la possibilité de voter pour les prchains jeux a venir"
    if (!gamesLoad){
         return <p>Chargement des jeux...</p>;
    }
    return (
        <main>
            <div className='home_container'>
                <h2>Vote pour le prochain jeu</h2>
                <div className='game-vote'>
                    {games.map((game)=> 
                        <div className="card-vote" key={game.id}>
                            <CardGame title={game.title} cover={game.cover_url} coverName={game.cover_name}/>
                        <button type="submit">Voter</button>
                    </div>
                    )}
                </div>
            </div>
         </main>   
    )
}