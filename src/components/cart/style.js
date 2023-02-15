import styled from 'styled-components'
export const CartWrapper = styled.div`
  top: 13vh;
  right: 30vh;
  width: 400px;
  height: 400px;
  border: 1px solid black;
  padding: 16px;
  position: fixed;
  background-color: white;
`
export const CartContainer = styled.div`
  overflow: scroll;
  height: 80%;
`

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 8px;
`

export const CartItemImage = styled.img`
  width: 50px;
  height: 50px;
`

export const CartItemName = styled.p`
  margin-left: 8px;
  font-size: 18px;
  font-weight: bold;
`
export const CartHeader = styled.div`
  margin: 10px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`
export const CartItemPrice = styled.p`
  margin-left: 8px;
  font-size: 18px;
  font-weight: bold;
`
export const CartItemQuantity = styled.p`
  margin-left: 8px;
  font-size: 18px;
  font-weight: bold;
`
export const CartTotalPrice = styled.p`
  margin-left: 8px;
  font-size: 18px;
  font-weight: bold;
`
