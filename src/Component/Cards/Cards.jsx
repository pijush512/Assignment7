import React, { use } from 'react';
import Card from '../Card/Card';
import TaskStatus from '../TaskStatus/TaskStatus';

const Cards = ({cardPromise, onCardClick, tasks}) => {
    const cardsData = use(cardPromise);
    return (
      <>
        <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-4'>
          <div className="w-[90%] md:w-[75%]">
            <h3 className="font-bold text-xl mt-5 mb-5">Customer Tickets</h3>
            <div className="  grid grid-cols-1 md:grid-cols-2 gap-5">
              {cardsData.map((card) => (
                <Card card={card} onCardClick={onCardClick}></Card>
              ))}
            </div>
          </div>

          <div className='w-[90%] md:w-[25%]'>
            <h3 className="font-bold text-xl mt-5 mb-5">Task Status</h3>
            <TaskStatus tasks={tasks}></TaskStatus>
          </div>
        </div>
      </>
    );
};

export default Cards;