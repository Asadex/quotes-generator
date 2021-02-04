let author = document.getElementById('author')
let quote = document.getElementById('quote')
let newQuoteButton = document.getElementById("newQuoteButton")

newQuoteButton.addEventListener('click',newQuote)

function newQuote(){
    fetch('https://type.fit/api/quotes')
    .then( response => {
        if(response)
            return response.json();
        else {
            author.textContent = '~ Me';
            quote.innerHTML =  " &nbsp Something went wrong, try again.";
        }
    })
    .then( data => {
        let random = Math.floor(Math.random() * data.length+ 1);

        if(!!data[random].author)
            author.textContent = '~ ' + data[random].author;
        else
            author.textContent = '~ Unknown';
        quote.innerHTML =  " &nbsp " + data[random].text;
    })
}