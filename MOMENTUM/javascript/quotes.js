const quotes = [
    {
        quote: "Age is no guarantee of maturity.",
        author: "Lawana Blackwell"
    },
    {    quote: "Life is pleasant. Death is peaceful. It's the transition that's troublesome.",
        author: "Isaac Asimov"
    },
    {    quote: "There is more to life than increasing its speed",
        author: "Mahatma Gandhi"
    },
    {    quote: "We must use time as a tool, not as a crutch.",
        author: "John F. Kennedy"
    },
    {    quote: "Time cools, time clarifies; no mood can be maintained quite unaltered through the course of hours.",
        author: "Mark Twain"
    },
    {    quote: "Look not mournfully into the past. It comes not back again. Wisely improve the present. It is thine. Go forth to meet the shadowy future, without fear.",
        author: "Henry Wadsworth Longfellow"
    },
    {    quote: "Life's greatest happiness is to be convinced we are loved.",
        author: "Victor Hugo"
    },
    {    quote: "Let no one ever come to you without leaving better and happier.",
        author: "Mother Teresa"
    },
    {    quote: "Only in the agony of parting do we look into the depths of love.",
        author: "George Eliot"
    },
    {    quote: "Thank you for sending me a copy of your book. I'll waste no time reading it.",
        author: "Moses Hadas"
    },
    
];

const quoteForm = document.querySelector("#quote");
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

quoteForm.classList.add("quotes_point");

function randomArray() {

    todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

    quote.innerText = todaysQuotes.quote;
    author.innerText = todaysQuotes.author;

};

randomArray();