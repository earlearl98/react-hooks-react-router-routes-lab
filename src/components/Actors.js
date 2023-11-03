import React from "react";
import { actors } from "../data";



function Actors() {
  // const [actorsx, setActorsx] = useState([]);

  // useEffect(() => {
  //   // Fetch actor data from the local server
  //   fetch("http://localhost:4000/actors")
  //     .then((response) => response.json())
  //     .then((data) => setActorsx(data))
  //     .catch((error) => console.error("Error fetching actors:", error));
  // }, []);
  return (
  
  <div>

<h1>Actors Page</h1>
{actors.map((actor, index) => (
        <div key={index}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, movieIndex) => (
              <li key={movieIndex}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}

  </div>);
}

export default Actors;
