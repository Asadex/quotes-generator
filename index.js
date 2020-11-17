let quote = document.getElementById('quote');
let author = document.getElementById('author');

function newQuote(){
    let quoteObject = getRandomQuote();
    changeQuote(quoteObject);
}

function getRandomQuote(){
    let a = {"_id":"zjULM0EKmwKH","tags":["famous-quotes"],"content":"We are what we repeatedly do. Excellence, then, is not an act but a habit.","author":"Aristotle","length":74}
    return a
}

function changeQuote(quoteObject){
    quote.textContent = quoteObject['content'];
    author.textContent = "~ " + quoteObject.author
}

window.addEventListener('click',newQuote)