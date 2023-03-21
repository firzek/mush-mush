import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BottomContainer, MidleContainer, UperContainer, Wrapper } from './style'
const Home = () => {
  const navigate = useNavigate()
  return (
    <Wrapper>
      <UperContainer></UperContainer>
      <MidleContainer><button onClick={()=>{navigate('/adminhome')}}>adminMenu</button></MidleContainer>
      <BottomContainer></BottomContainer>
    </Wrapper>
  )
}
export default Home
