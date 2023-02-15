import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border: 1px solid lightgray;
  gap: 10%;
`

export const ImageContainer = styled.div`
  width: 50%;
  height: 200px;
  overflow: hidden;
  margin-bottom: 10px;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`

export const Description = styled.p`
  text-align: center;
  font-size: 14px;
`
export const QuantityContainer = styled.div`
  display: flex;
`
export const Button = styled.button`
  text-align: center;
  font-size: 14px;
`
export const dataContainer = styled.div`
  display: flex;
  flex-direction: column;
`
