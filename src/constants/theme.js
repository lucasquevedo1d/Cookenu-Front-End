import { createTheme } from '@mui/material/styles';
import {primaryColor, secondColor} from "./colors"
const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText:"white"
    },
    text:{
        primary: secondColor
    }
    
  }
});
export default theme

