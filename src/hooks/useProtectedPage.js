import { useLayoutEffect } from "react"
import { useNavigate } from "react-router-dom"
import { gotToLogin } from "../routes/Coordinator"

const useProtectedPage = () =>{
    const navigate = useNavigate()
    useLayoutEffect(() =>{
        const token = localStorage.getItem("token")
        if(!token){
            gotToLogin(navigate)
        }
    },[])
}

export default useProtectedPage