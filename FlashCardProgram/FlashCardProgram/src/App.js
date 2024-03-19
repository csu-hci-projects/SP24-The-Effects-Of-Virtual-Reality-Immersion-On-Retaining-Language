import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card.js';
import DrawButton from './DrawButton/DrawButton.js';

class App extends Component{
  constructor(props){
    super(props);

    this.updateCard = this.updateCard.bind(this);
    this.getNextCard = this.getNextCard.bind(this);
    this.getPrevCard = this.getPrevCard.bind(this);

    this.state = {
      cards: [ //10 sample cards to ensure that the program runs 
        {id: 1, english: "English1", foreign: "Foreign1"},
        {id: 2, english: "English2", foreign: "Foreign2"},
        {id: 3, english: "English3", foreign: "Foreign3"},
        {id: 4, english: "English4", foreign: "Foreign4"},
        {id: 5, english: "English5", foreign: "Foreign5"},
        {id: 6, english: "English6", foreign: "Foreign6"},
        {id: 7, english: "English7", foreign: "Foreign7"},
        {id: 8, english: "English8", foreign: "Foreign8"},
        {id: 9, english: "English9", foreign: "Foreign9"},
        {id: 10, english: "English10", foreign: "Foreign10"},
      ],
      currentCardIndex: 0,
      currentCard: {}
    }
  }

  UNSAFE_componentWillMount(){
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
