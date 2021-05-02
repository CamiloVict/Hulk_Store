import React from 'react'
import {Card, StyledBody} from 'baseui/card';

import {Container,Footer, Title,SubTitle,Description,FooterItem} from './style'

export const CardProduct = (props) => {
  console.dir(props)
    return (
        <Card overrides={{Root: {style: {width: '328px'}}}}>
      <StyledBody>
        <Container>
        <Title>{props.data[1].[0]}</Title>
        <SubTitle>{props.data[1].[2]}</SubTitle>
        <Description>{props.data[1].[1]}</Description>
        <Footer>
            <FooterItem>{props.data[1].[3]}</FooterItem>
            <FooterItem>{props.data[1].[1]}</FooterItem>
        </Footer>
        </Container>
      </StyledBody>
    </Card>
    )
}


