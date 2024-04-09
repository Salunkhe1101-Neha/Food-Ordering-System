import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterdRestaurants, setFilterdRestaurants] = useState([]);
  const [searchRes, setSearchRes] = useState("")
  // * Whenever a state variable updates or changes, react triggers a reconciliation cycle(re-renders the component)
  console.log('Body rendered');

  useEffect(() => {
    fetchData();
  }, [])


  const fetchData = async () => {
    const fdata = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=18.4878692&lng=73.9479269")
    const json = await fdata.json();
    console.log(json)
    setListOfRestaurants(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
    setFilterdRestaurants(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle.restaurants)


  }
  return (
    <div className="body">
      <div className='btns'>
        <button onClick={() => {
          const filterData = listOfRestaurants.filter((res) => res.info.avgRating > 4)
          setFilterdRestaurants(filterData)
        }}>
          Top Rated Restaurants
        </button>

        <div>
          <input type="text" placeholder='Search Here ' value={searchRes} onChange={(e) => setSearchRes(e.target.value)} />
          <button onClick={
            () => {
              const filterRes = listOfRestaurants.filter((res) => res.info.cuisines.join(', ').toLowerCase().includes(searchRes.toLowerCase()))
              setFilterdRestaurants(filterRes)
              console.log(searchRes)
            }}>
            Search
          </button>
        </div>
      </div>

      <div className="res-container">
        {
          (filterdRestaurants.length == 0) ?
            (<><Shimmer></Shimmer></>)
            : (<> {filterdRestaurants.map((restaurant) => (
              <Link to={"/restaurantMenu/" + restaurant.info.id} key={restaurant?.info.id} ><RestaurantCard resData={restaurant} /></Link>
            ))}</>)
        }
      </div>
    </div>
  );
};

export default Body;
