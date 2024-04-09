import { useDispatch } from "react-redux"
import { CDN_URL } from "../utils/constans"
import { addItem } from "../utils/cartSlice"
const CategoriesData = ({ item,sts }) => {
    console.log(item)
    const dispatch=useDispatch()
    const handleAddItem=(item)=>{
        dispatch(addItem(item))
    }
    return (
        <div>
            {item.map((item) => {
                return (
                    <div key={item?.card?.info?.id} style={{ margin: '10px', padding: '10px', borderBottom: 'solid gray' }}>
                        <div>
                            <span>{item?.card?.info?.name} - </span>
                            <span>{"Rs."} {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</span>
                            <p>{item?.card?.info?.description}</p>
                        </div>
                        <div>
                            <span><img src={CDN_URL + item?.card?.info?.imageId} height={'80px'} alt="" /></span>
                            {sts==true && <button onClick={()=>handleAddItem(item)}>Add+</button>}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default CategoriesData;