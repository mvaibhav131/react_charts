import React from 'react'
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from "chart.js/auto" //is same as register chartjs

// Bar Chart Function 
const BarChart = ({chartData}) => {
  return (
    <div>
      <div style={{width:500,margin:15,padding:5,border:"1px solid black"}}>
      <Bar data={chartData} options={{}}/>
      <h2>Bar Chart</h2>
      </div>
    </div>
  )
}

export default BarChart;
