import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
      resData.info;
    const { deliveryTime } = resData.info.sla;
  
    return (
      <div className="res-card p-3 m-2 bg-slate-200 w-fit h-[40rem] flex flex-col justify-around items-center rounded-2xl">
        <img
          className="res-logo w-[20rem] mb-[1rem]"
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

  export default ResCard;