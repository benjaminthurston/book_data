var message = '';
var book;
var search;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}
function getBookReport(book){
  var report = '<h2>Title: ' + book.title + '</h2>';
  report += '<p>Author: ' + book.author + '</p>';
  report += '<p>Year: ' + book.year + '</p>';
  report += '<p>Synopsis: ' + book.synopsis+ '</p>';
  return report;
}
  while (true) {
    search = prompt('Search the book you own: type title [bible] (or type "quit" to end)')
    if (search === null || search.toLowerCase() === 'quit'){
    break;
  }
    for (var i = 0; i < books.length; i += 1) {
      book = books[i];
      if (book.title === search){
          message = getBookReport(book);
          print(message);
      }
      

      
    }
  }




