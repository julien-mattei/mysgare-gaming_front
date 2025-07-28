import { GameDetails } from '../../components/GameDetails/GameDetails';
import { PanelTrophy } from '../../components/PanelTrophy/PanelTrophy';
import { useOneGameWithTrophies } from '../../hooks/use.games';
import './TrophiesList.scss';
import { useParams } from 'react-router';



export function TrophiesList(){
    const { id } = useParams();
    const { game, gameLoad } = useOneGameWithTrophies(id);
    console.log(game)

    if(gameLoad){
        return(
            <main>
                <div className="container">
                    <GameDetails game={game}/>
                    <section className='trophiesList'>
                        {game.trophies.map((trophy)=>
                            <PanelTrophy id={trophy.id} title={trophy.title} description={trophy.description} typeId={trophy.type.id} type={trophy.type.name}/>
                        )}
                    </section>
                </div>
            </main>
        )
    }
}