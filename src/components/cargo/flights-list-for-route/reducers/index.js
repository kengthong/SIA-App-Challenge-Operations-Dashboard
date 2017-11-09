// const loadPlanList = [
//   {
//     load_plan_id: 1, // load_plan ID = flight ID???
//     flight_id: 1,
//     weight: '2000', // idk if total weight of all cargo container is needed
//     containers: [
//       {
//         containerID:'Container 1',
//         efficiency: '',
//         weight: '',
//         contents: [
//           {
//             itemName:'Item 1',
//             fragile: false,
//             company: '',
//             weight: '',
//             dimensions: {
//               width: '',
//               height: '',
//               length: '',
//             },
//             efficiency: '',
//           },{
//             itemName:'Item 2',
//             fragile: false,
//             company: '',
//             weight: '',
//             dimensions: {
//               width: '',
//               height: '',
//               length: '',
//             },
//             efficiency: '',
//           },
//         ]
//       }
//     ],
//     load_efficiency: "[0.1]", //based on the old json format (dk if its needed)
//     load_state: "Loading",
//     processed_by: "sia_super_user",
//     date_modified: "2017-10-16 00:00:00",
//     cargo_count: 1
//
//
//   }
// ]

// [
//   {
//     cargo_count: 1,
//     date_modified: "2017-10-17 00:00:00",
//     flight_id: 1,
//     flight_state: "Loading",
//     processed_by: "sia_super_user",
//     route_id: 1,
//     total_weight: 0,
//     avg_efficiency: 60,
//     containers: [
//       {
//         container_details: {
//           containerId: 1,
//           containerName: "Tricon 3.0x",
//           containerDimensions: {
//             width: 1000.0,
//             height: 500.0,
//             length: 750.0
//           },
//           containerMaxVolume: 375000000.0,
//           containerMaxWeight: 500.0
//         },
//         container_efficiency: 58.6,
//         container_weight: 245.2,
//         contents: [
//           {
//             cargoID: 1,
//             cargoDetails: {
//               senderName: "Chong Jin Wei",
//               recipientName: "Bai Jiamin",
//               recipientAddress: "Bukit Batok West Ave",
//               deliveryDate: "2017-10-28 00:00:00"
//             },
//             cargoDimensions: {
//               width: 250.0,
//               height: 10.0,
//               length: 250.0
//             },
//             loadLocation: {
//               x: 0,
//               y: 0,
//               z: 0
//             },
//             orientation: 0,
//             cargoWeight: 1.5,
//             cargoState: "Loading",
//             cargoType: "Air",
//             cargoParameters: ["Fragile"],
//             loadPlanDetails: {
//               flightID: 1,
//               planContainer: 0
//             },
//           }
//         ]
//       }
//     ]
//   }
// ]

// const flightsList = {
//   loading: false,
//   data: [
//     {
//       flight_id: 94032,
//       route_id: 1,
//       flight_weight: 0,
//       containers: [
//         {
//           container_details: {
//             containerId: 1,
//             containerName: "Tricon 3.0x",
//             containerDimensions: {
//               width: 1000.0,
//               height: 500.0,
//               length: 750.0
//             },
//             containerMaxVolume: 375000000.0, containerMaxWeight: 500.0
//           },
//           efficiency: 58.6,
//           actual_weight: 245.2,
//           contents: [
//             {
//               cargoID: 1,
//               cargoDetails: {
//                 senderName: "Chong Jin Wei",
//                 recipientName: "Bai Jiamin",
//                 recipientAddress: "Bukit Batok West Ave",
//                 deliveryDate: "2017-10-28 00:00:00"
//               },
//              cargoDimensions: {
//                 width: 250.0,
//                 height: 10.0,
//                 length: 250.0
//               },
//               loadLocation: {
//                   x: 0,
//                   y: 0,
//                   z: 0
//               },
//               orientation: 0,
//               cargoWeight: 1.5,
//               cargoState: "Loading",
//               cargoType: "Air",
//               cargoParameters: ["Fragile"],
//               loadPlanDetails: {
//                   flightID: 1,
//                   planContainer: 0
//               },
//               processedBy: "sia_super_user",
//               dateProcessed: "2017-10-17 00:00:00"
//             }
//           ]
//         }
//       ],
//       flight_state: "Loading",
//       processed_by: "sia_super_user",
//       date_modified: "2017-10-17 00:00:00",
//       cargo_count: 1,
//       flight_efficiency: 60,
//     },{
//       flight_id: 233040,
//       route_id: 2,
//       flight_weight: 0,
//       containers: [
//         {
//           container_details: {
//             containerId: 1,
//             containerName: "Tricon 3.0x",
//             containerDimensions: {
//               width: 1000.0,
//               height: 500.0,
//               length: 750.0
//             },
//             containerMaxVolume: 375000000.0, containerMaxWeight: 500.0
//           },
//           efficiency: 58.6,
//           actual_weight: 245.2,
//           contents: [
//             {
//               cargoID: 1,
//               cargoDetails: {
//                 senderName: "Chong Jin Wei",
//                 recipientName: "Bai Jiamin",
//                 recipientAddress: "Bukit Batok West Ave",
//                 deliveryDate: "2017-10-28 00:00:00"
//               },
//              cargoDimensions: {
//                 width: 250.0,
//                 height: 10.0,
//                 length: 250.0
//               },
//               loadLocation: {
//                   x: 0,
//                   y: 0,
//                   z: 0
//               },
//               orientation: 0,
//               cargoWeight: 1.5,
//               cargoState: "Loading",
//               cargoType: "Air",
//               cargoParameters: ["Fragile"],
//               loadPlanDetails: {
//                   flightID: 1,
//                   planContainer: 0
//               },
//               processedBy: "sia_super_user",
//               dateProcessed: "2017-10-17 00:00:00"
//             }
//           ]
//         }
//       ],
//       flight_state: "Loading",
//       processed_by: "sia_super_user",
//       date_modified: "2017-10-17 00:00:00",
//       cargo_count: 1,
//       flight_efficiency: 80,
//     }
// ]
// }

const flightsList = {
  loading: true,
  data: false
};

export const flightsListReducer = (state = flightsList, action ) => {
  switch(action.type) {
    case "GET_FLIGHTS_LIST_FULFILLED":
      // const payloadData = JSON.parse(action.payload).data
      const containers = action.payload.data[0].containers;
      return {
        loading:false,
        data: action.payload.data
      };

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
