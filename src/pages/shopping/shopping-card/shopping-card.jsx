import React, { useState } from 'react'
import * as S from './style'
import { ShoppingCartContext } from '../../../contexts/shopping-cart-context'
import { useContext } from 'react'

const ShoppingCard = ({ imageUrl, price, description, id }) => {
  const {state, dispatch} = useContext(ShoppingCartContext)
  const [quantity, setQuantity] = useState(0)
  const buy = () => {
    
    id in state.items
      ? dispatch({ type: 'increment', payload: { id: id, quantity: quantity } })
      : dispatch({
          type: 'add',
          payload: {
            quantity: quantity,
            price: price,
            description: description,
            imageUrl: imageUrl,
            id: id,
          },
        })
  }
  return (
    <S.CardContainer key={id}>
      <S.ImageContainer>
        <S.Image src={imageUrl} alt="product" />
      </S.ImageContainer>
      <S.dataContainer>
        <S.Price>{price} R$</S.Price>
        <S.Description>{description}</S.Description>
        <S.QuantityContainer>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
          <input value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
          <button onClick={() => setQuantity(quantity - 1)}>-</button>
        </S.QuantityContainer>
        <S.Button onClick={(e) => {e.preventDefault(); buy()}}>Comprar</S.Button>
      </S.dataContainer>
    </S.CardContainer>
  )
}

export default ShoppingCard
