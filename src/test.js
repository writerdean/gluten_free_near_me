<div class="row">
<div class="col s12 m7">
  <div class="card">
    <div class="card-image">
      <img src="images/sample-1.jpg">
      <span class="card-title">Card Title</span>
    </div>
    <div class="card-content">
      <p>I am a very simple card. I am good at containing small bits of information.
      I am convenient because I require little markup to use effectively.</p>
    </div>
    <div class="card-action">
      <a href="#">This is a link</a>
    </div>
  </div>
</div>
</div>






      <div  className="card medium" key={restaurant.name}>
        <div className="image-container"><img src={`${restaurant.image_url}`} alt=""></img></div>
        <div className="name-container">
          <div className="restaurant-name">
            <Link to={`/restaurants/${restaurant.name}`}>
            {restaurant.name}</Link>
          </div><div className="right">{restaurant.distance}</div>
        </div>

        <p className="restaurant-address"><a href={`maps://maps.apple.com/?11=${restaurant.lat}, ${restaurant.lon}&z=18&daddr=${restaurant.address}&dirflg=w&t=m` } target="blank"> {restaurant.address}</a></p>

        <p className="cuisine">{`Cuisine:  ${restaurant.cuisine}`}</p>
        <p className="comments">{`Comments:  ${restaurant.comments}`}</p>
        <p className="url"><a href={`${restaurant.url}`}>{restaurant.url}</a></p>



          componentDidMount = () => {
    this.setState({
      restaurants: this.state.restaurants.map(restaurant => {
        return { 
          ...restaurant, 
          distance: calcDistance(currLat, currLong, restaurant.lat, restaurant.lon)
        }
      })
    })
  }


  function getUserLocation() {
  function success(position) {
    currLat  = position.coords.latitude;
    currLong = position.coords.longitude;
    console.log(currLat + ', ' + currLong);
  }
  function error() {
    console.log("Unable to retrieve your location");
  }
  navigator.geolocation.getCurrentPosition(success, error);
}
getUserLocation();
