/*
1. Consider a JavaScript object representing information about a book.
  let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Fiction",
    pages: 180,
    isAvailable: true,
  };

  a. Display Book Information
    Write a function called "displayBookInfo(book)" that takes a book object as a parameter and prints its information in the following format:
    Expected Output:
      Title: The Great Gatsby
      Author: F. Scott Fitzgerald
      Year: 1925
      Genre: Fiction
      Pages: 180
      Availability: Available


  b. Check Availability
    Create a function called "checkAvailability(book)" that takes a book object as a parameter and returns a string indicating whether the book is available or not.
    console.log(checkAvailability(book)); // Expected Output: "Available"

  c. Update Book Information
    Create a function called "updateBookInfo(book, property, value)" that takes a book object, a property name, and a new value as parameters. This function should update the specified property of the book and display the updated information.

    Example:
      updateBookInfo(book, "genre", "Classic");

    Expected Output:
      Title: The Great Gatsby
      Author: F. Scott Fitzgerald
      Year: 1925
      Genre: Classic
      Pages: 180
      Availability: Available

  d. Add Property
    Create a function called "addProperty(book, property, value)" that adds a new property with a given value to the book object and displays the updated information.

    Example:
      addProperty(book, "rating", 4.5);

    Expected Output:
      Title: The Great Gatsby
      Author: F. Scott Fitzgerald
      Year: 1925
      Genre: Classic
      Pages: 180
      Availability: Available
      Rating: 4.5

  e. Remove Property
    Create a function called "removeProperty(book, property)" that removes a specified property from the book object and displays the updated information.

    Example:
      removeProperty(book, "rating");

    Expected Output:
      Title: The Great Gatsby
      Author: F. Scott Fitzgerald
      Year: 1925
      Genre: Classic
      Pages: 180
      Availability: Available
*/

let book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  genre: "Fiction",
  pages: 180,
  isAvailable: true,
};
