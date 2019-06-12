var message = '';
var books;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

for (var i = 0; i < books.length; i += 1) {
  books = books[i];
  message += '<h2>Title: ' + books.title + '</h2>';
  message += '<p>Author: ' + books.author + '</p>';
  message += '<p>Year: ' + books.year + '</p>';
  message += '<p>Synopsis: ' + books.synopsis+ '</p>';
}
print(message);




