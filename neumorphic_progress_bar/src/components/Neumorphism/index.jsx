import React from 'react'
import * as Styled from "./styles"

const Neumorphism = (props) => {
  return (
    <Styled.Circle1>
        <Styled.Circle2>
            <Styled.Paragraph>{props.progress}%</Styled.Paragraph>
        </Styled.Circle2>
    </Styled.Circle1>
  )
}

export default Neumorphism