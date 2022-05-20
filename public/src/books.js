function findAuthorById(authors, id) {
  //Objective - returns the author objects that has a matching id with the id argument.
  return authors.find(author => author.id === id);                                     //Uses the find method to find an author object that matches the given id argument.
}

function findBookById(books, id) {
  //Objective- return book object that matches the given string id parameter
  return books.find(book => book.id === id);                                     // Uses the find method to find any book that matches the given id as a string.
}

function partitionBooksByBorrowedStatus(books) {
  //returns an array with two arrays nested inside;
  //first array = books checked out;
  //second array = books returned;
  //assign checked out books to a variable using filter method, thus creating 'checkedOut array';
 let checkedOut = books.filter(book => book.borrows[0].returned === false); 
 //declare a variable for returned books. Also use filter to create a 'returned' array;
let returned = books.filter(book => book.borrows[0].returned);  
//Combine the 'checkOut' array and 'returned' array into one array, spread operator;         
let result = [[...checkedOut], [...returned]];                            
      return result;                                                      
}

function getBorrowersForBook(book, accounts) {
  // Return an array, 10 or fewer account objects;
  let result = [];
  //assign borrows to a variable;
  let borrowed = book.borrows;  
  //use forEach method to find matching id's;
  borrowed.forEach(borrow=>{
    let accountObj = accounts.find(acc => acc.id === borrow.id);
    let account1 = accountObj;
    account1['returned'] =  borrow.returned;
    //push matching id's into an array;
    result.push(account1);
  })
  console.log(result);
  //use slice to return only the first 10 objects;
  return result.slice(0,10);
}
//jn

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
