
const inventoryFlightsList = {
  loading: true,
  data: false
};

export const inventoryFlightsListReducer = (state = inventoryFlightsList, action ) => {
  switch(action.type) {
    case "GET_FLIGHTS_LIST_INVENTORY_FULFILLED":
      // const payloadData = JSON.parse(action.payload).data
      return {
        loading:false,
        data: action.payload.data
      };



     default:
       return state;
   }
 }
