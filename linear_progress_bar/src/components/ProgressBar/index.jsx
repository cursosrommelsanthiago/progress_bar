import React, { useState, useEffect } from "react";

import * as Styled from "./styles"

const ProgressBar = () => {
    // const firstDayOfYear = new Date(new Date().getFullYear(), 0, 1).getTime()
    // const firstDayOfNextYear = new Date(new Date().getFullYear() + 1, 0, 1).getTime()
    
    // const getProgress = () => {
    //   const now = new Date().getTime()
    //   return Math.round((now - firstDayOfYear) / (firstDayOfNextYear - firstDayOfYear) * 100);
    // }
    
    // const progress = getProgress()
    const [progress, setProgress] = useState(0)

    useEffect(()=>{
        const interval= setInterval(()=>{
          setProgress((oldvalue)=>{
       
            let newValue=oldvalue + 1;
       
            if(newValue>49){
              clearInterval(interval);
            }
       
            return newValue;
       
          })
        }, 150)
    },[]);

    return (
        <Styled.Container>
            <h1>Linear Progress Bar</h1>
            <Styled.ProgressbarContainer>
            <Styled.ProgressBarComplete style={{width: `${progress}%`}}>
                <Styled.ProgressBarLiquid></Styled.ProgressBarLiquid>
            </Styled.ProgressBarComplete>
            <Styled.Progress color={progress > 45 ? "brack" : "#40acf3"}>{progress}%</Styled.Progress>
            </Styled.ProgressbarContainer>
        </Styled.Container>
    )
}

export default ProgressBar