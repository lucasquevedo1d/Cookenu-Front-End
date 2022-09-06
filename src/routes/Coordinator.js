export const gotToLogin = (navigate) =>{
    navigate("/login")
}

export const goToRecipesList = (navigate) =>{
    navigate("/")
}

export const goToRegistration = (navigate) =>{
    navigate("/registration")
}

export const gotToRecipedetails = (navigate, id) =>{
    navigate(`/recipedetails/${id}`)
}

export const goToAddRecipes = (navigate) =>{
    navigate("/addRecipes")
}