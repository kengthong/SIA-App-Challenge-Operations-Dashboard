import React from 'react';

import { airports } from './airports.js';
import { flightData } from './flightData.js';
import { mapData } from './mapData.js';
import { Chart, Frame, Stat } from 'g2';

class InventoryHeatMap extends React.Component {
  render() {
    return(
      <div id="chart">
        <div style={{marginTop: "40px", height: '200px'}} className="title">
          Thicker Lines represents greater inventory losses
        </div>
      </div>
    )
  }

  componentDidMount(){

    // const userData = [
    //   {name: 'Russia',value: 86.8},
    //   {name: 'China',value: 106000000.3},
    //   {name: 'Japan',value: 94.7},
    //   {name: 'Mongolia',value: 98},
    //   {name: 'Canada',value: 98.4},
    //   {name: 'United Kingdom',value: 97.2},
    //   {name: 'United States of America',value: 98.3},
    //   {name: 'Brazil',value: 96.7},
    //   {name: 'Argentina',value: 95.8},
    //   {name: 'Algeria',value: 101.3},
    //   {name: 'France',value: 94.8},
    //   {name: 'Germany',value: 96.6},
    //   {name: 'Ukraine',value: 86.3},
    //   {name: 'Egypt',value: 102.1},
    //   {name: 'South Africa',value: 101.3},
    //   {name: 'India',value: 107.6},
    //   {name: 'Australia',value: 99.9},
    //   {name: 'Saudi Arabia',value:130.1},
    //   {name: 'Afghanistan',value: 106.5},
    //   {name: 'Kazakhstan',value:93.4},
    //   {name: 'Indonesia',value: 101.4}
    // ];
    //
    // let frame = new Frame(userData);
    //
    // frame.addCol('trend', function(obj) {
    //   return 0;
    // });

    // let map = [];

    let map = [];
    const features = mapData.features;
    // 获取出所有的地图区域名称
    for(let i=0; i<features.length; i++) {
      const name = features[i].properties.name;
      map.push({
        "name": name
      });
    }

    const chart = new Chart({
      id: 'chart',
      forceFit: true,
      height: 450,
      animate: false,
      plotCfg: {
        margin: [40, 90, 40, 20]
      }
    });

    const multiplier = 1.3;

    // const defs = {
    //   '..long': {
    //     max: -66 * multiplier,
    //     min:-125 * multiplier
    //   },
    //   '..lant': {
    //     max: 50 * multiplier,
    //     min:24 * multiplier
    //   },
    //   '..x': {
    //     max: -66 * multiplier,
    //     min:-125 * multiplier
    //   },
    //   '..y': {
    //     max: 50 * multiplier,
    //     min:24 * multiplier
    //   }
    // };

    const defs = {
      '..long': {
        max: 161.89,
        min:-144.485
      },
      '..lant': {
        max: 120.635,
        min:-27.666
      },

      '..x': {
        max: 161.89,
        min:-144.485
      },
      '..y': {
        max: 120.635,
        min:-27.666
      }
    };
    chart.source(map, defs);
    chart.tooltip({
      title: null
    });

    const backView = chart.createView();

    backView.source(map);
    backView.tooltip(false); // 背景不显示tooltip
    backView.polygon().position(Stat.map.region('name', mapData)).style({
      fill: 'rgb(204,204,204)',
      stroke: '#fff',
      lineWidth: 1
    });

    let linksByOrigin = {},
      countByAirport = {},
      locationByAirport = {},
      subFlights = [];
    // 计算飞机的起飞、降落数

    const flights = flightData;

    flights.forEach(function(flight) {
      const origin = flight.origin,
          destination = flight.destination;
      countByAirport[origin] = (countByAirport[origin] || 0) + 1;
      countByAirport[destination] = (countByAirport[destination] || 0) + 1;
    });

    // Only consider airports with at least one flight.
    let _airports = airports.filter(function(airport) {
      if (countByAirport[airport.iata_faa]) {
        airport.count = countByAirport[airport.iata_faa]; // 加入班次数量
        airport.x = airport.longitude;
        airport.y = airport.latitude;
        airport.id = airport.iata_faa;
        return true;
      }
    });

    const airView = chart.createView();
    airView.source(_airports);
    airView.point().position(Stat.map.location('longitude*latitude'))
           .color('rgb(97,145,185)')
           .shape('circle')
           .style({
             stroke: '#eee',
             lineWidth: 1
           })
           .size('count', 15, 3)
           .tooltip('iata_faa*count');

    console.log('what ', subFlights, airports);

    const flightView = chart.createView(); // 飞行路线
    flightView.tooltip(false);
    flightView.source(subFlights);
    flightView.edge()
      .position(
        Stat.link('origin*destination', airports)
      )
      .color('golden')
      .opacity(0.5)
      // msg for kt. Was able to somehow make dynamic width with this. PLay around. Its not accurate yet cos sg shouldnt be so big line
      .size('count');



    chart.render();

    let preShape;

    function getFlights(iata_faa) {
      console.log('wtf ', iata_faa);
      let rst = [];
      flights.forEach(function(flight) {
        if (flight.origin == iata_faa || flight.destination == iata_faa) {
          rst.push(flight);
        }
      });
      console.log('close', rst);
      return rst;
    }

    let preId;

    chart.on('plotmove', function(ev){
      const records = airView.getSnapRecords({
        x: ev.x,
        y: ev.y
      });
      if (records.length) {
        const obj = records[0]._origin;
        const iata_faa = obj.iata_faa;
        if (preId !== iata_faa) {
          subFlights = getFlights(iata_faa);
          flightView.changeData(subFlights);
          preId = iata_faa;
        }
      }
    });

    chart.on('plotleave', function(ev){
      if (subFlights.length) {
        subFlights = [];
        flightView.changeData([]);
      }
    });
  }
}

