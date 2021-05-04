'use strict';
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

const persinalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let lastMovie = prompt('Один из последних просмотренных фильмов?');
persinalMovieDB[movies] = lastMovie;
let filmScore = +prompt('На сколько его оцените?');
persinalMovieDB.movies[lastMovie] = filmScore;
console.log(persinalMovieDB.movies);