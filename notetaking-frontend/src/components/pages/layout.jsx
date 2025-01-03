import { ThemeProvider } from '@mui/material/styles';
import {Outlet} from "react-router-dom"
import Button from '@mui/material/Button';
import TabBar from "../features/TabBar.jsx";
import Box from '@mui/material/Box';
import  Header  from "../features/Navbar.jsx";
import  {useState, useEffect}  from "react";
import  TongleDarkMode  from "../features/TongleDarkMode.jsx";
import {lightMode, darkMode} from "../features/DarkMode.jsx";
import { CssBaseline, Grid2 } from '@mui/material';
import SearchLive from '../features/SearchLive.jsx';
import Grid from '@mui/material/Grid';
import Notes from '../features/Notes.jsx';
// example data structure
const users = [
  { firstName: "John", id: 1 },
  { firstName: "Emily", id: 2 },
  { firstName: "Michael", id: 3 },
  { firstName: "Sarah", id: 4 },
  { firstName: "David", id: 5 },
  { firstName: "Jessica", id: 6 },
  { firstName: "Daniel", id: 7 },
  { firstName: "Olivia", id: 8 },
  { firstName: "Matthew", id: 9 },
  { firstName: "Sophia", id: 10 }
];
export default function Layout(){

  const [theme, setTheme] = useState(lightMode);
  const [click, setClick] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [filterSearch, setFilterSearch] = useState([]);

  function handleToggleSidebar() { setIsSidebarOpen(!isSidebarOpen); }
  console.log(users);
  useEffect(() => {
    setTheme(click ? darkMode : lightMode);
  }, [click]);

  function switchMode() {
    setClick(!click);
  }

  return(
  <ThemeProvider theme={theme} >
    <CssBaseline />
    <Header mode={theme}> 
      <SearchLive users={users} setFilterSearch={setFilterSearch} />
      <Button onClick={switchMode}>Dark Mode</Button>
    </Header>
 

    {/* <Box position="absolute" component="section" sx={{ width: "80%", height: "100%" ,right: 0, p: 2, border: '1px dashed grey', bgcolor: 'background.default', alignContent: '' }}>
      
      {filterSearch.map((user) => {
        return <Box key={user.id}>{user.firstName}</Box>
      })}
      <Notes />
    </Box> */}
    <Box sx={{flexGrow: "1"}}>
      <Grid2  container spacing={1}>
        <Grid2 size={3}>
          <TabBar theme={theme} isOpen={isSidebarOpen}/>
        </Grid2>
        <Grid2 size={9}>
          {filterSearch.map((user) => {
          return <Box key={user.id}>{user.firstName}</Box>
        })}
          <Notes />
        </Grid2>
      </Grid2>

    </Box>

    <Outlet />
  </ThemeProvider>
  )
}
