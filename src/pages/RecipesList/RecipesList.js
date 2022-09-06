import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage';
import { useRequestData } from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import { AddRecipeButton, Loading, RecipeListContainer } from './Styled';
import { goToAddRecipes, gotToRecipedetails } from '../../routes/Coordinator';
import { useNavigate } from 'react-router-dom';
import LoadingPage from '../../components/loadingPage/LoadingPage';
const RecipesList = () => {
  const navigate = useNavigate()
  const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)
  useProtectedPage()
const onClickCard = (id) =>{
gotToRecipedetails(navigate, id)
}
  const listRecipe = recipes.map((recipe) =>{
    return (
    <RecipeCard
    key={recipe.recipe_id}
    title={recipe.title}
    image={recipe.image}
    onClick={() => onClickCard(recipe.recipe_id)}
    />
  )
  })
  return (
    <RecipeListContainer>
      <br></br>
      <br></br>
      {listRecipe.length > 0 ? listRecipe : <Loading><LoadingPage/></Loading>}
      <AddRecipeButton  onClick={() => goToAddRecipes(navigate)}>+</AddRecipeButton>
    </RecipeListContainer>
  )
}

export default RecipesList