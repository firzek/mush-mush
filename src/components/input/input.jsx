import React from "react";
import * as S from './style'

const Input = ({label, handleChange, type, value}) =>{

    return (
        <S.Wrapper>
            <label>{label}</label>
            <input onChange={handleChange} type={type} value={value} />
        </S.Wrapper>

    )
}

export default Input