import Slider from "react-slick"
import { useState, useEffect } from "react"
import './slick.css'
import './slick-theme.css'
const BASE_URL = process.env.REACT_APP_BASE_URL
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN


const SimpleSlider = () => {

    const [movies, setMovies] = useState({})

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const fetchMoviesSlider = async () => {
        const response = await fetch(BASE_URL, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`
            }
        })

        const result = await response.json()

        const movieArray = result.results
        const reducedMovies = movieArray.slice(0, 3)
        setMovies(reducedMovies)
    }

    useEffect(() => {
        fetchMoviesSlider()
    }, [])

    console.log(movies)


    return (
        <Slider {...settings}>
            {/* {
                movies.map((item) => (
                    <div key={item.id}>
                        <h3>{item.original_title}</h3>
                    </div>
                ))
            } */}
        </Slider>
    )

}


export default SimpleSlider