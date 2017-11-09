import React from 'react';
import {Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, Tooltip} from 'recharts';

const data = [
    { subject: 'Fork', A: 120, B: 110, fullMark: 150 },
    { subject: 'Spoon', A: 98, B: 130, fullMark: 150 },
    { subject: 'Wine Glass', A: 86, B: 130, fullMark: 150 },
    { subject: 'Blankets', A: 99, B: 100, fullMark: 150 },
    { subject: 'Pillow Case', A: 85, B: 90, fullMark: 150 },
    { subject: 'Bed Sheet', A: 65, B: 85, fullMark: 150 },
];

const InventoryAnalytics = () => {
	return (
  	<RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis/>
    <Tooltip />
      <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
    </RadarChart>
  );
}
export default InventoryAnalytics;
