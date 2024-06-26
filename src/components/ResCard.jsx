import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
      resData.info;
    const { deliveryTime } = resData.info.sla;
  
    return (
      <div className="res-card">
        <img
          className="res-logo"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>Rating : {avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} mins away</h4>
      </div>
    );
  };

  export default ResCard;