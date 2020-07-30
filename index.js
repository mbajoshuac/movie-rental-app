/**
 * This is a Moive Rental Api demo created by Joshua Mba
 * 
 */

const search_btn = document.getElementById('search-btn');
const rent_btn = document.getElementById('rent-btn');
const movie_table = document.getElementById('movie-table');

//movie array
const movies = [{
        title: "Masked Idiot",
        genre: "Comedy",
        year: 2020,
        rented: false
    },
    {
        title: "Bad boys for Life",
        genre: "Action",
        year: 2020,
        rented: false,
    },
    {
        title: "Titans",
        genre: "Action",
        year: 2024,
        rented: false,
    }
]

console.log(movies);
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

                        `<td>${movie.title}</td>
                            <td>${movie.genre}</td>
                            <td>${movie.year}</td>
                            <td><button onclick="movie.rent_movie(${index})">Rent Now</button></td>`
                    );
                }
            });
        }
    };
    rent_movie(index) {
        this.movies[index].rented = true;
        alert('Successfully Rented');
        // movie.list_movies();

    }
}

let movie = new Movieslibrary(movies);

//function to call rent method

// let rent = movie.rent_movie()