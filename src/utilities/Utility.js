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
