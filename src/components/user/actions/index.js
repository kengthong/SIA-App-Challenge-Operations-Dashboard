import BASE_URL from '../../../index';
import axios from 'axios';


export const loginDetails = (username, password) => {
  return {
    type: "LOG_IN_DETAILS",
    payload: axios({
      // withCredentials: true,
      url: `http://siachallenge.reversethatshell.com/php/siachallenge/login.php?username=${username}&password=${password}`
    })
  }
}
