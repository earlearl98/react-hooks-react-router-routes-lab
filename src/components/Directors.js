import React from "react";
import { directors } from "../data";



function Directors() {
  // const [directorsx, setDirectorsx] = useState([]);

  // useEffect(() => {
  //   // Fetch director data from the local server
  //   fetch("http://localhost:4000/directors")
  //     .then((response) => response.json())
  //     .then((data) => setDirectorsx(data))
  //     .catch((error) => console.error("Error fetching directors:", error));
  // }, []);

  return (
  <div>
    <h1>Directors Page</h1>
    {directors.map((director, index) => (
        <div key={index}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, movieIndex) => (
              <li key={movieIndex}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}











  </div>);
}

export default Directors;
