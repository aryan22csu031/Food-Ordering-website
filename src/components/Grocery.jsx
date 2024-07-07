import React, { useEffect, useState } from 'react'
import GroceryCard from './GroceryCard'

const Grocery = () => {
  const apiKey="de2965f2809a4cec998ca602d7456597";
  const [itemName,SetItemName] = useState("");
  const [itemData, setItemData] = useState("apple");
  useEffect(()=>{
    fetchItem();
  },[]);

  const fetchItem = async () => {
    const data = await fetch('https://api.spoonacular.com/food/search?query='+ itemName + '&number=1&apiKey=' + apiKey);
    const json = await data.json();
    setItemData(json);
    console.log(json);
  }
  console.log(itemName)
  return (
    <div className='flex flex-col justify-evenly items-center'>
      <div className="head my-7 flex flex-col items-center">
        <h1 className='text-7xl font-extrabold text-green-500'>EaseMart</h1>
        <p className=' mt-5 font-medium text-2xl '>- Your Pantry Partner</p>
      </div>
      <div className='flex justify-between my-3 gap-6'>
        <input type="text" placeholder='search items' className='border border-black rounded-xl px-2 text-wrap' onChange={(e)=> SetItemName(e.target.value)} />
        <button className='border-0 border-black rounded-lg p-2 w-20 font-normal text-black bg-red-500 hover:bg-red-600' onClick={fetchItem}>search</button>
      </div>
      <div className="body flex flex-wrap justify-around">
        <GroceryCard item = {itemData}/>
      </div>
    </div>
  )
}

export default Grocery