const quotes = [
  { quote: "He that travels far knows much" },
  { quote: "Genius is nothing but a great aptitude for patience" },
  { quote: "A man of words and not of deeds is like a garden full of weeds" },
  { quote: "When poverty comes in at the door, loves flies out the window" },
  { quote: "The worst friend and enemy is but Death" },
  { quote: "A flying crow always catches something" },
  { quote: "Love truth, but pardon error" },
  { quote: "What is worth doing at all is worth doing well" },
];

const quote = document.querySelector(".quote span:firstchild");

quote.textContent = quotes[1]["quote"];
