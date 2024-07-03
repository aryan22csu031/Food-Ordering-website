const ItemList = ({items}) => {
    console.log(items)
    return (<div>
        {items.map((i)=>
        <div className="flex flex-col justify-center mb-3 border-black border-b-2" key={i.card.info.id}>
            <div className="flex gap-5">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+i.card.info.imageId} alt="" className="w-[10rem]" />
                <span className="text-md font-semibold">{i.card.info.name}</span>
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