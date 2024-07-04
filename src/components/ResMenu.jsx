import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const ResMenu = () => {
    // const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {
    //     try {
    //         const data = await fetch(MENU_URL + resId);
    //         const json = await data.json();
    //         console.log(json);
    //         setResInfo(json.data);
    //     } catch (error) {
    //         console.error("Error fetching menu:", error);
    //     }
    // };
    const [showIndex, setShowIndex] = useState(null);
    
    
    if(resInfo === null) return <Shimmer/> ;
    // const info = resInfo?.cards[2]?.card?.card?.info || {};
    // const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // const sections = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const { name } = resInfo?.cards[2]?.card?.card?.info;
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" );
    
    return (
        <div className='menu m-4 text-center'>
            <h1 className='text-6xl text-center mb-6 font-lobster'>{name}</h1>
            <h1 className='text-[4rem] text-purple-800 text-center font-bold mt-[5rem] mb-4'>Our Menu</h1>
            {
                categories.map((i, index)=>(<RestaurantCategory key={i.card.card.title} showItems = {index===showIndex?true:false} setShowIndex = {()=> setShowIndex(index)} data = {i.card?.card}/>))
            }
            {/* {sections
                    .filter((_, index) => index > 0 && index < 15)
                    .map((j, index) => (
                        <div key={index} className='flex flex-col items-center justify-between'>
                            <h2 className='text-3xl mb-3 mt-[7rem] font-medium text-center text-red-600'>{j.card.card.title}</h2>
                            <ul className='flex flex-col text-center'>
                                {j.card.card.itemCards && j.card.card.itemCards.map(k => (
                                    <li key={k.card.info.id}>
                                        <b>{k.card.info.name} :</b> Rs. {k.card.info.defaultPrice / 100 || k.card.info.finalPrice / 100 || k.card.info.price / 100}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))} */}
        </div>
    );
}

export default ResMenu;