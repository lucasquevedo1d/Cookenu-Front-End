import {BrowserRouter, Routes,Route} from "react-router-dom"
import AddRecipes from "../pages/AddRecipes/AddRecipes"
import RecipeDetails from "../pages/RecipeDetails/RecipeDetails"
import RecipesList from "../pages/RecipesList/RecipesList"
import Login from "../pages/Login/Login"
import Resgistration from "../pages/Registration/Resgistration"

const Router = ({setRightButtontext}) =>{
    return(
    
    <Routes>
        <Route index element={<RecipesList/>}/>
        <Route path="/addRecipes" element={<AddRecipes/>}/>
        <Route path="/recipedetails/:id" element={<RecipeDetails/>}/>
        <Route path="/login" element={<Login setRightButtontext={setRightButtontext}/>}/>
        <Route path="/registration" element={<Resgistration setRightButtontext={setRightButtontext}/>}/>
        
    </Routes>
    
    )
}
export default Router