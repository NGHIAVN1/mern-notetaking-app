import Box from '@mui/material/Box';
import {Link } from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
//import ListItem from '@mui/material/ListItem';
export default function TabBar({theme, tongleDrawer}){
  return(
  <Box position="fixed" sx={
      { width: "20%",
        height: "100%",
        bgcolor: "background.default",
        margin: "0",
        "padding-top":"1%",
        display: "block",

      }
    }>

      <List sx={{width: "100%", bgcolor: "background.paper", }}>
        <ListItemButton>
          <ListItemIcon>
            <SendIcon  />
          </ListItemIcon>
            <Link to="/"> hone</Link>
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <SendIcon  />
          </ListItemIcon>

            <Link to="/trash"> Trash</Link>
        </ListItemButton>
        </List>
  </Box>
  )
} 
