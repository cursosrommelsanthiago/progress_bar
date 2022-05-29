import React, { useState, useEffect } from "react";

import * as Styled from "./styles";
import { GlobalStyle } from "../GlobalStyle";
import Neumorphism from "../components/Neumorphism";
import Progress from "../components/Progress";

const App = () => {
    const [progress, setProgress] = useState(0)

    useEffect(()=>{
        const interval= setInterval(()=>{
          setProgress((oldvalue)=>{
       
            let newValue=oldvalue + 1;
       
            if(newValue>99){
              clearInterval(interval);
            }
       
            return newValue;
       
          })
        }, 15)
    },[]);

    return(
        <>
            <Styled.Container>
                <GlobalStyle />
                <Styled.OutsideProgressBar>
                    <Neumorphism progress={progress}/>
                    <Styled.InsideProgressBar>
                        <Progress />
                    </Styled.InsideProgressBar>
                </Styled.OutsideProgressBar>
            </Styled.Container>
        </>
    )
}

export default App;