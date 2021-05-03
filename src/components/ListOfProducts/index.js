import React from 'react'
import { Product } from '../Product'
import { List, Item } from './styles'

export const PhotoCardListComponent = ({ data: { Product = [] } } = {}) => {
  return (
    <List>
      {
        Product.map(Product => <Item key={Product.id}> <PhotoCard {...Product} /> </Item>)
      }
    </List>
  )
}


