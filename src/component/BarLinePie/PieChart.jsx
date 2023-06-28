import React from 'react'
import { Pie } from 'react-chartjs-2'

const PieChart = ({chartData}) => {
  return (
    <div>
     <div style={{width:330,margin:15,padding:1,border:"1px solid black"}}>
     <Pie data={chartData} options={{}} />
     <h2>Pie Chart</h2>
    </div>
    </div>
  )
};

export default PieChart;
