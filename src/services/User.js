import axios from 'axios';
import {BASE_URL} from "../constants/urls"
import { goToRecipesList } from '../routes/Coordinator';

export const login = (body, clear, navigate, setRightButtontext, setIsloading) =>{
    setIsloading(true)
    axios.post(`${BASE_URL}/user/login`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        setIsloading(false)
        goToRecipesList(navigate)
        setRightButtontext("Logout")
        
    })
    .catch((err) => {
        setIsloading(false)
        alert(err.response.data.message)
        
    })
   
    
  }

export const registration = (body, clear, navigate, setRightButtontext, setIsloading) =>{
    setIsloading(true)
    axios.post(`${BASE_URL}/user/signup`, body)
    .then((res) => {
        console.log(res.data)
        localStorage.setItem("token", res.data.token)
        clear()
        setIsloading(false)
        goToRecipesList(navigate)
        setRightButtontext("Logout")
    })
    .catch((err) => {
        setIsloading(false)
        alert(err.response.data.message)})
}