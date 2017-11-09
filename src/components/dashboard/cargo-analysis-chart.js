import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
//
// const data = [
//       {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
//       {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
//       {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
//       {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
//       {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
//       {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
//       {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},];
const data = [{date: 'May 17', "sia_revenue": 750, "total_revenue": 1100, "Cargo Sharing": 300,},
              {date: 'June 17', "sia_revenue": 700, "total_revenue": 1090, "Cargo Sharing": 350,},
              {date: 'July 17', "sia_revenue": 750, "total_revenue": 1332, "Cargo Sharing": 400,},
              {date: 'Aug 17', "sia_revenue": 800, "total_revenue": 1384, "Cargo Sharing": 450,},
              {date: 'Sept 17', "sia_revenue": 900, "total_revenue": 1500, "Cargo Sharing": 500,},
              {date: 'Oct 17', "sia_revenue": 1000, "total_revenue": 1670, "Cargo Sharing": 550,},
            ]
class CustomizedLabel extends React.Component{
  render() {
    const {x, y, stroke, value} = this.props;

   	return <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">{value}</text>
  }
}

class CustomizedAxisTick extends React.Component{
  render() {
    const {x, y, stroke, payload} = this.props;

   	return (
    	<g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">{payload.value}</text>
      </g>
    );
  }
}


class CargoAnalysisChart extends React.Component {
  render() {
    return(
      <LineChart width={600} height={300} data={this.props.data}
            margin={{top: 20, right: 30, left: 20, bottom: 10}}>
       <XAxis dataKey="date" height={60} tick={<CustomizedAxisTick/>}/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="SIARevenue" stroke="#294b88" label={<CustomizedLabel />}/>
       <Line type="monotone" dataKey="otherCouriers" stroke="#82ca9d" />
       <Line type="monotone" dataKey="amt" stroke="#EFBF4C" />
      </LineChart>
    )
  }
}

export default CargoAnalysisChart;