let author = document.getElementById('author')
let quote = document.getElementById('quote')
//let quotesObject = JSON.parse(quotes)
let newQuoteButton = document.getElementById("newQuoteButton")

newQuoteButton.addEventListener('click',newQuote)


// function newQuote(){
//     let random = Math.floor(Math.random() * data.length+1)
        
//     author.classList.add("fade")
//     quote.classList.add('fade')

//     author.textContent = '~ ' + data[random].author;
//     quote.innerHTML =  " &nbsp " + data[random].content
// }

function newQuote(){
    let myInit ={
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        },
        mode: 'cors',
        cache: 'default'
    };

    let quotes = new Request("https://asadex.github.io/quotes-generator/quotes.json",myInit)

    fetch(quotes)
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