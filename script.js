const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjIyNTE0M2EzNTg3OGQxY2FkYTdmNjk4YmYwZWZhMCIsInN1YiI6IjY1MmY5OThjYTgwMjM2MDBjMzE2NWQ0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vMiFt7pND4DpoUQnFLKQbI03hux5EyIse35JoMwpfTA',
  },
};

fetch(
  'https://api.themoviedb.org/3/movie/top_rated?language=en&page=1',
  options
)
  .then((response) => response.json())
  .then((response) => {
    let movies = response['results'];
    // let movieCardpPost = document.getElementById('movieCards');

    movies.forEach((a) => {
      createMovieCard(a);
      //밑으로 이사 보냈습니다.
      // let movieId = a['id'];
      // let movieTitle = a['title'];
      // let movieOverview = a['overview'];
      // let movieAverage = a['vote_average'];
      // let moviePoster = a['poster_path'];
      // let movieCard = document.createElement('div');
      // movieCard.classList.add('movie-card');
      // movieCard.innerHTML = `
      // <div class="card">
      //   <img src="https://image.tmdb.org/t/p/w200/${moviePoster}" class="card-img-top" alt="..."/>
      //   <p class="card-title"> ${movieTitle} </p>
      //   <p class="stars">평점 <span class="starscolor">${movieAverage}</span></p>
      //   <p class="overview">${movieOverview}</p>
      // </div>`;
      // movieCardpPost.appendChild(movieCard);
      // movieCard.addEventListener('click', () => {
      //   const id = movieId;
      //   alert('영화ID는 ' + id + ' 입니다.');
      // });
    });
  });

let movieCardpPost = document.getElementById('movieCards');
function createMovieCard(a) {
  let movieId = a['id'];
  let movieTitle = a['title'];
  let movieOverview = a['overview'];
  let movieAverage = a['vote_average'];
  let moviePoster = a['poster_path'];

  let movieCard = document.createElement('div');
  movieCard.classList.add('movie-card');

  movieCard.innerHTML = `
    <div class="card">
      <img src="https://image.tmdb.org/t/p/w200/${moviePoster}" class="card-img-top" alt="..."/>
      <p class="card-title"> ${movieTitle} </p>
      <p class="stars">평점 <span class="starscolor">${movieAverage}</span></p>
      <p class="overview">${movieOverview}</p>
    </div>`;
  movieCardpPost.appendChild(movieCard);

  movieCard.addEventListener('click', () => {
    const id = movieId;
    alert('영화ID는 ' + id + ' 입니다.');
  });
}
// 검색
const searchBtn = document.getElementById('searchyellow');
const searchTxt = document.getElementById('searchinput');

searchBtn.addEventListener('click', () => {
  let text = searchTxt.value;
  console.log(text);
});
