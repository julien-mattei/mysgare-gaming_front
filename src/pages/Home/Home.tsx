import './Home.scss';
import { CardGame } from '../../components/CardGames/CardGame';
import { useCurrentGame, useGamesToVoted} from '../../hooks/use.games';

export function Home() {
    const { games, gamesLoad } = useGamesToVoted();
    console.log(games)
    const {game, gameLoad} = useCurrentGame()
    console.log(game)

    const textLong = "Bienvenue sur le site de Mysgare Gaming, ici tu trouveras la liste de mes jeux, des stats sur mes jeux. Mais aussi la possibilité de voter pour les prchains jeux a venir"
    if (!gamesLoad || !gameLoad){
         return <p>Chargement des jeux...</p>;
    }
    return (
        <main>
            <div className="home_info">
                <div className="home_info--text">
                    <h1>Mysgare Gaming</h1>
                    <p>{textLong}</p>
                </div>
                <div className='home_info--currentGame'>
                    <CardGame title={game.title} cover={game.cover_url} coverName={game.cover_name}/>
                </div>
            </div>
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