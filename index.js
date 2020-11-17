let author = document.getElementById('author')
let quote = document.getElementById('quote')

let newQuoteButton = document.getElementById("newQuoteButton")

newQuoteButton.addEventListener('click',newQuote)

function newQuote(){
    fetch("quotes.JSON")
    .then( res => res.json())
    .then( data => {
        let random = Math.floor(Math.random() * data.length+1)
        
        // author.classList.add("fade")
        // quote.classList.add('fade')

        author.textContent = '~ ' + data[random].author;
        quote.innerHTML =  " &nbsp " + data[random].content
        
    })
    // setTimeout(function(){
    //     author.classList.remove('fade')
    //     quote.classList.remove('fade')}
    //     ,500)
}