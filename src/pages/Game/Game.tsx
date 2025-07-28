import './Game.scss';
import { useOneGame } from '../../hooks/use.games';
import { NavLink, useParams } from 'react-router';
import { GameDetails } from '../../components/GameDetails/GameDetails';



export function Game(){
    const {id} = useParams();
    const {game, gameLoad} = useOneGame(id);
    console.log(game)

    if(gameLoad){
        return (
            <main>
                <div className="container" >
                    <GameDetails game={game}/>
                    <section className="game-stats">
                       <NavLink to={`/games/${game.id}/boss`}>
                        <article>
                            <i className="fa-solid fa-skull fa-2xl"></i>
                            <p className='game-stats__number'>{game.nbBoss}</p>
                        </article>
                        </NavLink>
                        <NavLink to={`/games/${game.id}/runs`}>
                            <article>
                                <i className="fa-solid fa-flag-checkered fa-2xl"></i>
                                <p className='game-stats__number'>{game.nbRuns}</p>
                            </article>
                        </NavLink>
                        <NavLink to={`/games/${game.id}/trophies`}>
                            <article>
                                <i className="fa-solid fa-trophy fa-2xl"></i>
                                <p className='game-stats__number'>{game.nbTrophies}</p>
                            </article>
                        </NavLink>
                        <article>
                            <i className="fa-solid fa-cross fa-2xl"></i>
                            <p className='game-stats__number'>0</p>
                        </article>
                    </section>
                </div>
            </main>
        )
    }
}