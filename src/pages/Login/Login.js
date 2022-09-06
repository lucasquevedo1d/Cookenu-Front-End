import React from 'react'
import { useNavigate } from "react-router-dom"
import { Cookenu, LogoImage, ScreenContainer, SignUpButtonContainer } from './Styled'
import Button from "@mui/material/Button"
import LoginForm from './LoginForm';
import Panela from "../../assets/img/panela.png"
import { goToRegistration } from '../../routes/Coordinator';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';
export const Login = ({setRightButtontext}) => {
  useUnprotectedPage()
  const navigate = useNavigate()
  return (
    <ScreenContainer>
      <LogoImage src={Panela} />
      <Cookenu><h1>Cookenu</h1></Cookenu>
      <LoginForm  setRightButtontext={setRightButtontext}/>
        <SignUpButtonContainer>
        <Button
            color='inherit' 
            fullWidth
            type='submit'
            margin="normal"
            onClick={() => goToRegistration(navigate)}>
            Não possui conta? Cadastre-se
          </Button>
            
          </SignUpButtonContainer>
      
    </ScreenContainer>
  )
}

export default Login