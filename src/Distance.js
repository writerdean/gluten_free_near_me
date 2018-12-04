// import React from 'react'


// export default function Distance() {



//   var options = {
//     enableHighAccuracy: true,
//     timeout: 10000,
//     maximumAge: 0
//   };

//   function success(pos) {
//     var crd = pos.coords;

//     // console.log('Your current position is:');
//     console.log(`Latitude : ${crd.latitude}`);
//     console.log(`Longitude: ${crd.longitude}`);
//     // console.log(`More or less ${crd.accuracy} meters.`);
//   }

//   function error(err) {
//     console.warn(`ERROR(${err.code}): ${err.message}`);
//   }
//   navigator.geolocation.getCurrentPosition(success, error, options);

//   let currLat = -37.8186905
//   let currLong = 144.959227

//   const calcDistance = (lat1, lon1, lat2, lon2) => {
//     var p = 0.017453292519943295; 
//     var c = Math.cos;
//     var a = 0.5 - c((lat2 - lat1) * p)/2 + 
//             c(lat1 * p) * c(lat2 * p) * 
//             (1 - c((lon2 - lon1) * p))/2;

//     return 12742 * Math.asin(Math.sqrt(a));
//   }
//   console.log(calcDistance(currLat, currLong, restaurants[0].lat, restaurants[0].long).toFixed(2))

  // document.querySelector('#user_location').textContent = 
  // `You are ${calcDistance(animalLat, animalLong, userLocation.position.lat, userLocation.position.long).toFixed(2)}km away from the animal`;

// }