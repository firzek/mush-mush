import React from "react";
import * as S from './style'

const Input = ({label,handleChange, type}) =>{

    return (
        <S.Wrapper>
            <label>{label}</label>
            <input onChange={handleChange} type={type}/>
        </S.Wrapper>

    )
}

export default Input