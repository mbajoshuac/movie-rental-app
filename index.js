/*
 * This is a Moive Rental App created by Joshua Mba
 */

const rent_btn = document.getElementById('rent-btn');
const movie_table = document.getElementById('movie-body');
const search_input = document.getElementById('search');

// console.log(movies);

//Movie Class and methods
class Movieslibrary {
    constructor(movies) {
        this.movies = movies;
        this.list_movies(this.movies);

    }

    list_movies(movies_array) {
        movies_array.map((movie, index) => {
            movie_table.insertAdjacentHTML(
                'beforeend',

                `<tr id= "${index}">
                            <td>${movie.title}</td>
                            <td>${movie.genre}</td>
                            <td>${movie.year}</td>
                            <td><button onclick="alert('You have successfully Rented ${movie.title} Movie '); movie.rent_movie(${index})">Rent Now</button></td>
                        </tr>`
            );
            if (movie.rented) {
                this.rent_movie(index)
            }
        });
    };
    rent_movie(index) {
        this.movies[index].rented = true;
        let movie_row = document.getElementById(index);
        movie_row.classList.add('disable');

    }

    search_movie() {
        search_input.oninput = (e) => {
            let string = e.target.value;
            string = string.toLowerCase();
            let filterd_movies = this.movies.filter(movie => movie.title.toLowerCase().includes(string));
            movie_table.innerHTML = "";
            this.list_movies(filterd_movies);
            // console.log(filterd_movies);
        }
    }
    restore_movie() {
        this.movies.map(movie => {
            if (movie.rented === true) {
                movie.rented = false;
            }
        })
        movie_table.innerHTML = "";
        this.list_movies(this.movies)
    }
}

//invoking the Moive Class
let movie = new Movieslibrary(movies);
//calling the search method 
movie.search_movie();