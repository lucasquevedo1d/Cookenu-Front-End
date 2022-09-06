import { Button, CircularProgress, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../constants/urls'
import useForm from '../../hooks/useForm'
import { AddRecipeButton, InputsContainerRegistration } from './Styled'

export const AddRecipesForm = () => {
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({title:"", description:"", image:""})
    const [isLoading, setIsloading] = useState(false)
    const createrecipe = () =>{
        setIsloading(true)
        axios.post(`${BASE_URL}/recipe`, form, {
           headers:{
            Authorization: localStorage.getItem("token")
           } 
        })
        .then((res) => {
            setIsloading(false)
            alert(res.data.message)})
        .catch((err) => {
            setIsloading(false)
            alert(err.response.message)})
    }
    
    const onsubmitForm = (event) =>{
        event.preventDefault()
        createrecipe()
        clear()
    }
  return (

    <InputsContainerRegistration>
   
    <form onSubmit={onsubmitForm}>
    <TextField
        label="Titulo"
        name={"title"}
        value={form.title}
        onChange={onChange}
        fullWidth
        margin='normal'
        required
      />
      <TextField
        label="Descrição"
        name={"description"}
        value={form.description}
        onChange={onChange}
        fullWidth
        margin='normal'
        required
      />
      <TextField
         label="Foto"
         name={"image"}
         value={form.image}
         onChange={onChange}
         fullWidth
         margin='normal'
         required
      />
      <Button 
        
        fullWidth
        type='submit'
        color='primary'
        variant='contained'
        margin="normal">
      <AddRecipeButton>{isLoading ? <CircularProgress color='inherit' size={24}/> : <>Adicionar Receita</>}</AddRecipeButton>  
      </Button>
    </form>
 </InputsContainerRegistration>
  )
}

export default AddRecipesForm