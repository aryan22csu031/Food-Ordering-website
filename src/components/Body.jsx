import ResCard, {withPromotedLabel} from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resArray, setResArray] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchval, setSearchval] = useState("");
  const ResCardPrmoted = withPromotedLabel(ResCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.40980&lng=77.31000&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants || json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;
      setResArray(restaurants);
      setFilteredRes(restaurants);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const OnlineStatus = useOnlineStatus();

  if (OnlineStatus == false) {
    return (
      <h1>
        looks like you are offline <br /> check your internet connection
      </h1>
    );
  }

  //conditional rendering
  if (!resArray || resArray.length === 0) {
    return <Shimmer />;
  } else {
    return (
      <div className="body">
        <div className="filter">
          <div className="search-div flex items-center mt-[4rem] mb-[2rem]">
            <input
              type="text"
              className="search-box border border-solid border-black rounded h-[2rem] w-[15rem] ml-[2rem]"
              value={searchval}
              onChange={(e) => setSearchval(e.target.value)}
            />
            <button
              className="search-btn ml-2 p-1.5 w-[5rem] bg-green-400 rounded-lg hover:bg-green-500"
              onClick={() => {
                const searchedrestaur = resArray.filter((i) =>
                  i.info.name.toLowerCase().includes(searchval.toLowerCase())
                );
                setFilteredRes(searchedrestaur);
              }}
            >
              Search
            </button>
            <button
            className="filter-btn border bg-green-400 rounded-lg ml-[74rem] w-[7rem] p-1.5"
            onClick={() => {
              const FilteredresArray = resArray.filter(
                (res) => res.info.avgRating >= 4
              );
              setFilteredRes(FilteredresArray);
            }}
          >
            Top Rated
          </button>
          </div>

          
        </div>
        <div className="res-container flex flex-wrap justify-evenly items-center">
          {filteredRes.map((i) => (
            <Link to={"/restaurants/" + i.info.id} key={i.info.id}>
              {i.info.sla.deliveryTime > 35 ? (<ResCardPrmoted resData = {i} />) : (<ResCard resData = {i} />)}
            </Link>
          ))}
        </div>
      </div>
    );
  }
};

export default Body;
