const quotes = [
  { quote: "He that travels far knows much", author: "Unknown" },
  {
    quote: "Genius is nothing but a great aptitude for patience",
    author: "Unknown",
  },
  {
    quote: "A man of words and not of deeds is like a garden full of weeds",
    author: "Unknown",
  },
  {
    quote: "When poverty comes in at the door, loves flies out the window",
    author: "Unknown",
  },
  { quote: "The worst friend and enemy is but Death", author: "Unknown" },
  { quote: "A flying crow always catches something", author: "Unknown" },
  { quote: "Love truth, but pardon error", author: "Unknown" },
  {
    quote: "What is worth doing at all is worth doing well",
    author: "Unknown",
  },
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const randomNumber = Math.floor(Math.random() * quotes.length);

const todaysQuote = quotes[randomNumber]["quote"];
const todaysAuthor = quotes[randomNumber]["author"];

quote.textContent = todaysQuote;
author.textContent = todaysAuthor;
