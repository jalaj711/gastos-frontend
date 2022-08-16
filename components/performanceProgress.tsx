// import { useEffect, useState } from "react";
import CircularProgress from "./CircularProgress";

export default function PerformanceProgress(){
    const width = (typeof window !== 'undefined' && window.innerWidth) || 500
    const height = (typeof window !== 'undefined' && window.innerHeight) || 300
    const lineWidth = 0.015 * width;
    const radius = (width - width%2) / 2;
    const range = (180 / Math.PI) * 2 * Math.asin(height / (2 * radius)) + 10;
    const offSet = 85 + (180 / Math.PI) * Math.acos(height/(2*radius))

    // const [value, setValue] = useState(0)
    // function increase(val: number){
    //     var _val = val > 100 ? 0 : val+0.1
    //     setValue(_val)
    //     setTimeout(increase, 10, _val)
    // }

    // useEffect(() => {
    //     setTimeout(increase, 10, value)
    // }, [])
  return (
        <CircularProgress value={60} id="performanceCircular" dimension={radius*2} range={range} offSet={offSet} lineWidth={lineWidth}/>
  );
}