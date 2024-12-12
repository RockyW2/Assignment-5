import './GenreSelect.css';

function Genres() {
  const genres = [
    { genre: "Action", id: 28 },
    { genre: "Adventure", id: 12 },
    { genre: "Animation", id: 16 },
    { genre: "Comedy", id: 35 },
    { genre: "Crime", id: 80 },
    { genre: "Family", id: 10751 },
    { genre: "Fantasy", id: 14 },
    { genre: "History", id: 36 },
    { genre: "Mystery", id: 9648 },
    { genre: "Science Fiction", id: 878 },
    { genre: "Thriller", id: 53 },
    { genre: "War", id: 10752 },
    { gemre: "Westerm", id: 37},
  ];
  let genreList = [];
  let numOfGenres = 0;

  function addGenre(item) {
    genreList.add(item);
    numOfGenres += 1;
  }

  return (
    <div className='genre-select-container'>
      <ul>
        {
          props.genresList.map((item) => {
            return (
              <li key={item.id} onClick={() => genreClick(item.id)}>{item.genre}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Genres;