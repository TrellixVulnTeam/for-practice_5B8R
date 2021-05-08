let movies = [
  {
    id: "0",
    name: "Star Wars",
    score: 1,
  },
  {
    id: "1",
    name: "Avengers",
    score: 80,
  },
  {
    id: "2",
    name: "The Godfather",
    score: 100,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === String(id));
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  // 같은 id가 없도록 한다.
  const cleanedMovies = movies.filter((movie) => movie.id !== String(id));
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
