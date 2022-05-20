function getLength(obj){
  return obj.length;
}
function getTotalBooksCount(books) {
  //Objective - Return number of book objects in the array
  //return the book array length;
  //return books.length; 
  return getLength(books);                                     
}

function getTotalAccountsCount(accounts) {
  //Objective - Return number of account objects in accounts array
  //return the accounts array length;
  //return accounts.length;
  return getLength(accounts);                                   
}

function getBooksBorrowedCount(books) {
  //Objective - returns a number representing books checkout out.
  //filter through the book borrows that are currently checked out;
let notReturned = books.filter(book => book.borrows[0].returned === false) 
//return the length of the new array with the checked out books;
  return notReturned.length;
};
 
//helper function
function _sortObjectsByValues(obj){
  let keys = Object.keys(obj);
  keys.sort((keyA, keyB) =>{
    if(obj[keyA] > obj[keyB]){
      return -1;
    } else{
      return 1;
    }
  })
  return keys;
}

function getMostCommonGenres(books) {
  //objective - return an array representing most common occurring genres;
  //order from most common the least common;
  //use reduce method to get book genres;
let count = books.reduce((acc, book)=> {
if(acc[book.genre]){
  //for every book genre, add one to the count;
  acc[book.genre]+=1;
}else{
  acc[book.genre]=1
}
//return the total number of each genre;
return acc;
}, {});
//console.log(count)
//helper function will help sort the keys and values;
let keys = _sortObjectsByValues(count);
//use map method to create an array that has genre names as a name key, and the returned count for each genre as the count key;
return keys.map(genre=>({name:genre, count:count[genre]})).slice(0, 5);
};



function getMostPopularBooks(books) {
  // objective - return an array of the 5 most popular books;
  //most common to least common;
  //use map method to set up new keys for the new array;
const result = books.map((book)=>{
  let newBookCount = {
    name: book.title,
    count: book.borrows.length
  };
  return newBookCount;
});
//sort through the book titles, to sort the count values from greatest to least;
result.sort((nameA, nameB)=> nameA.count < nameB.count ? 1 : -1);
//only return the first 5 results in the array;
result.splice(5);
console.log(result);
return result;
};
  

  


function getMostPopularAuthors(books, authors) {
  // objective - return an array of the most popular authors whos books have been checked out;
  //return only 5 objects;
//use reduce to get an array of objects;
const popularAuthors = books.reduce((acc, book) =>{ 
  // destructure the authors and borrows;
  const { authorId, borrows } = book;
  // use find to find author ids that match author ids for books;
  const authorObj = authors.find(author => author.id === authorId);
  // template literals set to name variable for the authors full name;
  const name = `${authorObj.name.first} ${authorObj.name.last}`;
  // obtain the number of times the book has been borrowed;
  const count = borrows.length;
  // check to see if the author has already been entered;
  const authExists = acc.find(auth => auth.name === name);
  if(authExists) {
    // if code runs past here, then author already exists in new array, so need to add 1 to the current count for that given author;
     authExists.count += count;
  } else {
    //if no entry so far for the current author, add the author;
    const newAuthor = {
      name,
      count
    };
    acc.push(newAuthor);
  }
  return acc;
}, []);
//sort by greatest count  to lowest count;
const sortedPopAuthors = popularAuthors.sort((a, b) => a.count < b.count ? 1 : -1);
// only return the top 5!
const topFiveAuthors = sortedPopAuthors.slice(0, 5);
return topFiveAuthors;
};



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
