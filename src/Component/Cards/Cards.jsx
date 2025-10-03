import React, { use } from 'react';
import Card from '../Card/Card';

const Cards = ({cardPromise, onCardClick}) => {
    const cardsData = use(cardPromise);
    return (
        <div className='max-w-[1200px] mx-auto  grid grid-cols-2 gap-5'>
            
            {
              cardsData.map(card => <Card card={card} onCardClick={onCardClick}></Card>)  
            }
        </div>
    );
};

export default Cards;