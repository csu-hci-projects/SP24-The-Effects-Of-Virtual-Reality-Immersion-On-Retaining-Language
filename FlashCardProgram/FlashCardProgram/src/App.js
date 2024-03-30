import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card.js';
import DrawButton from './DrawButton/DrawButton.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.updateCard = this.updateCard.bind(this);
    this.getNextCard = this.getNextCard.bind(this);
    this.getPrevCard = this.getPrevCard.bind(this);

    this.state = {
      cards: [ //10 sample cards to ensure that the program runs 
        { id: 1, english: "glass ", foreign: "gilasa" },
        { id: 2, english: "fruits", foreign: "phalaphula" },
        { id: 3, english: "sink", foreign: "dubne" },
        { id: 4, english: "wall", foreign: "parkhala" },
        { id: 5, english: "book", foreign: "pustaka" },
        { id: 6, english: "door", foreign: "dhoka" },
        { id: 7, english: "table", foreign: "talika" },
        { id: 8, english: "lamp", foreign: "batti" },
        { id: 9, english: "shoes", foreign: "jutta" },
        { id: 10, english: "laptop", foreign: "lyapatapa" },
        { id: 11, english: "box", foreign: "baksa" },
        { id: 12, english: "money", foreign: "paisa" },
        { id: 13, english: "chair ", foreign: "kursi" },
        { id: 14, english: "bed", foreign: "ochyana" },
        { id: 15, english: "phone", foreign: "phona" },
        { id: 16, english: "headphone", foreign: "hedaphona" },
      ],
      currentCardIndex: 0,
      currentCard: {}
    }
  }

  UNSAFE_componentWillMount() {
    const currentCards = this.state.cards;

    this.setState({
      cards: currentCards,
      currentCard: currentCards[0]
    })
  }

  getRandomCard(currentCards) {
    const randomIndex = Math.floor(Math.random() * currentCards.length);
    return currentCards[randomIndex];
  }

  getNextCard() {
    let nextIndex = this.state.currentCardIndex + 1;
    if (nextIndex >= this.state.cards.length) {
      nextIndex = 0; // Loop back to the first card if reached the end
    }
    this.setState({
      currentCardIndex: nextIndex,
      currentCard: this.state.cards[nextIndex]
    });
  }

  getPrevCard() {
    let prevIndex = this.state.currentCardIndex - 1;
    if (prevIndex < 0) {
      prevIndex = this.state.cards.length - 1; // Loop to the last card if reached the beginning
    }
    this.setState({
      currentCardIndex: prevIndex,
      currentCard: this.state.cards[prevIndex]
    });
  }

  updateCard() {
    this.setState(prevState => ({
      currentCard: this.getRandomCard(prevState.cards)
    }));
  }

  render() {
    return (
      <div className="App">
        <div className="TopDisplay">
        <h3> English/Nepali Flashcard Application</h3>
        <p>
          This flashcard application is intended to help English speakers to 
          learn a few words in the Nepali language. 
        </p>
          <ul>
            <li> Press and hold card to see the reverse side.</li>
            <li> Use arrows to navigate through vocabulary list.</li>
            <li>Use random button to randomize card pulled.</li>
          </ul>
      </div>
            <div className="CardRow">
              <Card english={this.state.currentCard.english}
                foreign={this.state.currentCard.foreign}
              />
            </div>
            <div className="ButtonRow">
              <DrawButton
                drawCard={this.updateCard}
                getNextCard={this.getNextCard}
                getPrevCard={this.getPrevCard}
              />
            </div>
        </div>
        );
  }
}

        export default App;
