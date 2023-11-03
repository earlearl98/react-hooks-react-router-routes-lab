import React from "react";
import { movies } from "../data";



function Movies() {

  // const [moviesx, setMoviesx] = useState([]);

  // useEffect(() => {
  //   // Fetch movie data from the local server
  //   fetch("http://localhost:4000/movies")
  //     .then((response) => response.json())
  //     .then((data) => setMoviesx(data))
  //     .catch((error) => console.error("Error fetching movies:", error));
  // }, []);
  return (
  <div>
    <h1>Movies Page</h1>

    
    {movies.map((movie, index) => (
        <div key={index}>
          <h2>{movie.title}</h2>
          <p>Time: {movie.time} minutes</p>
          <ul>
            {movie.genres.map((genre, genreIndex) => (
              <li key={genreIndex}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}

    

  </div>);
}

export default Movies;
