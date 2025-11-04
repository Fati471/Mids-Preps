const movies = [
    {
        id : 1,
        Title : "Culpa Nuestra",
        Director : "Domingo González",
        Genre : "Romance",
        Language : "Spanish",
        Rating : 9.2,
        Status : "Comleted",
        Duration : "112 min",
        ReleaseYear : 2025,
    },
    {
        id : 2,
        Title : "Harry Potter and the Prisoner of Azkaban",
        Director : "Alfonso Cuarón",
        Genre : "Fantasy",
        Language : "English",
        Rating : 7.9,
        Status : "Comleted",
        Duration : "142 min",
        ReleaseYear : 2004,
    },
    {
        id : 3,
        Title : "Train to Busan",
        Director : "Yeon Sang-ho",
        Genre : "Horror",
        Language : "Korean",
        Rating : 7.6,
        Status : "Comleted",
        Duration : "118 min",
        ReleaseYear : 2016,
    },
    {
        id : 4,
        Title : "Shiddat",
        Director : "Kunal Deshmukh",
        Genre : "Romance",
        Language : "Hindi",
        Rating : 7.6,
        Status : "Comleted",
        Duration : "146 min",
        ReleaseYear : 2021,
    },
    {
        id : 5,
        Title : "Parasite",
        Director : "Bong Joon Ho",
        Genre : "Dark Comedy",
        Language : "Korean",
        Rating : 8.5,
        Status : "Comleted",
        Duration : "72 min",
        ReleaseYear : 2019,
    },
    {
        id : 6,
        Title : "The Dark Knight",
        Director : "Christopher Nolan",
        Genre : "Action",
        Language : "English",
        Rating : 9.2,
        Status : "Comleted",
        Duration : "92 min",
        ReleaseYear : 2008,
    },
    {
        id : 7,
        Title : "Culpa Mia",
        Director : "Domingo González",
        Genre : "Romance",
        Language : "Spanish",
        Rating : 6.1,
        Status : "Comleted",
        Duration : "117 min",
        ReleaseYear : 2023,
    },
    {
        id : 8,
        Title : "Your Fault",
        Director : "Domingo González",
        Genre : "Romance",
        Language : "Spanish",
        Rating : 5.2,
        Status : "Comleted",
        Duration : "118 min",
        ReleaseYear : 2024,
    },
    {
        id : 9,
        Title : "Frozen 3",
        Director : "Jennifer Lee",
        Genre : "Fantasy",
        Language : "English",
        Rating : null,
        Status : "Upcoming",
        Duration : "112 min",
        ReleaseYear : 2027,
    },
    {
        id : 10,
        Title : "Ek Deewane ki Deewaniyat",
        Director : "Milap Zaveri",
        Genre : "Romance",
        Language : "Hindi",
        Rating : null,
        Status : "Upcoming",
        Duration : "80 min",
        ReleaseYear : 2025,
    }
]


// Functions
//1
export function getAllMovies() {
    return movies;
}

//2
export function getTopRatedMovie() {
    let highest_rating = 0;
    let top_movie = null;
    for (let i = 0; i<movies.length; i++) {
        if (movies[i].Rating !== null && movies[i].Rating>highest_rating) {
            highest_rating = movies[i].Rating;
            top_movie = movies[i]
        }
    }
    return top_movie;
}

//3
export function getMoviesCount() {
    return movies.length;
}

//4
export function getUpcomingMovies() {
    let upcomingmovies = []
    for (let i=0; i<movies.length; i++) {
        if(movies[i].Status=="Upcoming") {
            upcomingmovies.push(movies[i])
        }
    }
    return upcomingmovies;
}

//5
export function getMovieDirectors() {
    let directors = [];
    for(let i = 0; i<movies.length; i++) {
        let director = movies[i].Director;
        if(director && !directors.includes(director) ){
            directors.push(movies[i].Director)
        }
    }
    return directors;
}

//6
export function getMostRecentMovie() {
    let latestReleaseYear = 0;
    let mostRecentMovie = null;
    for(let i=0; i<movies.length; i++) {
        if(movies[i].ReleaseYear>latestReleaseYear) {
            latestReleaseYear=movies[i].ReleaseYear;
            mostRecentMovie = movies[i]
        }
    }
    return mostRecentMovie;
}

//7
export function sortMoviesbyRating(order = "desc") {
    return movies.sort((a, b) => {
  
        if (a.Rating === null) return 1;
        if (b.Rating === null) return -1;

        if (order === "asc") {
            return a.Rating - b.Rating;
        } else { 
            return b.Rating - a.Rating;
        }
    });
}


//8
export function getAverageRating() {
    let total_rating=0;
    let count = 0;
    for(let i=0; i<movies.length; i++) {
        if(movies[i].Rating != null) {
            total_rating += movies[i].Rating;
            count++;
        }
    }
    return total_rating/count;
}

//9
export function getGenreWithMostMovies() {
    let frequencyGenres={};
    for(let i=0; i<movies.length; i++) {
        let genre = movies[i].Genre;
        if(genre) {
            if(frequencyGenres[genre]) {
                frequencyGenres[genre]++;
            } else {
                frequencyGenres[genre] = 1
            }
        }
    }
    let maxCount = 0;
    let mostFrequentGenre = null;

    for (let genre in frequencyGenres) {
        if (frequencyGenres[genre] > maxCount) {
            maxCount = frequencyGenres[genre];
            mostFrequentGenre = genre;
        }
    }

    return mostFrequentGenre;
}

//10
export function getDirectorWithMostMovies() {
    let frequencyDirectors={};
    for(let i=0; i<movies.length; i++) {
        let director = movies[i].Director;
        if(director) {
            if(frequencyDirectors[director]) {
                frequencyDirectors[director]++;
            } else {
                frequencyDirectors[director]=1;
            }
        }
    }
    let maxCount = 0;
    let mostFrequentDirector = null;

    for (let director in frequencyDirectors) {
        if (frequencyDirectors[director] > maxCount) {
            maxCount = frequencyDirectors[director];
            mostFrequentDirector = director;
        }
    }

    return mostFrequentDirector;
}

//11
export function getMoviesAboveRatingThreshold() {
    let movie = [];
    for(let i=0; i<movies.length; i++) {
        if(movies[i].Rating>8) {
            movie.push(movies[i].Title);
        }
    }
    return movie;
}

//12
export function getMoviesInEnglish() {
    let movie = [];
    for(let i=0; i<movies.length; i++) {
        if(movies[i].Language=="English") {
            movie.push(movies[i].Title);
        }
    }
    return movie;
}