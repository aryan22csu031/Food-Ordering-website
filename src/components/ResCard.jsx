import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
      resData.info;
    const { deliveryTime } = resData.info.sla;
  
    return (
      <div className="res-card p-3 m-2 bg-slate-200 w-fit min-h-[38rem] max-h-[38rem] flex flex-col justify-evenly items-center rounded-2xl">
        <img
          className="res-logo w-[20rem] mb-[1rem] min-h-[10rem]"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h3 className="font-bold text-red-500 text-xl">{name}</h3>
        <h4 className="font-semibold w-[15rem] text-center">{cuisines.join(", ")}</h4>
        <h4 className="font-semibold">Rating : {avgRating}</h4>
        <h4 className="font-semibold">{costForTwo}</h4>
        <h4 className="font-semibold">{deliveryTime} mins away</h4>
      </div>
    );
  };

  //higher order component
  // takes a resCard and return a promoted resCard

  export const withPromotedLabel = (ResCard) => {

    return (props) => {
      return (
        <div>
          <label className="relative bg-black text-white font-semibold m-2 top-9 p-2 rounded-s-lg rounded-t-lg">Promoted</label>
          <ResCard {...props} />
        </div>
      )
    }
  }

  export default ResCard;