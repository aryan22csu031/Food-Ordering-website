import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
    const [showItems, setShowitems] = useState(false);
    const handleClick = () => {
        setShowitems(!showItems);
    }
  const { data } = props;
  console.log(data);
  return (
    <div className="">
      <div
        className="w-1/2 mx-auto my-4 bg-slate-200 shadow-lg p-4 cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex justify-between">
          <span className="text-red-500 font-semibold items-center mb-3">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <div>
            {showItems && <ItemList items={data.itemCards} />}
          
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
