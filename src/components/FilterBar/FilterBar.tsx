import './FilterBar.scss'

export function FilterBar() {

    return (
        <>
            <form action="" className="filter">
                <div className="filter_game">
                    <label htmlFor="game-select" hidden>Jeux</label>
                    <select name="games" id="game-select" className="button">
                           <option value="">Jeux</option>
                    </select>
                </div>
                <div className="filter_genre">
                    <label htmlFor="genre-select" hidden>Genres</label>
                    <select name="genres" id="genre-select" className="button">
                        <option value="">Genres</option>
                    </select>
                </div>
                <div className="filter_year">
                    <label htmlFor="year-select" hidden>Années</label>
                    <select name="years" id="year-select" className="button">
                        <option value="">Années</option>
                    </select>
                </div>
                <div className="filter_search">
                    <label htmlFor="search" hidden>Rechercher</label>
                    <input type="search" name="test" id="search" className='button'/>
                    <button type="submit">rechercher</button>
                </div>
            </form>
        </>
    )
}