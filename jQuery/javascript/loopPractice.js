var vacationSpots = ['Hualien', 'Taipei', 'Taitung'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

for(var i = vacationSpots.length-1; i >= 0; i--) {
  console.log('I would love to visit ' + vacationSpots[i]);
}


var myPlaces = ['Hualien', 'Taitung', 'Taipei'];
var friendPlaces = ['Taichung', 'USA', 'Canada'];

for (var i = 0; i < myPlaces.length; i++) {
  console.log(myPlaces[i]);
  for(var j = 0; j < friendPlaces.length; j++) {
    if(myPlaces[i] === friendPlaces[j]) {
      console.log(friendPlaces[j]);
    } else {
      
    }
  }
}

var cards = ['Diamond', 'Spade', 'Heart', 'Club'];
var currentCard = 'Heart';

while (currentCard !== 'Spade') {
  console.log(currentCard);
  
  var randomNumber = Math.floor(Math.random() * 4);
  
  currentCard = cards[randomNumber];
}
console.log('Found a Spade!');