import React from 'react'

const GroceryCard = ({item}) => {
    const rate = parseInt(100*Math.random(0,8));
    const time = parseInt(20*Math.random(100,200));
    console.log(item)
  return (
    <div className="res-card p-3 m-2 bg-slate-200 w-fit min-h-[38rem] max-h-[38rem] flex flex-col justify-evenly items-center rounded-2xl">
        <img
          className="res-logo w-[20rem] mb-[1rem] min-h-[10rem]"
          src={
            item?.searchResults[0]?.results[0]?.image
          }
        />
        <h3 className="font-bold text-red-500 text-xl">{item.searchResults[0].results[0].name}</h3>
        <h4 className="font-semibold w-[15rem] text-center">Rs.{rate}/kg</h4>
        <h4 className="font-semibold">{time} mins away</h4>
        <button className='border-0 border-black rounded-lg p-2 w-32 font-normal text-black bg-green-500 hover:bg-green-600'>Buy Now</button>
      </div>
  )
}

export default GroceryCard
