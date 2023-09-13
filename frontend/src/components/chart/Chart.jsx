import React from 'react';
import "./chart.css";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {name: "january", Total: 1200},
    {name: "february", Total: 2100},
    {name: "march", Total: 800},
    {name: "april", Total: 1600},
    {name: "may", Total: 900},
    {name: "june", Total: 1700},
];

const Chart = ({aspect, title}) => {

    
  return (
    <div className='chart'>
        <div className='title'>{title}last 6 months</div>
      <ResponsiveContainer width="100%" height= {400} aspect={aspect}>
      <AreaChart width={730} height={250} data= {data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    {/* <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient> */}
  </defs>
  <XAxis dataKey="name"  stroke="gray"/>
  <YAxis />
  <CartesianGrid strokeDasharray="3 3"  className='chartGrid'/>
  <Tooltip />
  <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
  {/* <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" /> */}
</AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
