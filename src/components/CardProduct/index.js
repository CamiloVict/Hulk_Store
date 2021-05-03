import React from 'react'
import {Card, StyledBody} from 'baseui/card';

import {Container,Footer, Title,SubTitle,Description,FooterItem} from './style'

export const CardProduct = (props) => {
    return (
        <Card overrides={{Root: {style: {width: '328px'}}}}>
      <StyledBody>
        <Container>
            <Title>{props.title}</Title>
            <SubTitle>{props.description}</SubTitle>
            <Description>{props.reference}</Description>
            <Footer>
                <FooterItem>{`${props.price}.00`}</FooterItem>
                <FooterItem>{props.quantity}</FooterItem>
            </Footer>
        </Container>
      </StyledBody>
    </Card>
    )
}


