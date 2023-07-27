import React, { useState, useEffect } from "react";
import { getMovies } from "../../utils/utilities";
import ImageContainer from "../../atoms/Image-container";
import { useNavigate } from "react-router-dom";
import SimpleSlider from "../../Slider";

import './style.css';
// const BASE_URL = process.env.REACT_APP_BASE_URL;
const IMAGE_URL = process.env.REACT_APP_IMAGE_URL

const MovieList = () => {
    const navigate = useNavigate()

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filteredMovies, setFilteredMovies] = useState([]);




    const handleSearch = (event) => {
        let searchValue = event.target.value.trim().toLowerCase();
        if (searchValue === "") {
            setFilteredMovies(movies)
        }
        else {
            let filteredMovies = movies.filter(item => item.title.toLowerCase().includes(searchValue));
            setFilteredMovies(filteredMovies);
        }
    }
    useEffect(() => {
        (async () => {
            setLoading(true)
            const movies = await getMovies();
            setMovies(movies.results);
            setFilteredMovies(movies.results);
            setLoading(false);
        })();
    }, []);
    if (loading) {
        return <h1>Loading....</h1>
    }

    const handleClick = (id) => {
        navigate(`/movie/${id}`)
    }

    return (
        <div>
            <div className="search">
                <p id="movie1">M<span id="movie">oo</span>vie</p>
                <input className="searching" type="search" placeholder="Search" onChange={handleSearch}></input>
                <p className="home">Home</p>
                <p className="list">My List</p>
                <button className="sign">Sign In</button>
            </div>

            <div className="slider">
                <SimpleSlider />
            </div>


            <div className="image-container">
                {loading === false & filteredMovies.length > 0 && filteredMovies.map(
                    item => (
                        <ImageContainer title={item.original_title} imageSource={`${IMAGE_URL}${item.poster_path}`} key={item.id} handleClick={() => handleClick(item.id)} />
                    )
                )
                }
            </div>
        </div>
    );
};
export default MovieList;