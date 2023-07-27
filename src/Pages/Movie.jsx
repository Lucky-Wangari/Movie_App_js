import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN
const IMAGE_URL = process.env.REACT_APP_IMAGE_URL


const Movie = () => {
    const [movies, setMovies] = useState({})
    const { id } = useParams()
    const fetchOneMovie = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${ACCESS_TOKEN}`
                }
            })
            const data = await response.json()
            setMovies(data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchOneMovie()
    }, [id])

    console.log(movies);

    return (
        <div>
            <div style={{width: 300}}>
                <img src={`${IMAGE_URL}${movies.poster_path}`} />
            </div>
            <h1>Title: {movies.title}</h1>
            <p>Description: {movies.overview}</p>
        </div>
    )
}

export default Movie