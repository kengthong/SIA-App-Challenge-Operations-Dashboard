




const inventoryFlightRouteList = {
  loading: true,
  data: [
    {
      route_id: "1",
      route_details: {
        arrTime: "12:00+3",
        depTime: "12:00",
        Description: "Airbus 330-300"
      },
      flight_number: "SQ 3290",
      validity_from: "2015-12-15 00:00:00",
      validity_to: "2018-02-28 23:59:59",
      days_available: "[2,5]",
      route_from: "Adelaide (ADL)",
      route_to: "Melbourne (MEL)",
      date_modified: "2017-10-17 00:00:00",
      modified_by: "sia_super_user",
      flight_count: "3",
      route_efficiency: 60
    }
  ]
}




 // const flightRoutesList = [
 //  {
 //   flight_id: 1,
 //   flight_details: {
 //   arrTime: "12:00+3",
 //     depTime: "12:00",
 //     Description: "Airbus 330-300"
 //   },
 //   route_id: "SQ 3290",
 //   validity_from: "2015-12-15 00:00:00",
 //   validity_to: "2018-02-28 23:59:59",
 //   days_available: "[2,5]",
 //   flight_from: "Adelaide (ADL)",
 //   flight_to: "Melbourne (MEL)",
 //   date_modified: "2017-10-17 00:00:00",
 //   modified_by: "sia_super_user",
 //   load_plan_count: 3
 //  },{
 //   flight_id: 1,
 //   flight_details: {
 //   arrTime: "12:00+3",
 //     depTime: "12:00",
 //     Description: "Airbus 330-300"
 //   },
 //   route_id: "SQ 3290",
 //   validity_from: "2015-12-15 00:00:00",
 //   validity_to: "2018-02-28 23:59:59",
 //   days_available: "[2,5]",
 //   flight_from: "Adelaide (ADL)",
 //   flight_to: "Melbourne (MEL)",
 //   date_modified: "2017-10-17 00:00:00",
 //   modified_by: "sia_super_user",
 //   load_plan_count: 3
 //  }
 // ]

 export const inventoryFlightRouteReducer = (state = inventoryFlightRouteList, action ) => {
   console.log(inventoryFlightRouteList)
   switch (action.type) {
     case "GET_ROUTE_DETAILS_INVENTORY_PENDING":
        return {
          ...state,
          loading:true
        }

    case "GET_ROUTE_DETAILS_INVENTORY_FULFILLED":
        return {
          ...state,
          loading: false
        }

    case "UPDATE_ROUTE_DETAILS":
        // if (inventoryFlightRouteList != action.flightRoutesList) {
          return{
            ...state,
            loading: false,
            data: action.flightRoutesList
          }
        // }

     case "UPDATE_INPUT_CHANGE":
     // console.log(action.event, action.eventIndex)
     // ADD NEW EVENT (action.eventIndex == newest index assigned)
    //  if(action.eventIndex == state.events.length) {
    //    return {
    //      ...state,
    //      events: [
    //        ...state.events,
    //        action.event
    //      ]
    //    };
    //  } else {
    //    return {
    //      ...state,
    //      events: [
    //        ...state.events.map((event, i)  => {
    //          if(i == action.eventIndex) {
    //            return  action.event
    //          } else {
    //            return event;
    //          }
    //        }),
     //
    //      ]
     //
    //    }
    //  }


     // case "UPDATE_CONTACT_DETAILS":
     // return {
     //   ...state.map((event, index)  => {
     //     if(index === action.index) {
     //       return{
     //         ...event,
     //         name: 'event'
     //
     //       }
     //     } else {
     //       return event;
     //     }
     //   })
     // }


     // case "ADD_BULK_DISCOUNT":
     //   return {
     //     ...state,
     //     bulkDiscount: [...state.bulkDiscount, oneBulkDiscount]
     //   };



     default:
       return state;
   }
 }











