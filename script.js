const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjIyNTE0M2EzNTg3OGQxY2FkYTdmNjk4YmYwZWZhMCIsInN1YiI6IjY1MmY5OThjYTgwMjM2MDBjMzE2NWQ0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vMiFt7pND4DpoUQnFLKQbI03hux5EyIse35JoMwpfTA',
  },
};

fetch(
  'https://api.themoviedb.org/3/movie/movie_id/lists?language=en-kr&page=1',
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
