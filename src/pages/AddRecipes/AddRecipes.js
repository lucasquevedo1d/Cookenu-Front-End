import { Typography } from '@mui/material'
import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import AddRecipesForm from './AddRecipesForm'
import { AddRecipe, RecipeContainer, ScreenContainer } from './Styled'

const AddRecipes = () => {
  useProtectedPage()
  return (
    <ScreenContainer>
      <RecipeContainer>
       <Typography variant='h3' align='center' color='ActiveBorder'><AddRecipe>Adicionar receita</AddRecipe></Typography>
      <AddRecipesForm/>
      </RecipeContainer>
    </ScreenContainer>
  )
}

export default AddRecipes