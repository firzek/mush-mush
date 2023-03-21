import React from "react";
import { useState } from "react";
import Input from "../../components/input/input";
import * as S from './style'
import { mushroomPost } from "../../userCases/mushrrom-requests";

const AdminAddMush=()=>{
    const [newMush, setNewMush]=useState({
        price:'',
        desciption:'',
        stock: 0,
        name:''
    })
    return(
        <S.Wrapper>
            <Input label={'Preço'} handleChange={(e)=>{setNewMush({...newMush,price:e.target.value})}}/>
            <Input label={'Descrição'} handleChange={(e)=>{setNewMush({...newMush,description:e.target.value})}}/>
            <Input label={'Stock'} handleChange={(e)=>{setNewMush({...newMush,stock:e.target.value})}}/>
            <Input label={'Nome'} handleChange={(e)=>{setNewMush({...newMush,name:e.target.value})}}/>
            <button onClick={()=>mushroomPost(newMush)}>Add</button>
        </S.Wrapper>


    )
}
export default AdminAddMush