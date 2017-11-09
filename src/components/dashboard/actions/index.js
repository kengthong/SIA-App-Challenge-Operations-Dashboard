import axios from 'axios';

export const getAnalytics = () => {
  return{
    type: "GET_ANALYTICS",
    payload: axios({
      url: `http://siachallenge.reversethatshell.com/php/siachallenge/getanalytics.php`
      })
    }
  }
