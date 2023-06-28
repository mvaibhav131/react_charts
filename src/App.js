import { useState } from 'react';
import './App.css';
import BarChart from './component/BarLinePie/BarChart';
import Chart from './component/SimpleBar';
import {userData} from "./Data";
import LineChart from './component/BarLinePie/LineChart';
import PieChart from './component/BarLinePie/PieChart';
import Clickableline from './component/Clickableline';

function App() {
 

  const [data,setData]=useState({
    labels:userData.map((data)=> data.year)  ,
    datasets: [{
      label:"Users Gained",
      data:userData.map((data)=> data.userGain),
      backgroundColor:["rgba(75,192,192,1)","aqua","#50AF95","#f3ba2f","black"],
      borderColor:"black",
      borderWidth:2
    }]
  });

  return (
    <div className="App">
    <h3>All Types Of Chart's</h3>
     <Chart/> 
     <div style={{display:"flex",width:"auto"}}>
     <BarChart chartData={data} />
     <LineChart chartData={data} />
     <PieChart chartData={data} />
     </div>
     <Clickableline/>
    </div>
  );
}

export default App;
