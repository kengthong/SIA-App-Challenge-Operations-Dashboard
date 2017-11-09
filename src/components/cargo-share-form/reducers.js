const defaultState = {
  loading: false,
  data: false,
  activeCargo: {}
}


export const cargoShareReducer = ( state = defaultState, action ) => {

  switch( action.type ) {

    case 'ADD_THIRD_PARTY_CARGO': {

      return {
        loading: false,
        data: false,
        activeCargo: {}
      };
    }

    default:
      return state;
  }

}
