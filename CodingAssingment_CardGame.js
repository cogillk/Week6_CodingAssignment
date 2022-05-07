class Deck {
    constructor() {
      this.deck = []; //the array is empty and cards will be pushed to the array
      var suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
      var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King','Ace'];
    };

      createDeck () {
      for(let suit in suits) {
        for(let rank in ranks) {
          this.deck.push(`${ranks[rank]} of ${suits[suit]}`)
        } //this loops through the ranks and suit to create Cards: '(rank) of (suit)
      } return deck.createDeck;
    };
    
    shuffleDeck() {
        for (let i = deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = deck[i];
            deck[i] = deck[j];
            deck[j] = temp;
         } return deck.shuffleDeck; //this pulls a random card for [i] and replaces it with card [j] and loops through deck
    }
    
}


var deck1 = new Deck()
console.log(deck1.createDeck());




