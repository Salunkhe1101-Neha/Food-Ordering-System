import { useState } from "react"
import CategoriesData from "./CategoriesData"
import Shimmer from "./Shimmer"
const RestaurantCategory = ({ category,showItem,i,setShowIndex}) => {
    // console.log(category)
    const[close,setClose]=useState(null)
    const sts=true;
    function handleClick()
    {
        setShowIndex(i);
         setClose(!close);
          if(close===true)
          {setShowIndex(null)}
    }
    return (
        <div style={{ width: '80%', backgroundColor: "rgb(240,240,240)", margin: '10px', }}>
            <div onClick={handleClick} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '80%', cursor:'pointer'}}> <b>{category?.title} ({category?.itemCards?.length})</b>
                <span><img src="https://cdn-icons-png.flaticon.com/128/9347/9347603.png" height={'20px'} alt="" /></span>
            </div>
            {
               showItem===i && <CategoriesData item={category?.itemCards} sts={sts} />
            }
        </div>


    )
}
export default RestaurantCategory;