import axios from 'axios';
import { message } from 'antd';

export const addThirdPartyCargoAsync = (values) => {

  message.loading("Adding 3rd party cargo...", 0);

  return axios({
      url: `http://siachallenge.reversethatshell.com/php/siachallenge/addcargoweb.php?airway_bill${values.airway_bill}`,
    data: values,
    // withCredentials: true,
  })
}

export const addThirdPartyCargoFulfilled = (cargo, company_name) => {

  message.destroy();
  message.success(`Added 3rd party cargo from ${company_name}`);

  return {
    type: "ADD_THIRD_PARTY_CARGO",
    cargo
  }
}

export const addThirdPartyCargoRejected = (company_name) => {
  message.destroy();
  message.error(`Failed to add 3rd party cargo from ${company_name}`);
}
