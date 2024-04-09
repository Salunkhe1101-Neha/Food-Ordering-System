import { useEffect, useState } from "react"

const UseRestaurantMenu = (id) => {
    const [menuData, setMenuData] = useState(null)
    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
        const json = await data.json();
        setMenuData(json.data)
    }

    return menuData
}

export default UseRestaurantMenu