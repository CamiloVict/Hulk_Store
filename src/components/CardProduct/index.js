import React from 'react'
import {Card, StyledBody} from 'baseui/card';

import {Container,Footer} from './style'

export const CardProduct = () => {
    return (
        <Card overrides={{Root: {style: {width: '328px'}}}}>
      <StyledBody>
        <Container>
        <h1>REFERENCE</h1>
        <h2>Name</h2>
        <p>Description</p>
        <Footer>
            <p>Price</p>
            <p>Quantity</p>
        </Footer>
        </Container>
      </StyledBody>
    </Card>
    )
}


