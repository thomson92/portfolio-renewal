import React from 'react'
import { ICard } from '../model/Card.model';

export default function Card({ card }: { card: ICard }) {
    return (
        <figure className="cards__el">
            <img src={card.icon}/>
            <figcaption>{card.name}</figcaption>
        </figure>
    )
}