/*
[
  {
    flight_id: 1,
    flight_details: {
    arrTime: “12:00+3”,
    depTime: “12:00”,
    Description: “Airbus 330-300”
    },
    flight_number: “SQ 3290”,
    validity_from: “2015-12-15 00:00:00”,
    validity_to: “2018-02-28 23:59:59”,
    days_available: “[2,5]”,
    flight_from: “Adelaide (ADL)”,
    flight_to: “Melbourne (MEL)”,
    date_modified: “2017-10-17 00:00:00”,
    modified_by: “sia_super_user”,
    load_plan_count: 3
  }
]
*/
//http://siachallenge.reversethatshell.com/
// const airplaneCargoList = {
//   flights: [
//     // First Flight
//     {
//       id: '1',
//       flightNo: '',
//       status:{
//         registered: false,
//         loading: false,
//         completed: true
//       },
//       efficiency: '70',
//       cargoContainers: [
//         {
//           id: '23',
//           efficiency: 90,
//           weight: '1000',
//           contents: [
//             {
//               name: '',
//               id: '1',
//               company: '',
//               weight: '',
//               dimensions: {
//                 length: '',
//                 width: '',
//                 height: ''
//               },
//               efficiency:'0',
//             },{
//               name: '',
//               id: '2',
//               company: '',
//               weight: '',
//               dimensions: {
//                 length: '',
//                 width: '',
//                 height: ''
//               },
//               efficiency: '0',
//             },{
//               name: '',
//               id: '3',
//               company: '',
//               weight: '',
//               dimensions: {
//                 length: '',
//                 width: '',
//                 height: ''
//               },
//               efficiency: '0',
//             },{
//               name: '',
//               id: '4',
//               company: '',
//               weight: '',
//               dimensions: {
//                 length: '',
//                 width: '',
//                 height: ''
//               },
//               efficiency: '0',
//             }
//           ]
//         },{
//           id: 'secondContainer',
//           efficiency: '0',
//           weight: '',
//           contents: [
//             {
//               name: '',
//               id: '1',
//               company: '',
//               weight: '',
//               dimensions: {
//                 length: '',
//                 width: '',
//                 height: ''
//               }
//             },{
//               name: '',
//               id: '2',
//               company: '',
//               weight: '',
//               dimensions: {
//                 length: '',
//                 width: '',
//                 height: ''
//               }
//             }
//           ]
//         },{
//           id: 'thirdContainer',
//           efficiency: 70,
//           weight: '',
//           contents: [
//             {
//               name: '',
//               id: '1',
//               company: '',
//               weight: '',
//               dimensions: {
//                 length: '',
//                 width: '',
//                 height: ''
//               }
//             },{
//               name: '',
//               id: '2',
//               company: '',
//               weight: '',
//               dimensions: {
//                 length: '',
//                 width: '',
//                 height: ''
//               }
//             }
//           ]
//         }
//       ]
//
//     // Second Flight
//     },{
//       id: '2',
//       flightNo: '',
//       status:{
//         registered: false,
//         loading: false,
//         completed: true
//       },
//       efficiency: '20%',
//       cargoContainers: [
//         {
//           id: '0930',
//           efficiency: '',
//           weight: '',
//           contents: [
//             {
//               name: '',
//               id: '1',
//               company: '',
//               weight: '',
//               dimensions: {
//                 length: '',
//                 width: '',
//                 height: ''
//               }
//             },{
//               name: '',
//               id: '2',
//               company: '',
//               weight: '',
//               dimensions: {
//                 length: '',
//                 width: '',
//                 height: ''
//               }
//             },{
//               name: '',
//               id: '3',
//               company: '',
//               weight: '',
//               dimensions: {
//                 length: '',
//                 width: '',
//                 height: ''
//               }
//             },{
//               name: '',
//               id: '4',
//               company: '',
//               weight: '',
//               dimensions: {
//                 length: '',
//                 width: '',
//                 height: ''
//               }
//             }
//           ]
//         },{
//           id: 'secondContainer',
//           efficiency: '',
//           weight: '',
//           contents: [
//             {
//               name: '',
//               id: '1',
//               company: '',
//               weight: '',
//               dimensions: {
//                 length: '',
//                 width: '',
//                 height: ''
//               }
//             },{
//               name: '',
//               id: '2',
//               company: '',
//               weight: '',
//               dimensions: {
//                 length: '',
//                 width: '',
//                 height: ''
//               }
//             }
//           ]
//         },{
//           id: 'thirdContainer',
//           efficiency: '',
//           weight: '',
//           contents: [
//             {
//               name: '',
//               id: '1',
//               company: '',
//               weight: '',
//               dimensions: {
//                 length: '',
//                 width: '',
//                 height: ''
//               }
//             },{
//               name: '',
//               id: '2',
//               company: '',
//               weight: '',
//               dimensions: {
//                 length: '',
//                 width: '',
//                 height: ''
//               }
//             }
//           ]
//         }
//       ]
//
//     // Third Flight
//     },{
//       id: '3',
//       flightNo: '',
//       status:{
//         registered: true,
//         loading: false,
//         completed: false
//       },
//       efficiency: '90%',
//       cargoContainers: [
//         {
//           id: '0290',
//           efficiency: '',
//           weight: '',
//           contents: [
//             {
//               name: '',
//               id: '1',
//               company: '',
//               weight: '',
//               dimensions: {
//                 length: '',
//                 width: '',
//                 height: ''
//               }
//             },{
//               name: '',
//               id: '2',
//               company: '',
//               weight: '',
//               dimensions: {
//                 length: '',
//                 width: '',
//                 height: ''
//               }
//             },{
//               name: '',
//               id: '3',
//               company: '',
//               weight: '',
//               dimensions: {
//                 length: '',
//                 width: '',
//                 height: ''
//               }
//             },{
//               name: '',
//               id: '4',
//               company: '',
//               weight: '',
//               dimensions: {
//                 length: '',
//                 width: '',
//                 height: ''
//               }
//             }
//           ]
//         },{
//           id: 'secondContainer',
//           efficiency: '',
//           weight: '',
//           contents: [
//             {
//               name: '',
//               id: '1',
//               company: '',
//               weight: '',
//               dimensions: {
//                 length: '',
//                 width: '',
//                 height: ''
//               }
//             },{
//               name: '',
//               id: '2',
//               company: '',
//               weight: '',
//               dimensions: {
//                 length: '',
//                 width: '',
//                 height: ''
//               }
//             }
//           ]
//         },{
//           id: 'thirdContainer',
//           efficiency: '',
//           weight: '',
//           contents: [
//             {
//               name: '',
//               id: '1',
//               company: '',
//               weight: '',
//               dimensions: {
//                 length: '',
//                 width: '',
//                 height: ''
//               }
//             },{
//               name: '',
//               id: '2',
//               company: '',
//               weight: '',
//               dimensions: {
//                 length: '',
//                 width: '',
//                 height: ''
//               }
//             }
//           ]
//         }
//       ]
//
//     // Fourth Flight
//     },{
//       id: '4',
//       flightNo: '',
//       status:{
//         registered: false,
//         loading: true,
//         completed: false
//       },
//       efficiency: '30%',
//       cargoContainers: [
//         {
//           id: '029209',
//           efficiency: '',
//           weight: '',
//           contents: [
//             {
//               name: '',
//               id: '1',
//               company: '',
//               weight: '',
//               dimensions: {
//                 length: '',
//                 width: '',
//                 height: ''
//               }
//             },{
//               name: '',
//               id: '2',
//               company: '',
//               weight: '',
//               dimensions: {
//                 length: '',
//                 width: '',
//                 height: ''
//               }
//             },{
//               name: '',
//               id: '3',
//               company: '',
//               weight: '',
//               dimensions: {
//                 length: '',
//                 width: '',
//                 height: ''
//               }
//             },{
//               name: '',
//               id: '4',
//               company: '',
//               weight: '',
//               dimensions: {
//                 length: '',
//                 width: '',
//                 height: ''
//               }
//             }
//           ]
//         },{
//           id: 'secondContainer',
//           efficiency: '',
//           weight: '',
//           contents: [
//             {
//               name: '',
//               id: '1',
//               company: '',
//               weight: '',
//               dimensions: {
//                 length: '',
//                 width: '',
//                 height: ''
//               }
//             },{
//               name: '',
//               id: '2',
//               company: '',
//               weight: '',
//               dimensions: {
//                 length: '',
//                 width: '',
//                 height: ''
//               }
//             }
//           ]
//         },{
//           id: 'thirdContainer',
//           efficiency: '',
//           weight: '',
//           contents: [
//             {
//               name: '',
//               id: '1',
//               company: '',
//               weight: '',
//               dimensions: {
//                 length: '',
//                 width: '',
//                 height: ''
//               }
//             },{
//               name: '',
//               id: '2',
//               company: '',
//               weight: '',
//               dimensions: {
//                 length: '',
//                 width: '',
//                 height: ''
//               }
//             }
//           ]
//         }
//       ]
//
//     }
//   ]
// }
