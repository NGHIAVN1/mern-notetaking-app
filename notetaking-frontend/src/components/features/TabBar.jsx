import { memo } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import HomeIcon from '@mui/icons-material/Home';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';

const NavLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
  width: '100%'
}));

const NavBox = styled(Box)(({ theme, isopen }) => ({
  width: "20%",
  height: `calc(100% - ${theme.mixins.toolbar.minHeight}px)`,
  bgcolor: theme.palette.background.default,
  margin: 0,
  paddingTop: theme.spacing(1),
  display: "block",
  position: "fixed",
  top: theme.mixins.toolbar.minHeight,
  left: isopen ? 0 : '-20%',
  overflow: 'auto',
  transition: 'left 0.3s ease-in-out'
}));

const TabBar = ({ theme, isOpen }) => {
  return (
    <NavBox isopen={isOpen ? 1 : 0}>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        <ListItemButton>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <NavLink to="/">Home</NavLink>
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <NavLink to="/trash">Trash</NavLink>
        </ListItemButton>
      </List>
    </NavBox>
  );
};

TabBar.propTypes = {
  theme: PropTypes.object,
  isOpen: PropTypes.bool
};

export default memo(TabBar);
