import React, { useState } from "react"
import Input from "../../components/input/input"
import * as S from './style'


const CreateAccount=()=>{
    const [accountData, setAccountData]=useState({
        name:'',
        lastName:'',
        cpf:'',
        phone:'',
        cep:'',
        street:'',
        number:'',
        neighborhood:'',
        complement:'',
        city:'',
        state:'',
        email:'',
        password:''
    })


    return <S.Wrapper>
        <Input label="Nome" handleChange={(e)=>{setAccountData({...accountData,name:e.target.value})}} type="text"></Input>
        <Input label="Sobrenome" handleChange={(e)=>{setAccountData({...accountData,lastName:e.target.value})}} type="text"></Input>
        <Input label="Cpf" handleChange={(e)=>{setAccountData({...accountData,cpf:e.target.value})}} type="text"></Input>
        <Input label="Telefone" handleChange={(e)=>{setAccountData({...accountData,phone:e.target.value})}} type="text"></Input>
        <Input label="Cep" handleChange={(e)=>{setAccountData({...accountData,cep:e.target.value})}} type="text"></Input>
        <Input label="Rua" handleChange={(e)=>{setAccountData({...accountData,street:e.target.value})}} type="text"></Input>
        <Input label="Numero"handleChange={(e)=>{setAccountData({...accountData,number:e.target.value})}} type="text"></Input>
        <Input label="Complemento" handleChange={(e)=>{setAccountData({...accountData,complement:e.target.value})}} type="text"></Input>
        <Input label="Bairro" handleChange={(e)=>{setAccountData({...accountData,neighborhood:e.target.value})}} type="text"></Input>
        <Input label="Cidade" handleChange={(e)=>{setAccountData({...accountData,city:e.target.value})}} type="text"></Input>
        <Input label="Estado" handleChange={(e)=>{setAccountData({...accountData,state:e.target.value})}} type="text"></Input>
        <Input label="E-mail" handleChange={(e)=>{setAccountData({...accountData,email:e.target.value})}} type="email"></Input>
        <Input label="Senha" handleChange={(e)=>{setAccountData({...accountData,nome:e.target.value})}} type="text"></Input>
        <Input label="Confirmar senha" type="text"></Input>
        <button onClick={()=>{console.log(accountData)}}>Criar conta</button>
    </S.Wrapper>

}

export default CreateAccount