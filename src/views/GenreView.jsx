import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./GenreView.css";

function GenreView() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    (async function getGenre() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&with_genres=${params.id}&page=${page}`
      );
      setMovies(response.data.results);
      setMaxPage(response.data.total_pages);
      console.log(params.id);
    })();
  }, [page]);

  useEffect(() => {
    setPage(1);
    (async function getGenre() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&with_genres=${params.id}&page=${page}`
      );
      setMovies(response.data.results);
      setMaxPage(response.data.total_pages);
    })()
  }, [params.id]);

  function previousPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function nextPage() {
    if (page < maxPage) {
      setPage(page + 1);
    }
  }

  return (
    <div className="movie-container">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <img className="movie-image" key={movie.id} height={"300px"} style={{ cursor: "pointer" }}
            onClick={() => navigate(`/movies/detail/${movie.id}`)}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title} />
        ))
      ) : (
        <p>Loading content</p>
      )}
      <div className="button-container">
        <button className="page-button" style={{ curosr: "pointer" }} onClick={() => previousPage()}>Previous Page</button>
        <button className="page-button" style={{ cursor: "pointer" }} onClick={() => nextPage()} >Next Page</button>
      </div>
      <p id="page-count">Page: {page}/{maxPage}</p>
    </div>
  );
}

export default GenreView;
