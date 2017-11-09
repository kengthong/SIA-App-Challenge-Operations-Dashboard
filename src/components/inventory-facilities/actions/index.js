import q from 'q';
import axios from 'axios';


const BASE_URL = 'http://siachallenge.reversethatshell.com/';

console.log(BASE_URL);

export const getFacilitiesDetails = () => {
  return{
    type: "GET_FACILITIES_DETAILS",
    payload: axios({
      url: `http://siachallenge.reversethatshell.com/php/siachallenge/getfacilities.php`
    })
  }
}

export const getFacilitiesDetailsFulfilled = (facilitiesData) => {
  return {
    type: "GET_FACILITIES_DETAILS_FULFILLED",
    facilitiesData
  }
}

export const getFacilitiesHistory = (facility_id) => {
  return {
    type: "GET_FACILITIES_HISTORY",
    payload: axios({
      url:`http://siachallenge.reversethatshell.com/php/siachallenge/getfacilityhistory.php?facilityID=${facility_id}`,
    })
  }
}
