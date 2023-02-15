import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Wrapper, HeaderOptions, HeaderContainer, IconContainer } from './style'
import ShoppingCart from '../../assets/svg-components/shopping-cart-icon'
import FaceBookIcon from '../../assets/svg-components/facebook-icon'
import TwitterIcon from '../../assets/svg-components/twitter-icon'
import InstaGramIcon from '../../assets/svg-components/instagram-icon'
import Cart from '../cart/cart'

const Header = () => {
  const navigate = useNavigate()
  const [cartIsopen, setCartIsOpen] = useState(true)

  return (
    <Wrapper>
      <HeaderContainer>
        <HeaderOptions onClick={() => navigate('/sobre')}>Sobre</HeaderOptions>
        <HeaderOptions onClick={() => navigate('/contato')}>Contatos</HeaderOptions>
        <HeaderOptions
          onClick={() => {
            navigate('/shopping')
          }}
        >
          Shopping
        </HeaderOptions>
      </HeaderContainer>
      <HeaderContainer>
        <IconContainer>
          <FaceBookIcon />
        </IconContainer>
        <IconContainer>
          <InstaGramIcon />
        </IconContainer>
        <IconContainer>
          <TwitterIcon />
        </IconContainer>
      </HeaderContainer>
      <HeaderContainer>
        <IconContainer onClick={() => setCartIsOpen(!cartIsopen)}>
          <ShoppingCart />
        </IconContainer>
      </HeaderContainer>
      {cartIsopen ? <Cart /> : null}
    </Wrapper>
  )
}
export default Header
