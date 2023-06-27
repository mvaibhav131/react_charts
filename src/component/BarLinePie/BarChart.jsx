import React from 'react'
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from "chart.js/auto" //is same as register chartjs

const BarChart = ({chartData}) => {
  return (
    <div>
      <div style={{width:500,margin:40}}>
      <Bar data={chartData} options={{}}/>
      <h2>Bar Chart</h2>
      </div>
    </div>
  )
}

export default BarChart;
