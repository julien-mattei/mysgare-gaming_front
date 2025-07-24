import './CardGame.scss';

interface GamecardProps{
    title: string,
    cover : string, 
    coverName: string
}

export function CardGame({title, cover, coverName}: GamecardProps) {

    return (
        <article className='card'>
            <img src={cover} alt={coverName} className='card-cover'/>
            <p className='card-title'>{title}</p>
        </article>
    )
}