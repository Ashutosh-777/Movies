const moviesContainer = document.getElementById("moviesContainer");


async function fetchMovies() {
  try {
    const response = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=0c1881819b36de377c0212f81949a9a3"); 
    const data = await response.json();
    const movies = data.results; 
    
  
    movies.forEach((movie) => {
      const card = document.createElement("div");
      card.classList.add("card");
      
      const poster = document.createElement("img");
      poster.src ='http://image.tmdb.org/t/p/w500'+ movie.backdrop_path; 
      poster.alt = movie.title||movie.name;
      poster.vote=movie.vote_average; 
      poster.classList.add("poster");
      
      const overlay = document.createElement("div");
      overlay.classList.add("overlay");
      
      const title = document.createElement("h3");
      title.classList.add("title");
      title.textContent = movie.title||movie.name; 
      const vote = document.createElement("h1");
      vote.classList.add("title");
      vote.textContent = movie.vote_average;
      overlay.appendChild(title);
      overlay.appendChild(vote);
      card.appendChild(poster);
      card.appendChild(overlay);
      moviesContainer.appendChild(card);
    });
  } catch (error) {
    console.log("Error fetching movies:", error);
  }
}


fetchMovies();
