const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, sla } = props?.resData.info
  const retImg = props?.resData.info.cloudinaryImageId;

  const img = "https://media-assets.swiggy.com/swiggy/image/upload/" + retImg;
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: '#f0f0f0',
      }}>
      <div className="res-card-content">
        <img src={img} alt="" height={'160px'} width={'190px'} />
        <h3>{name}</h3>
        <p><em>{cuisines.join(', ')}</em></p>
        <h4>{avgRating} stars</h4>
        <h4>{sla.deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
