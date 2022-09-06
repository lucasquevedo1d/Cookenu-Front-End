import { useLayoutEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToRecipesList, gotToLogin } from "../routes/Coordinator"

const useUnprotectedPage = () =>{
    const navigate = useNavigate()
    useLayoutEffect(() =>{
        const token = localStorage.getItem("token")
        if(token){
            goToRecipesList(navigate)
        }
    },[])
}

export default useUnprotectedPage