// import q from 'q';
import axios from 'axios';

const BASE_URL = 'http://siachallenge.reversethatshell.com/';

console.log(BASE_URL);
// export const getCargoContainers = ( route_id, flightsList ) => {
//
//   // return
//   let promise = q.defer();
//
//   let filteredFlights = flightsList.filter(
//     flight => route_id === route_id
//   )
//
//   if(filteredFlights.length > 0){
//     promise.resolve(filteredFlights[0]);
//   } else {
//     promise.resolve({});
//   }
//
//   return promise.promise;
// }

// export const getCargoContainers = ( route_id ) => {
//   return {
//     type: "GET_FLIGHT_DETAILS",
//     payload: axios({
//       // withCredentials:true,
//       url: `http://siachallenge.reversethatshell.com/php/siachallenge/getflightsforroute.php?routeID=${route_id}`
//     })
//   }
// }

// export const getFlightsListForRoute = ( route_id ) => axios({
//   // withCredentials:true,
//   // payload:{
//       url: `http://siachallenge.reversethatshell.com/php/siachallenge/getflightsforroute.php?routeID=${route_id}`
//   // }
//
// })

export const getFlightsListForRoute = ( route_id ) => ({
  type: "GET_FLIGHTS_LIST",
  payload: axios({
    // withCredentials:true,
    url: `http://siachallenge.reversethatshell.com/php/siachallenge/getflightsforroute.php?routeID=${route_id}`
  })
})
