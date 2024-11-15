import { ThemeProvider } from '@mui/material/styles';
import {Outlet} from "react-router-dom"
import Button from '@mui/material/Button';
import TabBar from "../features/TabBar.jsx";
import Box from '@mui/material/Box';
import  Header  from "../features/Navbar.jsx";
import  {useState}  from "react";
import  TongleDarkMode  from "../features/TongleDarkMode.jsx";
import {lightMode, darkMode} from "../features/DarkMode.jsx";
export default function Layout(){
  const [theme, setTheme] = useState(lightMode);
  const [click, setClick] = useState(false);
  //themes = ()=> theme == "light" ? lightMode : darkMode ;
  function switchMode() {
    setClick(!click);  
    if(click){
      setTheme(darkMode);} 
    else{
     setTheme(lightMode);
    }
  }

  return(
  <ThemeProvider theme={theme} >
  <Header mode= {theme}>

<Button onClick={switchMode}>Dark Mode</Button>
  </Header>
   <TabBar />   
    <Box position="absolute" component="section" sx={{ width: "80%", height: "100%" ,right: 0, p: 2, border: '1px dashed grey', bgcolor: 'background.default' }}>
      This Box renders as an HTML section element.
    </Box>
       {Outlet}
  </ThemeProvider>
  )
}
