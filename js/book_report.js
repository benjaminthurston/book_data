var message = '';
var book;
var search;

// get title form user
search = prompt('Search the book you own: type title [bible] (or type "quit" to end)');
if (search.toLowerCase() === 'quit'){
  // do nothing
} else {
 checkBooksForMatch();
}





// HELPER FUNCTIONS 
function checkBooksForMatch(){
  

  for (var i = 0; i < books.length; i += 1) {
    book = books[i];
    // compare title to input search text
    if (book.title === search){
      //console.log('match found')
      // if match create html > message
      message = getBookReport(book);
      // print message to page
      print(message);
    }
  }
}

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}
function getBookReport(book){
  //aconsole.log('getbook called with ', book)

  var report = '<h2>Title: ' + book.title + '</h2>';
  report += '<p>Author: ' + book.author + '</p>';
  report += '<p>Year: ' + book.year + '</p>';
  report += '<p>Synopsis: ' + book.synopsis + '</p>';
  return report;
}



