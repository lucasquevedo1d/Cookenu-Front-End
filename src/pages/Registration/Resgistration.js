import React from 'react'
import useUnprotectedPage from '../../hooks/useUnprotectedPage';
import { RegistrationForm } from './RegistrationForm';
import { Cadastro, ScreenContainerRegistration } from './Styled';
export const Registration = ({setRightButtontext}) => {
  useUnprotectedPage()
  return (
    
    
    <ScreenContainerRegistration>
    <Cadastro>Cadastro</Cadastro>
      <RegistrationForm setRightButtontext={setRightButtontext}/>
      </ScreenContainerRegistration>
        
        
  )
}

export default Registration