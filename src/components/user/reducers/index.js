const user = {
  loading: true,
  data: false
  // data:{
  //   account_id: 1,
  //   roles: 'all',
  //   permissions:["add_cargo", "add_flights"],
  //   last_login: "2017-10-16 20:41:01",
  //   date_modified: "2017-10-16 20:41:01",
  //   image:"http:\/\/example.com\/recipe-5-image.jpg"
  // }
}


export const userReducer = (state = user, action ) => {
  switch (action.type) {
    case "LOG_IN_DETAILS_FULFILLED":
      return {
        ...this.state,
        loading: false,
        data: action.payload.data
      }
    // case "UPDATE_INPUT_CHANGE":
    // // console.log(action.event, action.eventIndex)
    // // ADD NEW EVENT (action.eventIndex == newest index assigned)
    // if(action.eventIndex == state.events.length) {
    //   return {
    //     ...state,
    //     events: [
    //       ...state.events,
    //       action.event
    //     ]
    //   };
    // } else {
    //   return {
    //     ...state,
    //     events: [
    //       ...state.events.map((event, i)  => {
    //         if(i == action.eventIndex) {
    //           return  action.event
    //         } else {
    //           return event;
    //         }
    //       }),
    //
    //     ]
    //
    //   }
    // }

    default:
      return state;
  }
}
