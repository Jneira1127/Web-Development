//local and global variables
let quoteButton = document.getElementById("Btn");

//functions and events
quoteButton.addEventListener("click", function () {
  //local variables
  const quote = document.getElementById("Quote");
  const author = document.getElementById("Author");
  const explain = document.getElementById("Explain");
  let randomIND = Math.floor(Math.random() * inspire.length);

  //changing the text to the right quote, author, and explanation according to the random index
  quote.innerText = inspire[randomIND].quote;
  author.innerText = "-" + inspire[randomIND].author;
  explain.innerText = inspire[randomIND].explain;
});
