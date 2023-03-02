import React, { useState,useEffect,useCallback } from "react"
import Input from "../../components/input/input"
import * as S from './style'
import axios from "axios"


const CreateAccount=()=>{
    const [accountData, setAccountData]=useState({
        name:'',
        lastName:'',
        cpf:'',
        phone:'',
        street:'',
        number:'',
        neighborhood:'',
        complement:'',
        city:'',
        state:'',
        email:'',
        password:''
    })
    const [cep, setCep]=useState('')


    const formatCPF = (cpf) => {
        cpf = cpf.replace(/\D/g, "");
        cpf = cpf.slice(0, 11);
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        return cpf;
      };
      const formatPhone = (phone) => {
        const regexDDD = /(\d{2})/;
        const regexPrefix = /(\d{4,5})/;
        const regexSuffix = /(\d{4})/;
        phone = phone.replace(/\D/g, '')
        .replace(regexDDD, '($1) ') 
        .replace(regexPrefix, '$1-')
        .replace(regexSuffix, '$1')
        .slice(0, 15);

        return phone;
      };
      const obterUsuarios = useCallback(async () => {
        const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        setAccountData((prevState) => ({
          ...prevState,
          neighborhood: resposta.data.bairro,
          street: resposta.data.logradouro,
          state: resposta.data.uf,
          city: resposta.data.localidade,
        }));
      }, [cep])


     useEffect(() => {

    if(cep.length===8){
         obterUsuarios()
    }
  }, [cep,obterUsuarios]);

    return <S.Wrapper>
        <Input label="Nome" handleChange={(e)=>{setAccountData({...accountData,name:e.target.value})}} value={accountData.name} type="text"></Input>
        <Input label="Sobrenome" handleChange={(e)=>{setAccountData({...accountData,lastName:e.target.value})}} value={accountData.lastName} type="text"></Input>
        <Input label="Cpf" handleChange={(e)=>{setAccountData({...accountData,cpf:formatCPF(e.target.value)})}} value={accountData.cpf} type="text"></Input>
        <Input label="Telefone" handleChange={(e)=>{setAccountData({...accountData,phone:formatPhone(e.target.value)})}} value={accountData.phone} type="text"></Input>
        <Input label="Cep" handleChange={(e)=>{setCep(e.target.value)}} value={cep} type="text"></Input>
        <Input label="Rua" handleChange={(e)=>{setAccountData({...accountData,street:e.target.value})}} value={accountData.street} type="text"></Input>
        <Input label="Numero"handleChange={(e)=>{setAccountData({...accountData,number:e.target.value})}} value={accountData.number} type="text"></Input>
        <Input label="Complemento" handleChange={(e)=>{setAccountData({...accountData,complement:e.target.value})}} value={accountData.complement} type="text"></Input>
        <Input label="Bairro" handleChange={(e)=>{setAccountData({...accountData,neighborhood:e.target.value})}} value={accountData.neighborhood} type="text"></Input>
        <Input label="Cidade" handleChange={(e)=>{setAccountData({...accountData,city:e.target.value})}} value={accountData.city} type="text"></Input>
        <Input label="Estado" handleChange={(e)=>{setAccountData({...accountData,state:e.target.value})}} value={accountData.state} type="text"></Input>
        <Input label="E-mail" handleChange={(e)=>{setAccountData({...accountData,email:e.target.value})}} value={accountData.email} type="email"></Input>
        <Input label="Senha" handleChange={(e)=>{setAccountData({...accountData,nome:e.target.value})}} value={accountData.password} type="text"></Input>
        <Input label="Confirmar senha" type="text"></Input>
        <button onClick={()=>{console.log(accountData)}}>Criar conta</button>
    </S.Wrapper>

}

export default CreateAccount