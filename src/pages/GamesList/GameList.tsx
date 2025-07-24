import './GameList.scss';
import { CardGame } from '../../components/CardGames/CardGame';
import { useGamesPaginated } from '../../hooks/use.games';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router';



export function GameList() {
    
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(16)

    const{games, gamesLoad} = useGamesPaginated({page, limit})
    console.log(games)
    const handleNext = () => setPage((p) =>  p + 1);
    const handlePrev = () => setPage((p) => Math.max(1, p - 1));

    const gamesDatas = games.gamesDetails
    if (gamesLoad){
        return (
            <main>
              <section>
                <h1>Mes Jeux</h1>
                <p>Voici la liste de mes {games.nbGames} jeux</p>
              </section>
                <section className='gamelist'>
                    {gamesDatas.map((game)=> 
                        <div className="game-card" key={game.id}>
                            <NavLink to="#">
                                <CardGame title={game.title} cover={game.cover_url} coverName={game.cover_name}/>
                            </NavLink>
                        </div>
                    )}
                </section>
                    <div className="pagination">
                        <button onClick={handlePrev} disabled={page === 1}>Précédent</button>
                        <p>page {page} sur {games.nbPages}</p>
                        <button onClick={handleNext}>Suivant</button>
                    </div>
            </main>
        )
    }

}