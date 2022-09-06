import { Fab } from "@material-ui/core";
import styled from "styled-components";

export const RecipeListContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin: 30px;
margin-top: 80px;
`
export const AddRecipeButton = styled(Fab)`
  position: fixed !important;
  right: 20px;
  bottom: 20px;
  z-index: 3;
  background-color:#F25C05;
  color: white;
`
export const Loading = styled.div`
display:flex;
justify-content: center;
align-items: center;
margin: auto;
`
