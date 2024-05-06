import React, { Component } from 'react';
import './DrawButton.css';

class DrawButton extends Component{
    constructor(props){
        super(props);

        this.drawCard = this.drawCard.bind(this);
        this.handleNextCard = this.handleNextCard.bind(this);
        this.handlePrevCard = this.handlePrevCard.bind(this);
    }

    drawCard(){
        this.props.drawCard();
    }
    
    handleNextCard(){
        this.props.getNextCard();
    }

    handlePrevCard(){
        this.props.getPrevCard();
    }

    render(props){
        return(
            <div className= "buttonContainer">
                <button className="button" onClick={this.handlePrevCard}>&#x2B05;</button>
                <button className="button" onClick={this.drawCard}>Random Card</button>
                <button className="button" onClick={this.handleNextCard}>&#x2B95;</button>
            </div>
        )
    }
}

export default DrawButton