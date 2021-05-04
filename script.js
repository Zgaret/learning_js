'use strict';
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

const persinalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}