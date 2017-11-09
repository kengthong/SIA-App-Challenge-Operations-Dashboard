import q from 'q';
import axios from 'axios';


const BASE_URL = 'http://siachallenge.reversethatshell.com/';

console.log(BASE_URL);
// export const getCargoContainers = ( flightId, flights ) => {
//
//   // return
//   let promise = q.defer();
//
//   let filteredFlights = flights.filter(
//     flight => flight.id === flightId
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

export const getRouteDetailsInventory = () => {
  return {
    type: "GET_ROUTE_DETAILS_INVENTORY",
    payload: axios({
			// withCredentials:true,
			url: `http://siachallenge.reversethatshell.com/php/siachallenge/getpassengerroutes.php`
		})
  }
}

export const updateRouteDetailsInventory = (flightRoutesList) => {
  return {
    type: "UPDATE_ROUTE_DETAILS",
    flightRoutesList
  }
}



// export const updateInputChange = (event, eventIndex) => {
//   console.log(eventIndex)
//   return{
//     type: "UPDATE_INPUT_CHANGE",
//     event, eventIndex
//   }
// }
//
// export const updateContactDetails = (name, value, index) => {
//   return{
//     type: "UPDATE_CONTACT_DETAILS",
//     name, value, index
//   }
// }
