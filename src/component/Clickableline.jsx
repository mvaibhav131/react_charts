import React, { useRef } from 'react';
import {Chart as ChartJS} from "chart.js/auto";
import { Line, getElementAtEvent } from 'react-chartjs-2';

const Clickableline = () => {
    const data={
        labels:["Jan","Feb","Mar","Apr"],
        datasets:[{
            label:"3 months",
            data:[12,23,4,15],
            backgroundColor:"blue",
            borderColor:"blue",
            tension:0.4,
            link:["https://www.chartjs.com","https://www.google.com","https://www.chartjs3.com","https://www.chartjs4.com"]
            // borderWidth:1,
        }]
    }
    const chartsRef=useRef();
    const onClicks=(e)=>{
        if(getElementAtEvent(chartsRef.current,e).length>0){
            // console.log(getElementAtEvent(chartsRef.current,e))
            const clickDatasetIndex=getElementAtEvent(chartsRef.current,e)[0].datasetIndex
            // console.log(clickDatasetIndex);
            const dataPoint=getElementAtEvent(chartsRef.current,e)[0].index
            // console.log(dataPoint);
            const link=data.datasets[clickDatasetIndex].link[dataPoint]
            window.open(link,"_blank");
        }
    }
  return (
    <div>
      <h3 style={{padding:"20px"}}>Clickable Links on Line Chart</h3>
      <div style={{width:"80%",padding:"20px"}}>
        <Line data={data} options={{}} onClick={onClicks} ref={chartsRef}/>
      </div>
    </div>
  )
}

export default Clickableline;
