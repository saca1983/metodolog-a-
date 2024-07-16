'use strict';

// Escribir una función que reciba como parámetros el siguiente array anterior, y el titulo de un libro. 
// Convertir los elementos en objetos agregando la las clave id (numero autoincremental que empieza en 1) y title.   
// Devolver el valor de id correspondiente al titulo recibido como parámetro.

function getIdByTitle(bookArray, searchedTitle) {
    let booksWithId = bookArray.map((book, index) => ({
      id: index + 1,
      title: book
    }));
    let foundBook = booksWithId.find(book => book.title.toLowerCase() === searchedTitle.toLowerCase());
    return foundBook ? foundBook.id : null;
  }
  
  let searchedTitle = "The Pragmatic Programmer: Your Journey to Mastery";
  let foundId = getIdByTitle(programmingBooks, searchedTitle);
  alert(foundId); // Should print the id corresponding to the searched title