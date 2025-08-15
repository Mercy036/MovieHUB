import {createContext, useContext,useState, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    },[])

    useEffect (()=>{
        localStorage.setItem('favorites',JSON.stringify(favorites))
    },[favorites])

    const addToFavorites = (movie) =>{
             setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorties = (movieId) => {
        setFavorites (prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorites =(movieId) => {
        return favorites.some(movie => movie.id===movieId)
    }

    const values={
        favorites,
        addToFavorites,
        removeFromFavorties,
        isFavorites
    }

    return (
        <MovieContext.Provider value={values}>
        {children}
        </MovieContext.Provider>
    )
}
