import React from 'react'
import {Card, StyledBody} from 'baseui/card';

import {Container,Footer} from './style'

export const CardProduct = (props) => {
  console.dir(props)
    return (
        <Card overrides={{Root: {style: {width: '328px'}}}}>
      <StyledBody>
        <Container>
        <h1>{props.data[3]}</h1>
        <h2>{props.data[1]}</h2>
        <p>{props.data[2]}</p>
        <Footer>
            <p>{props.data[4]}</p>
            <p>{props.data[5]}</p>
        </Footer>
        </Container>
      </StyledBody>
    </Card>
    )
}


