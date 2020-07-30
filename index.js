/**
 * This is a Moive Rental App created by Joshua Mba
 * 
 */

const search_btn = document.getElementById('search-btn');
const rent_btn = document.getElementById('rent-btn');
const movie_table = document.getElementById('movie-table');



// console.log(movies);


class Movieslibrary {
    constructor(movies) {
        this.movies = movies
    }
    list_movies() {
        if (movies.length > 0) {
            movies.map((movie, i) => {
                let index = this.movies.indexOf(movie);
                if (movie.rented === false) {
                    movie_table.insertAdjacentHTML(
                        'beforeend',

                        `<tr id= "${index}">
                            <td>${movie.title}</td>
                            <td>${movie.genre}</td>
                            <td>${movie.year}</td>
                            <td><button onclick="movie.rent_movie(${index})">Rent Now</button></td>
                        </tr>`
                    );
                }
            });
        }
    };
    rent_movie(index) {
        this.movies[index].rented = true;
        alert('Successfully Rented');
        let movie_row = document.getElementById(index);
        // console.log(movie_row);
        // console.log(index);
        movie_row.classList.add('disable');

    }

    search_movie() {


    }

    restore_movie() {
        let all_rows = document.querySelectorAll('tr');
        all_rows.forEach(function(element) {
            element.classList.remove('disable')
        });
    }
}

let movie = new Movieslibrary(movies);


// let rent = movie.rent_movie()