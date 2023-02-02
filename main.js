// variable
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');


// function 
function randomQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            quote.textContent = `"${data.content}"`;
            person.textContent = `${data.author}`;
            //console.log(data.json);
        });
}

randomQuote();
btn.addEventListener('click', () => {
    randomQuote();
});