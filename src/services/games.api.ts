import { URL_DB } from "./db.services.ts";

interface ugpProps {
    page: number | string,
    limit: number | string
}

export const getGamesToVoted = async() => {
    const response = await fetch(`${URL_DB}/games/toVoted`);
    if(!response.ok) {
        throw new Error('Erreur lors du chargement des jeux')
    }
    const data = await response.json()
    return data
}


export const getGamesPaginated = async ({page, limit} : ugpProps) => {
    const response = await fetch(`${URL_DB}/games/paginated?page=${page}&limit=${limit}`);
    if(!response.ok) {
        throw new Error('Erreur lors du chargement des jeux')
    }
    const data = await response.json()
    return data
}

export const getCurrentGame = async () => {
    const response = await fetch(`${URL_DB}/games/isCurrent`);
    if(!response.ok) {
        throw new Error('Erreur lors du chargement des jeux')
    }
    const data = await response.json()
    return data
}

