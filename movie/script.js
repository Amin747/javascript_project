//perform search among movies as user types
//delete checked movies

const key = "2497118f";
let keyword = "str";

const URL = `http://www.omdbapi.com`;

const setUp = () => {};

const getMovies = () => {
  document.getElementById("search").addEventListener("input", (event) => {
    keyword = event.target.value;
    fetch(`${URL}/?s=${keyword}&apikey=${key}`)
      .then((res) => {
        return res.json();
      })
      .then(({ Search }) => {
        let { length } = Search;
        //displayMovies(movies);
        console.log(Search, length);
      });
  });
};
/*
Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
Title: "The Lord of the Rings: The Return of the King"
Type: "movie"
Year: "2003"
imdbID: "tt0167260"
*/

const displayMovies = () => {
  let { pos } = Poster;
  let;
};

(function startUp() {
  //setUp();
  getMovies();
})();
