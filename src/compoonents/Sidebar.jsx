import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { IconButton, Typography } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../images/logo.png";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor, open) =>
    (event) => {
      if (
        event.type === 'keydown' &&
        ((event).key === 'Tab' ||
          (event).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="" width="50px" />
        <Typography
            sx={{
              width: {xs:"150px",md:"239px"},
              fontFamily: "Roboto",
              fontWeight: "700",
              fontSize: {md:"20px",sm:"18px",xs:"12px"},

            }}
          >
            GARDEN TREATMENT
          </Typography>
      </Box>

      <List>
        {['Home', 'Coaches', 'Conatct', 'About'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    
    </Box>
  );

  return (
    <div>
     
          {/* <Button onClick={toggleDrawer("left", true)}>{anchor}</Button> */}
          <IconButton aria-label="delete" onClick={toggleDrawer("left", true)}>
              <MenuIcon fontSize="large" />
            </IconButton>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
    </div>
  );
}
