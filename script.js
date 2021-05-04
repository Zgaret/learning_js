'use strict';
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

const persinalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt('Один из последних просмотренных фильмов?'),
    b = +prompt('На сколько его оцените?'),
    c = prompt('Один из последних просмотренных фильмов?'),
    d = +prompt('На сколько его оцените?');

persinalMovieDB.movies[a] = b;
persinalMovieDB.movies[c] = d;
console.log(persinalMovieDB.movies);