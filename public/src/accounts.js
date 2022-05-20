


function findAccountById(accounts, id) {
  //returns account object with matching id;
  return accounts.find(account => account.id === id);
}

function sortAccountsByLastName(accounts) {
  //returns sorted array of the provided account objects;
  //Sorted alphabetically, by last name;
  return accounts.sort((account1, account2) => account1.name.last > account2.name.last ? 1 : -1)
}

function getTotalNumberOfBorrows(account, books) {
  //returns a number representing times the account id appears in book objects;
  const accId = account.id;
  //declare a variable to store total in
  let total = 0;
  //use forEach method to find how many times borrows id equals account id
  books.forEach(book => book.borrows.forEach(borrow => accId === borrow.id && total++));
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
 // find the checked out books by account
 let result = [];
 //going through each book object individually.
 books.forEach(book => {
   //if there are book borrow, use find to find item(book) id's that match account id's and have not been returned(false);
   if(book.borrows.find(item => item.id === account.id && item.returned === false)){
     result.push(book);
     console.log(result);
   };
  });
  //use find method to find author ids matching author id in the books objects;
   result.forEach(book => {
     let authorFind = authors.find(author => author.id === book.authorId)
     book['author'] = authorFind
   });
      return result;
};









module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
