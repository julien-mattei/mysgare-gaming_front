import { useParams } from 'react-router';
import './BossList.scss';
import { useOneGameWithBosses } from '../../hooks/use.games';
import { GameDetails } from '../../components/GameDetails/GameDetails';

export function BossList(){
    const { id } = useParams();
    const { game, gameLoad } = useOneGameWithBosses(id)

    if(gameLoad){
        return(
            <main>
                <div className="container">
                    <GameDetails game={game}/>
                    <section className='game-listBoss'>
                        <h2>Liste des boss</h2>
                        <ul>
                            {game.bosses.map((boss) => 
                                <li className='boss-name' key={boss.id}>{boss.name}</li>
                            )}
                        </ul>
                    </section>
                </div>
            </main>
        )
    }
}