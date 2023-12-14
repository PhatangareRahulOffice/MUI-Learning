import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import MailIcon from "@mui/icons-material/Mail";
import Divider from '@mui/material/Divider';

function Lists() {
  return (
    <>
      <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
        <List>
          <ListItem disablePadding >
           <ListItemButton>
           <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="List item 1" secondary="Secondary Text" />
           </ListItemButton>
          </ListItem>
          <Divider/>
          <ListItem>
            <ListItemIcon>  
            <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="List item 2" secondary="Secondary Text" />
          </ListItem>
          <Divider/>

          <ListItem>
            <ListItemIcon>   
            <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="List item 3" secondary="Secondary Text" />
          </ListItem>

        </List>
      </Box>
    </>
  );
}

export default Lists;
