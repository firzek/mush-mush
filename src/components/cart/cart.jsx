import {
  CartContainer,
  CartHeader,
  CartItem,
  CartItemImage,
  CartItemName,
  CartItemPrice,
  CartItemQuantity,
  CartTotalPrice,
  CartWrapper,
} from './style'

const Cart = () => {

  const storageItems = JSON.parse(localStorage.getItem('myCart') || '{"items":{},"total":0}');
  const items=Object.values(storageItems.items)

  return (
    <CartWrapper>
      <CartHeader>
        Meu carrinho {items.length} item
        <button>X</button>
      </CartHeader>
      <CartContainer>
        {items.map((item) => {
          console.log(items)
          return (
          <CartItem key={item.id}>
            <CartItemImage src={item.image} alt={item.name} />
            <CartItemName>{item.name}</CartItemName>
            <CartItemQuantity>
              <button>+</button>
              <input value={item.quantity} />
              <button>-</button>
            </CartItemQuantity>
            <CartItemPrice>R${item.price * item.quantity}</CartItemPrice>
          </CartItem>
        )
        })}
      </CartContainer>
      <CartTotalPrice>
        {items.map((item) => item.price * item.quantity).reduce((total, price) => total + price, 0)}
      </CartTotalPrice>
    </CartWrapper>
  )
}

export default Cart
