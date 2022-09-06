import React, { useState } from 'react'
import { Cookenu, CookenuButton, InputsContainer } from './Styled'
import TextField from '@mui/material/TextField';
import useForm from '../../hooks/useForm';
import Button from "@mui/material/Button"
import { login } from '../../services/User';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

export const LoginForm = ({setRightButtontext}) => {
  const [form, onChange, clear] = useForm({ email: "", password: "" })
  const [isLoading, setIsloading] = useState(false)
  const navigate = useNavigate()
  const onSubmitForm = (event) => {
    event.preventDefault()
    login(form, clear, navigate, setRightButtontext, setIsloading)
  }

 
  return (
      <InputsContainer>
        <form onSubmit={onSubmitForm}>
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
            <CookenuButton>{isLoading ? <CircularProgress color='inherit' size={24}/> : <>Entrar</>}</CookenuButton>
          </Button>
        </form>
      </InputsContainer>
  )
}

export default LoginForm