import React from "react";
import { useNavigate } from 'react-router-dom'
import * as S from './style'
const AdminHome=()=>{
    const navigate = useNavigate()
    return(
        <S.Wrapper>
            <button onClick={()=>{navigate('/adminhome/addmush')}}>Adcionar cogumelo</button><button></button><button></button>
        </S.Wrapper>


)
}
export default AdminHome