import { useState, useEffect } from "react";
import { getCurrentGame, getGamesPaginated, getGamesToVoted} from "../services/games.api";

interface ugpProps {
    page: number | string,
    limit: number | string
}

export function useGamesToVoted() {
    const [games, setGames] = useState<[]>([])
    const [gamesLoad, setGamesLoad] = useState(false)

    useEffect(() => {
        const loadGames = async() => {
            try {
                const data = await getGamesToVoted()
                setGames(data)
                setGamesLoad(true)
            } catch (error) {
                console.log('catch/error', error);
            }
        }
        loadGames()
    }, [])
    return {games, gamesLoad}
}


export function useGamesPaginated({page, limit} : ugpProps) {
    const [games, setGames] = useState<[]>([])
    const [gamesLoad, setGamesLoad] = useState(false)

    useEffect(() => {
        const loadGames = async() => {
            try {
                const data = await getGamesPaginated({page, limit})
                setGames(data)
                setGamesLoad(true)
            } catch (error) {
                console.log('catch/error', error);
            }
        }
        loadGames()
    }, [page, limit])
    return {games, gamesLoad}
}

export function useCurrentGame() {
    const [game, setGame] = useState()
    const [gameLoad, setGameLoad] = useState(false)

    useEffect(() => {
        const loadGames = async() => {
            try {
                const data = await getCurrentGame()
                setGame(data)
                setGameLoad(true)
            } catch (error) {
                console.log('catch/error', error);
            }
        }
        loadGames()
    }, [])
    return {game, gameLoad}
}