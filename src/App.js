import { ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import Router from "./routes/Router";
import theme from "./constants/theme"
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/header/Header";



const App = () => {
  const token = localStorage.getItem('token')
  const [rightButtonText, setRightButtontext] = useState(token?"Logout":"Login")
  return (
<ThemeProvider theme={theme}>
<BrowserRouter>
<Header rightButtonText={rightButtonText} setRightButtontext={setRightButtontext}/>
<Router  setRightButtontext={setRightButtontext}/>
</BrowserRouter>

</ThemeProvider>
  )
}
export default App;

