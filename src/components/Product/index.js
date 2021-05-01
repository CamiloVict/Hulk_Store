import React, {Fragment} from 'react';
import {Article,ImgWrapper, Image, Details, Price, Quantity} from './style';


export const Product = ({id, price, quantity}) => {
    return (
        <Fragment>
            <Article>
            <a href={`/detail/${id}`}>
                <ImgWrapper>
                    <Image src= '' alt = 'item_photo'/>
                </ImgWrapper>
                <Details>
                <Price>
                    <p>`${price}`</p>
                </Price>
                <Quantity>
                    <p>`${quantity}`</p>
                </Quantity>
                </Details>
            </a>
            </Article>
        </Fragment>
    )
}







