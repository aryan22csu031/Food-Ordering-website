import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resArray, setResArray] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchval, setSearchval] = useState("");

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
      console.log(json);
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
          <div className="search-div">
            <input
              type="text"
              className="search-box"
              value={searchval}
              onChange={(e) => setSearchval(e.target.value)}
            />
            <button
              className="search-btn"
              onClick={() => {
                const searchedrestaur = resArray.filter((i) =>
                  i.info.name.toLowerCase().includes(searchval.toLowerCase())
                );
                setFilteredRes(searchedrestaur);
              }}
            >
              Search
            </button>
          </div>

          <button
            className="filter-btn"
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
        <div className="res-container">
          {filteredRes.map((i) => (
            <Link to={"/restaurants/" + i.info.id} key={i.info.id}>
              <ResCard resData={i} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
};

export default Body;
