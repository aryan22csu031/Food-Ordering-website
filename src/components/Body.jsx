import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [resArray, setResArray] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchval, setSearchval] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.40980&lng=77.31000&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    //optional chaining
    setResArray(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  //conditional rendering
  // if (resArray.length === 0) {
  //   return <Shimmer />;
  // }

  return resArray.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-div">
        <input type="text" className="search-box" value={searchval} onChange={(e) => setSearchval(e.target.value)} />
        <button className="search-btn" onClick={()=>{
          // console.log(searchval)
          const searchedrestaur = resArray.filter((i) => i.info.name.toLowerCase().includes(searchval.toLowerCase()));
          setFilteredRes(searchedrestaur);
        }}>Search</button>  
        </div>
        
        <button
          className="filter-btn"
          onClick={() => {
            const FilteredresArray = resArray.filter(
              (res) => res.info.avgRating >= 4
            );
            setResArray(FilteredresArray);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {filteredRes.map((i) => (
          <Link to={"/restaurants/" + i.info.id} key={i.info.id} ><ResCard resData={i} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