export default InventoryHeatMap;

// const MyComponent = React.createClass({
//     componentDidMount: function() {
//       const Frame = G2.Frame;
//       const Stat = G2.Stat;
//       axios.get('../../../static/data/world.geo.json').then(function (response) {
//         const userData = [
//           {name: 'Russia',value: 86.8},
//           {name: 'China',value: 106.3},
//           {name: 'Japan',value: 94.7},
//           {name: 'Mongolia',value: 98},
//           {name: 'Canada',value: 98.4},
//           {name: 'United Kingdom',value: 97.2},
//           {name: 'United States of America',value: 98.3},
//           {name: 'Brazil',value: 96.7},
//           {name: 'Argentina',value: 95.8},
//           {name: 'Algeria',value: 101.3},
//           {name: 'France',value: 94.8},
//           {name: 'Germany',value: 96.6},
//           {name: 'Ukraine',value: 86.3},
//           {name: 'Egypt',value: 102.1},
//           {name: 'South Africa',value: 101.3},
//           {name: 'India',value: 107.6},
//           {name: 'Australia',value: 99.9},
//           {name: 'Saudi Arabia',value:130.1},
//           {name: 'Afghanistan',value: 106.5},
//           {name: 'Kazakhstan',value:93.4},
//           {name: 'Indonesia',value: 101.4}
//         ];
//         let frame = new Frame(userData);
//         frame.addCol('trend', function(obj) {
//           return (obj.value > 100) ? 1 : 0;
//         });
//         let map = [];
//         const mapData = response.data;
//         const features = mapData.features;
//         for(let i=0; i<features.length; i++) {
//           const name = features[i].properties.name;
//           map.push({
//             "name": name
//           });
//         }
//         const chart = new G2.Chart({
//           id: 'chart',
//           forceFit: true,
//           height: 450,
//           syncXYScales: true, // 统一视图的度量
//           plotCfg: {
//             margin: [55, 20]
//           }
//         });
//         chart.tooltip({
//           title: null
//         });
//         chart.legend('trend', {
//           position: 'left'
//         })
//         // 绘制世界地图背景
//         const view = chart.createView();
//         view.source(map);
//         view.tooltip(false);
//         view.polygon().position(Stat.map.region('name', mapData)).shape('stroke').style({
//           fill: '#fff',
//           stroke: '#ccc',
//           lineWidth: 1
//         });
//         // 绘制展示数据
//         const userView = chart.createView();
//         userView.source(frame, {
//           'trend': {
//             type: 'cat',
//             alias: '每100位女性对应的男性数量',
//             values: ['女性更多', '男性更多']
//           }
//         });
//         userView.polygon().position(Stat.map.region('name*value', mapData)).color('trend',['#C45A5A','#14647D']).opacity('value').tooltip('name*trend');
//         chart.render();
//       });
//     },
//     render() {
//         return (
//           <div>
//             <div id="chart"></div>
//     </div>
//         );
//     },
//   });
