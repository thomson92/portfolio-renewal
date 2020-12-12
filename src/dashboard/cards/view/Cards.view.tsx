import React from 'react'
import Card from '../../card/view/Card.view';
import { CardsController } from '../controller/Cards.controller'

const renderCards = () => {
    return CardsController.CARDS.cards.map(card => {
        return <Card card={card} key={card.id} />;
    });
};

const Cards: React.FC = () => {
    return (
        <div className="cards">
            {renderCards()}
        </div>
    )
}

export default Cards;
