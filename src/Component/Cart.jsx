import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CategoriesData from "./CategoriesData";
import { clearCart } from "../utils/cartSlice";
const Cart=()=>{
    const dispatch=useDispatch()
    const cartItem=useSelector((store)=>store.cart.items)
    console.log(cartItem)
    const {sts}=false;
    return(
        <div> 
            <div>Cart</div>
            <div>
                <button onClick={()=>{dispatch(clearCart())}}>Clear Cart</button>
                <Link to={'/'}><button>Go To Home</button></Link>
                 {cartItem.length===0 && <h1>Your Cart is empty Please add items in your card</h1>}
            </div>
            <div>
                <CategoriesData item={cartItem} sts={sts}/>
            </div>
        </div>
    )
}
export default Cart;