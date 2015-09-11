window.onload = function () {
  var quotes = [
    "He's not the Messiah, he's a very naughty boy!", 
    "It's just a flesh wound!",
    "Run away!, run away!",
    "Nobody expects the Spanish Inquisition!",
    "Aside from the roads, the legal system, sanitation, education, medicine, what have the Romans done for us?",
    "I could be arguing in my spare time",
    "I fart in your general direction",
    "Your mother was a hamster and your father smelled of elderberries",
    "He must have died while carvin it",
    "The castle of aaarrrgghh",
    "Look you stupid bastard. You've got no arms left",
    "It's just wafer thin mint",
    "Albertross!"
  ];
  var h3 = document.querySelectorAll("h3 > a");
  for (var i = 0; i < h3.length; i++) {
    h3[i].innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
  }
};