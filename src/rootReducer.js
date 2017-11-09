// @flow

import { combineReducers } from 'redux';
// import { hotelListReducer } from './components/hotel-list/reducers';
// import { eventListReducer } from './components/event-list/reducers';

// import { activeProductReducer } from './components/supply-add-product/reducers';
// import { categoryReducers } from './components/supply-category/reducers';
import { analyticsStateReducer } from './components/dashboard/reducers';
import { inventoryFacilitiesReducer } from './components/inventory-facilities/reducers';
import { inventoryFlightsListReducer } from './components/inventory/flights-list-for-route-inventory/reducers';
import { inventoryFlightRouteReducer } from './components/inventory/flight-routes-list/reducers';
import { flightsListReducer } from './components/cargo/flights-list-for-route/reducers';
import { userReducer } from './components/user/reducers';
import { cargoShareReducer } from './components/cargo-share-form/reducers';

const _reducers ={
  // flightRoutesList: flightRoutesReducer,
  inventoryFacilitiesList: inventoryFacilitiesReducer,
  inventoryFlightRouteList: inventoryFlightRouteReducer,
  inventoryFlightsList: inventoryFlightsListReducer,
  // productCategories: categoryReducers,
  user: userReducer,
  flightsList: flightsListReducer,
  cargoShare: cargoShareReducer,
  analyticsState: analyticsStateReducer
  // hotelList: hotelListReducer,
  // eventList: eventListReducer,
  // user: userReducers

}

export const reducers = combineReducers(_reducers);
