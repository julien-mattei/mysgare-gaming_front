import './PanelTrophy.scss';

export function PanelTrophy({id, title, description,typeId, type}){
    return(
        <article key={id} className='panel-trophy'>
            <h3 className='panel-trophy__title'>{title}</h3>
            <p className='panel-trophy__desc'>{description}</p>
            <span key={typeId}className='panel-trophy__type'>{type}</span>
        </article>
    )
}