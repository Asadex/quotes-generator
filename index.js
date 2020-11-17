let author = document.getElementById('author')
let quote = document.getElementById('quote')

let newQuoteButton = document.getElementById("newQuoteButton")

newQuoteButton.addEventListener('click',newQuote)

function newQuote(){
    fetch("http://localhost/projects/quotes-generator/quotes.JSON")
    .then( res => res.json())
    .then( data => {
        let random = Math.floor(Math.random() * data.length)
        //console.log(data[random].author)
        author.textContent = '~ ' + data[random].author;
        quote.textContent =  data[random].content
    })
}