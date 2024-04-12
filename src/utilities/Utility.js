export function joinGenres(genres) {
  let joinedGenres = "";
  if (genres) {
    genres.map((genre, index) => {
      if (index > 0) {
        joinedGenres += ` & ${genre.name}`;
      } else {
        joinedGenres = `${genre.name}`;
      }
    });
  }

  return joinedGenres;
}

export function movieMapperArray(movies) {
  let movieList = [];
  if (movies && movies.length) {
    movieList = movies.map((movie) => movieMapper(movie));
  }

  return movieList;
}

export function movieMapper(movie) {
  return {
    id: movie.id,
    urlImage: movie.poster_path,
    name: movie.title,
    releaseYear: extractYearFromRealeaseDate(movie.release_date),
    realeaseDate: movie.release_date,
    rating: movie.vote_average,
    durationResume: movie.runtime,
    description: movie.overview,
    genres: movie.genres.map((genre, index) => ({ name: genre, id: index })),
  };
}

// "2018-02-07"
function extractYearFromRealeaseDate(realeaseDate) {
  return realeaseDate.split("-")[0];
}
