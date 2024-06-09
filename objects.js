let filmLibrary = new Map();

function addFilm(filmName, directorName, releaseYear) {
  let film = {
    film: filmName,
    director: directorName,
    year: releaseYear
  };
  filmLibrary.set(filmName, film);
  console.log(`${filmName} film has been added to the library.`);
}

function listFilms() {
  console.log("Film Library:");
  for (let [key, value] of filmLibrary) {
    console.log(`Film: ${value.film}, Director: ${value.director}, Year: ${value.year}`);
  }
}

function findFilms(searchTerm) {
  let results = [];
  for (let [key, value] of filmLibrary.entries()) {
    if (value.film.includes(searchTerm) || value.director.includes(searchTerm)) {
      results.push(value);
    }
  }
  return results;
}

function updateFilm (newFilmName, newDirectorName, newReleaseYear) {
  if (filmLibrary.has(newFilmName)) {      
    let film = filmName.length(newFilmName);
    film.director = newDirectorName;
    film.year = newReleaseYear;
    console.log(`${newFilmName} film is updated.`);
  } else {
    console.log(`${newFilmName} film is not found.`);
  }
}

function deleteFilm (filmName) {
  if (filmLibrary.has(filmName)) {
    filmLibrary.delete(filmName);
    console.log(`${filmName} film is deleted from the library.`);
  } else {
    console.log(`${filmName} film is not found.`);
  }
}

addFilm("Oppenheimer", "Christopher Nolan", 2023);
addFilm("Barbie", "Greta Gerwig", 2023);
listFilms();
findFilms("Barbie");
updateFilm("Inception", "Christopher Nolan", 2010);
deleteFilm("Barbie");
listFilms();
console.log(filmLibrary.size);