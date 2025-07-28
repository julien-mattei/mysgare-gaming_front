import './PanelTrophy.scss';

export function PanelTrophy({id, title, description,typeId, type}){
    return(
        <article key={id}>
            <h3>{title}</h3>
            <p>{description}</p>
            <span key={typeId}>{type}</span>
        </article>
    )
}