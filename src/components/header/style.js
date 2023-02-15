import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 20vh;
  width: 100%;
  background-image: linear-gradient(#deddca, #fc8b3f, #8131ff);
  display: flex;
  justify-content: center;
  gap: 20px;
  position: fixed;
  z-index: 10;
`
export const HeaderContainer = styled.div`
  margin: 5vh;
  display: flex;
  gap: 30px;
`
export const IconContainer = styled.div`
  display: flex;
  cursor: pointer;
`
export const HeaderOptions = styled.span`
  cursor: pointer;
  :hover {
    box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
    transform: translateY(-0.25em);
  }
  margin: 20px;
  width: 100px;
  height: 20px;
`
