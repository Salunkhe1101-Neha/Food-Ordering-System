import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import UseRestaurantMenu from "./USeRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
    const [showIndex, setShowIndex] = useState(null)

    const { id } = useParams();
    const menuData = UseRestaurantMenu(id)
    if (menuData === null) {
        return (<Shimmer />)
    }
    console.log(menuData)
    const { name, cuisines, avgRating, costForTwoMessage, deliveryTime, } = menuData?.cards[2]?.card?.card?.info
    const categories = menuData?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")



    return (
        <center>
            <div>
                <h1>{name}</h1>
                <p>{cuisines.join(', ')}  {costForTwoMessage}</p>
                <br />
                <div>
                    {
                        categories.map((category, i) => {
                            return (<RestaurantCategory key={category?.card?.card.title} category={category?.card?.card} setShowIndex={setShowIndex} showItem={showIndex} i={i} />)

                        })
                    }
                </div>
            </div>
        </center>


    )
}

export default RestaurantMenu