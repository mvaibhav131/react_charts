import React from 'react';
import {Chart as ChartJS,BarElement,CategoryScale,LinearScale,Tooltip,Legend} from "chart.js";
import {Bar} from "react-chartjs-2";

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)
// import {Chart as ChartJS} from "chart.js/auto" 

const Chart = () => {
 const data={
    labels:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
    datasets:[{
        label:"week1",
        data:[12,23,4,33,11,41,7],
        backgroundColor:"aqua",
        borderColor:"black",
        borderWidth:1,
    },
    {
        label:"week2",
        data:[5,33,14,35,6,21,18],
        backgroundColor:"blue",
        borderColor:"black",
        borderWidth:1,
    }
  ],
}

const options={

}

  return (
    <div>
       <p>1. Bar Chart </p>
      <div style={{padding:'20px',width:"80%",margin:'auto'}}>
        <Bar
        data={data}
        options={options}>

        </Bar>
      </div>
    </div>
  )
}

export default Chart;
