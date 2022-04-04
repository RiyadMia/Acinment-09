import React from 'react';
import { Bar, BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashbosrd.css'
const Dashboard = () => {
    const data=[
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    
    return (
        <div className='grap-container'>
      <div className='grap'>
          <h2>MONTH WISE SELL</h2>
            <LineChart width={400} height={300} data={data}>
                <Line dataKey={'sell'}></Line>
                <XAxis dataKey='month'></XAxis>
                <YAxis></YAxis>
                <Tooltip />
            </LineChart>
 </div>
      <div className='margin-right'>
          <h2>Revenue VS month </h2>
      <BarChart width={400} height={300} data={data}>
         <XAxis dataKey="month" stroke="#8884d8" />
         <YAxis />
         <Tooltip />
         <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
         <Bar dataKey="revenue" fill="#8884d8" barSize={30} />
         </BarChart>   
       </div>
 </div>
    );
};

export default Dashboard;