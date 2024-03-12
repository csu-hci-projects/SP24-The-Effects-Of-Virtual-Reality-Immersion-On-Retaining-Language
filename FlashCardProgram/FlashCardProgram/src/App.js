import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card.js';
import DrawButton from './DrawButton/DrawButton.js';

class App extends Component{
  constructor(props){
    super(props);

    this.updateCard = this.updateCard.bind(this);

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
      currentCard: {}
    }
  }

  componentWillMount(){
    const currentCards = this.state.cards;

    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
  }
  
  getRandomCard(currentCards){
    var randomIndex = Math.floor(Math.random() * currentCards.length);
    var card = currentCards[randomIndex];
    if(card === this.state.currentCard){
      this.getRandomCard(currentCards)
    }
    return(card);
  }

  updateCard(){

    const currentCards = this.state.cards
    this.setState({
        currentCard: this.getRandomCard(currentCards)
    })
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
            <DrawButton drawCard={this.updateCard}/>
        </div>
      </div>
    );
  }
}

export default App;
