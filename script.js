const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjIyNTE0M2EzNTg3OGQxY2FkYTdmNjk4YmYwZWZhMCIsInN1YiI6IjY1MmY5OThjYTgwMjM2MDBjMzE2NWQ0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vMiFt7pND4DpoUQnFLKQbI03hux5EyIse35JoMwpfTA',
  },
};

fetch(
  'https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1',
  options
)
  .then((response) => response.json())
  .then((response) => {
    let movies = response['results'];
    let movieCardpPost = document.getElementById('movieCards');

    movies.forEach((a) => {
      let movieId = a['id'];
      let movieTitle = a['title'];
      let movieOverview = a['overview'];
      let movieAverage = a['vote_average'];
      let moviePoster = a['poster_path'];

      let movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');

      movieCard.innerHTML = `
      <div class="card" id="movieCards">
        <img src="https://image.tmdb.org/t/p/w200/${moviePoster}" class="card-img-top" alt="..."/>
        <p class="card-title"> ${movieTitle} </p>
        <p class="stars">평점<span class="starscolor">${movieAverage}</span></p>
        <p class="overview">${movieOverview}</p>
      </div>`;
      movieCardpPost.appendChild(movieCard);
    });
  });
