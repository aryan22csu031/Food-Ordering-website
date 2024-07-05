import { useDispatch } from "react-redux"
import { addItem } from "../utils/CartSlice";

const ItemList = ({items}) => {
    // console.log(items)
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }
    return (<div>
        {items.map((i)=>
        <div className="flex flex-col justify-center mb-3 border-black border-b-2 cursor-default" key={i.card.info.id}>
            <div className="flex gap-5">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+i.card.info.imageId} alt="" className="min-w-[10rem] min-h-[10rem] cursor-default" />
                <span className="text-md font-semibold">{i.card.info.name}</span>
                <div className="absolute">
                <button onClick={() => handleAddItem(i)} className="bg-black text-white font-semibold w-[4rem] h-10 rounded-ee-lg">Add+</button>
                </div>
                <span className="font-medium">Rs.{i.card.info.price/100 || i.card.info.defaultPrice/100}</span>
            </div>
            <div className="text-start w-[22rem] mb-4">
                <p>{i.card.info.description}</p>
                {/* <button className="p-2 bg-white font-semibold rounded relative bottom-[5.7rem] left-[5.9rem] hover:bg-red-500">Add +</button> */}
            </div>
        </div>
        )}
    </div>)
}

export default ItemList