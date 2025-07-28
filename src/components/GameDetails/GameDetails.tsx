import './GameDetails.scss';



export function GameDetails({game}){
    return(
        <section className="game-info">
            <h1 className='game-info__title'>{game.title}</h1>
            <div className='game-info__img'>
                <p>{game.year}</p>
                    <img src={game.cover_url} alt={game.cover_name} />
                </div>
                <div className="game-info__genre">
                    {game.genre.map((genre)=>
                        <p className='genre' key={genre.id}>{genre.name}</p>
                    )}
                </div>         
        </section>
    )
}