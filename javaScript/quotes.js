const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuotes(data))


}

const displayQuotes = qoutes => {

    const blockQuote = document.getElementById('quotes')
    console.log(blockQuote);
    blockQuote.innerHTML = qoutes.quote
}

loadQuotes()