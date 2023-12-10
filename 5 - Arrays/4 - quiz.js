/*
1. You are given an array of numbers representing the daily temperatures in Celsius. Your task is to write JavaScript code to perform the following tasks:
  a. Find and print the highest temperature.
  b. Find and print the lowest temperature.
  c. Calculate and print the average temperature.
  d. Create a new array containing only temperatures above a certain threshold (e.g., 25 degrees).
  e. Determine and print the day with the highest temperature.

  Expected output:
    Highest temperature: 30
    Lowest temperature: 22
    Average temperature: 26.428571428571427
    Temperatures above 25 degrees: [28, 26, 30, 29]
    Day with the highest temperature: Day 6
*/

//code here
let dailyTemperatures = [22, 25, 28, 24, 26, 30, 29];







/*
2. Consider a 2D array representing a seating arrangement in a theater. Each seat is represented by a number, and rows and columns are numbered starting from 1.

  a. Print Seat Numbers
      Write a program to print the seat numbers.

      Expected Output:
        Row 1: 1 2 3 4
        Row 2: 5 6 7 8
        Row 3: 9 10 11 12
        Row 4: 13 14 15 16

  b. Find Seat
      Create a function called "findSeat(row, col)" that takes row and column numbers as parameters and returns the seat number. Test the function with different row and column values.
      console.log(findSeat(2, 3)); // Expected Output: Seat 7
      console.log(findSeat(4, 2)); // Expected Output: Seat 14

  c. Reserve Seat
      Create a function called "reserveSeat(row, col)" that marks a seat as reserved by replacing the seat number with "X". Print the updated seating arrangement after reserving a seat.
      
      Function Called:
        reserveSeat(3, 1);
        reserveSeat(1, 4);

      Expected Output:
        Row 1: 1 2 3 X
        Row 2: 5 6 7 8
        Row 3: X 10 11 12
        Row 4: 13 14 15 16

  d. Check Seat Availability
      Create a function called "isSeatAvailable(row, col)" that returns a boolean indicating whether a seat is available.
      console.log(isSeatAvailable(2, 4)); // Expected Output: true
      console.log(isSeatAvailable(3, 1)); // Expected Output: false

  e. Count Available Seats
      Create a function called "countAvailableSeats()" that returns the total number of available seats.
      console.log(countAvailableSeats()); // Expected Output: 14 (2 seats has been reserved)
*/

let theaterSeats = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

//code here
