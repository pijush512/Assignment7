import React from "react";
import cricle from '../../assets/Ellipse 22.png'
import date from '../../assets/date.png'
const Card = ({ card }) => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="bg-white mb-5 p-5 rounded-xl shadow-sm">
        <div className="flex gap-5  justify-between">
            <h3 className="font-semibold text-lg">{card.title}</h3>
            <button className="bg-green-300 flex items-center gap-2 rounded-xl px-2 py-1">
              <div>
                <img src={cricle} alt="" />
              </div>
              {card.status}
            </button>
        </div>
        <p className="mt-2">{card.description}</p>
        <div>
          <div className="flex justify-between mt-2">
            <div className="flex items-center gap-4">
              <p>#{card.id}</p>
              <p>{card.priority}</p>
            </div>
            <div className="flex items-center gap-4">
              <p>{card.assignedTo}</p>

              <div className="flex gap-2">
                <img src={date} alt="" />
                <p>{card.date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
