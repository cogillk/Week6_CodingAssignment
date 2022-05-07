class Deck {
  constructor() {
    this.deck = []; // the array is empty and cards will be pushed to the array
    this.suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    this.ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King','Ace'];
    this.playerOneCards = []; // array of cards dealt to player one
    this.playerTwoCards = []; // array of cards dealt to player two
    this.playerOnePoints = []; // player one's Points
    this.playerTwoPoints = []; // player two's points
  }

  createDeck () {
    for(let suit in this.suits) {
      for(let rank in this.ranks) {
        this.deck.push(this.ranks[rank] + ' ' + this.suits[suit]);
        console.log(this.ranks[rank] + this.suits[suit]);
      } //this loops through the ranks and suit to create Cards: '(rank) of (suit)
    }
  }
  
  shuffleDeck() {
    const deck = this.deck
    let m = deck.length;
    let i = 0;
    console.log('shuffling ' + m + " cards" )
    while (m) {
      i = Math.floor(Math.random() * m--);
      [deck[m], deck[i]] = [deck[i], deck[m]]
    } 
    return this.deck; //this pulls a random card for [m] and replaces it with card [i] and loops through deck
  }
  
  deal () {
    for (let i = 0; i < this.deck.length; i++) {
      let cardDealt = this.deck[i]; //looping through the deck
      if(i / 2 == Math.floor(i / 2)) { //if the incremented value is even
        this.playerOneCards.push(cardDealt); //push (deal) the card to player one
      } else { //if the incremented value is odd
        this.playerTwoCards.push(cardDealt); //push (deal) the card to player two
      }
    }
    console.log(`The deck has been dealt between two players`);

    return [this.playerOneCards, this.playerTwoCards]
    }

  static cardValue (c) {
    let value = c.split(' '); //this will split the card string into an array which allows us to give a numerical value to the face-cards
      switch (value[0]) {
      case 'Jack':
        return '11';
        break;
      case 'Queen':
        return '12';
        break;
      case 'King':
        return '13';
        break;
      case 'Ace':
        return '14';
        break;
      default: 
        return value[0]; //if it is not a face card, it will return the numerical value as a string
      }
  }  


  play () {
    for(let i = 0; i < this.playerOneCards.length; i++) { 
      if (parseInt(Deck.cardValue(this.playerOneCards[i])) > parseInt(Deck.cardValue(this.playerTwoCards[i]))) {
        console.log(`${this.playerOneCards[i]} is greater than ${this.playerTwoCards[i]}
        Player one wins`);
        this.playerOnePoints++;
      } else if (parseInt(Deck.cardValue(this.playerOneCards[i])) < parseInt(Deck.cardValue(this.playerTwoCards[i]))) {
        console.log(`${this.playerOneCards[i]} is less than ${this.playerTwoCards[i]}
        Player two wins`);
        this.playerTwoPoints++;
      } else {
        console.log(`${this.playerOneCards[i]} is equal to ${this.playerTwoCards[i]}
          they are tied!`);
      } /* this loops through the each player's cards and determines who won. The numerical card value is considered in order to determine which 
      player wins the round. The cardValue function allows us to drop the suit and only evalute the numerical value of the card. The parseInt allows us to
      convert any string values to numeric values. The winner of each round wins a point, and no points are awarded for a round that results in a tie.
      */
    }
    if(this.playerOnePoints > this.playerTwoPoints) {
      return `Player One wins the game with a score of ${this.playerOnePoints} while Player Two had ${this.playerTwoPoints} points.`;
    } else if (this.playerOnePoints < this.playerTwoPoints) {
      return `Player Two wins the game with a score of ${this,this.playerTwoPoints} while Player One had ${this.playerOnePoints} points.`;
    } else {
      return `Player One's points are ${this.playerOnePoints} and Player Two's points are ${this.playerTwoPoints} resulting in a tied game.`;
    } /* this determines the winner of the game based on the number of points that each player has been awarded. The game is tied if both
    players have the same score.
    */
  }
}


var deck1 = new Deck()
console.log(deck1.createDeck());
console.log(deck1.shuffleDeck());
console.log(deck1.deal());
console.log(deck1.play());