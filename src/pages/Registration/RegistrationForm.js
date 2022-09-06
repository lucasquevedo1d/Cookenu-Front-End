import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import useForm from '../../hooks/useForm';
import Button from "@mui/material/Button"
import { registration } from '../../services/User';
import { useNavigate } from 'react-router-dom';
import {Cadastro, CadastroButton, InputsContainerRegistration} from "./Styled"
import { CircularProgress } from '@mui/material';

export const RegistrationForm = ({setRightButtontext}) => {
  const [form, onChange, clear] = useForm({name:"", email: "", password:"" })
  const [isLoading, setIsloading] = useState(false)
  const navigate = useNavigate()
  const onSubmitForm = (event) => {
    registration(form, clear, navigate, setRightButtontext, setIsloading)
    event.preventDefault()
   
  }

 
  return (
      <InputsContainerRegistration>
        <form onSubmit={onSubmitForm}>
        <TextField
            label="Nome"
            name={"name"}
            value={form.name}
            onChange={onChange}
            fullWidth
            margin='normal'
            required
          />
          <TextField
            label="Email"
            name={"email"}
            value={form.email}
            onChange={onChange}
            fullWidth
            margin='normal'
            type={"email"}
            required
          />
          <TextField
            label="Senha"
            name={"password"}
            value={form.password}
            onChange={onChange}
            fullWidth
            margin='normal'
            type={"password"}
            required
          />
          <Button 
            fullWidth
            type='submit'
            color='primary'
            variant='contained'
            margin="normal">
          <CadastroButton>{isLoading ? <CircularProgress color='inherit' size={24}/> : <>Cadastrar</>}</CadastroButton>  
          </Button>
        </form>
     </InputsContainerRegistration>
  )
}

