const analyticsState = {
  loading: false,
  data: false,
  analyticsState: false,
}


export const analyticsStateReducer = ( state = analyticsState, action ) => {

  switch( action.type ) {

    // case 'ADD_THIRD_PARTY_CARGO': {
    //
    //   return {
    //     loading: false,
    //     data: false,
    //     activeCargo: {}
    //   };
    // }

    case "GET_ANALYTICS_FULFILLED" :
      return {
        ...state,
        data: action.payload.data
      }
    default:
      return state;
  }

}
