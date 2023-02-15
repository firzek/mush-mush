import React from 'react'
import ShoppingCard from './shopping-card/shopping-card'
import * as S from './style'

const items = [
  {
    id: 1,
    description: 'Item 1',
    image: 'https://via.placeholder.com/50x50',
    price: 50,
    quantity: 1,
  },
  {
    id: 2,
    description: 'Item 2',
    image: 'https://via.placeholder.com/50x50',
    price: 60,
    quantity: 1,
  },
  {
    id: 3,
    description: 'Item 3',
    image: 'https://via.placeholder.com/50x50',
    price: 70,
    quantity: 2,
  },
]

const Shopping = () => {
  return (
    <S.Wrapper>
      {items.map((item) => (
        <ShoppingCard
          imageUrl={item.image}
          price={item.price}
          description={item.description}
          id={item.id}
          key={item.id}
        />
      ))}
    </S.Wrapper>
  )
}
export default Shopping
