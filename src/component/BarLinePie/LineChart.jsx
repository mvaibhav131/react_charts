import React from 'react'
import { Line } from 'react-chartjs-2'
import {Chart as ChartJS} from "chart.js/auto" //is same as register chartjs


const LineChart = ({chartData}) => {
  return (
    <div>
       <div style={{width:500,margin:15,padding:5,border:"1px solid black"}}>
      <Line data={chartData} options={{}}/>
      <h2>Line Chart</h2>
      </div>
    </div>
  )
}

export default LineChart;
