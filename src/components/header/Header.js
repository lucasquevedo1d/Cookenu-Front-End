import React from 'react';
import Button from '@mui/material/Button';
import { StyledToolbar, StyledAppBar, Cookenu } from './Styled';
import { goToRecipesList, gotToLogin } from '../../routes/Coordinator';
import { useNavigate } from "react-router-dom"


export const Header = ({rightButtonText, setRightButtontext}) => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    const logout = () =>{
      localStorage.removeItem("token")
    }

    const rightButtonTextAction = () =>{
      if(token){
        logout()
        setRightButtontext("Login")
        gotToLogin(navigate)
      }else{
        gotToLogin(navigate)
      }
    }
  return (
   <div>
    {
      <StyledAppBar>
        <StyledToolbar>
        <Button color="inherit" onClick={() => goToRecipesList(navigate)}><Cookenu>Cookenu</Cookenu></Button>
          <Button color="inherit" onClick={rightButtonTextAction}><Cookenu>{rightButtonText}</Cookenu></Button>
        </StyledToolbar>
      </StyledAppBar>
    }
      </div>
   
  );
}
