import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';

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

    if(resInfo === null) return <Shimmer/> ;

    // const info = resInfo?.cards[2]?.card?.card?.info || {};
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards)
    const { name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    return (
        <div className='menu'>
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h1>Explore our menu :-</h1>
            <ul>
                {itemCards.map(i => <li key={i.card.info.id}><b>{i.card.info.name} :</b> Rs. {i.card.info.defaultPrice/100 || i.card.info.finalPrice/100 || i.card.info.price/100}</li>) } 
            </ul>
        </div>
    );
}

export default ResMenu;