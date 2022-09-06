import { Typography } from '@material-ui/core'
import { CircularProgress } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import LoadingPage from '../../components/loadingPage/LoadingPage'
import { BASE_URL } from '../../constants/urls'
import useProtectedPage from '../../hooks/useProtectedPage'
import { useRequestData } from '../../hooks/useRequestData'
import { RecipeContainer, RecipeImage, ScreenContainer } from './Styled'

const RecipeDetails = () => {
  useProtectedPage()
  const params = useParams()
  const recipe = useRequestData({}, `${BASE_URL}/recipe/${params.id}`)[0]
  
  return (
    <ScreenContainer>
      {
        recipe ? <RecipeContainer>
          <RecipeImage src={recipe.image}/>
          <Typography gutterBottom align={"center"} variant={"h5"} color={"error"}>{recipe.title}</Typography>
          <Typography align={"center"}>{recipe.description}</Typography>
        </RecipeContainer>
      : <LoadingPage />}
    </ScreenContainer>
  )
}

export default RecipeDetails