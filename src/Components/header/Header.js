
// import React from 'react';
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Typography,
//   Stack,
//   Button,
//   Grid,
//   useMediaQuery,
//   useTheme,
// } from '@mui/material';
// import AddBusinessIcon from '@mui/icons-material/AddBusiness';
// import SearchIcon from '@mui/icons-material/Search';
// import LocalMallIcon from '@mui/icons-material/LocalMall';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';

// function Header() {
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

//   return (
//     <AppBar position='static'>
//       <Toolbar>
//         <Grid container alignItems='center' justifyContent='space-between'>
//           <Grid item xs={6} sm={4}>
//             <Stack direction='row' spacing={2} alignItems='center'>
//               <IconButton
//                 size='large'
//                 edge='start'
//                 color='inherit'
//                 aria-label='logo'
//               >
//                 <AddBusinessIcon />
//               </IconButton>
//               <Typography variant='h6' component='div'>
//                 E-commerce
//               </Typography>
//             </Stack>
//           </Grid>
//           <Grid item xs={6} sm={8}>
//             {isSmallScreen ? (
//               <Stack
//                 direction='row'
//                 spacing={2}
//                 justifyContent='flex-end'
//                 alignItems='center'
//               >
//                 <IconButton
//                   size='large'
//                   edge='start'
//                   color='inherit'
//                   aria-label='search'
//                 >
//                   <SearchIcon />
//                 </IconButton>
//                 <IconButton
//                   size='large'
//                   edge='start'
//                   color='inherit'
//                   aria-label='cart'
//                 >
//                   <LocalMallIcon />
//                 </IconButton>
//                 <IconButton
//                   size='large'
//                   edge='start'
//                   color='inherit'
//                   aria-label='logo'
//                 >
//                   <AccountBoxIcon />
//                 </IconButton>
//               </Stack>
//             ) : (
//               <Stack
//                 direction='row'
//                 spacing={2}
//                 justifyContent='flex-end'
//                 alignItems='center'
//               >
//                 <Button color='inherit'>Home</Button>
//                 <Button color='inherit'>Product</Button>
//                 <Button color='inherit'>Contact</Button>
//                 <Button color='inherit'>About Us</Button>
//                 <IconButton
//                   size='large'
//                   edge='start'
//                   color='inherit'
//                   aria-label='search'
//                 >
//                   <SearchIcon />
//                 </IconButton>
//                 <IconButton
//                   size='large'
//                   edge='start'
//                   color='inherit'
//                   aria-label='cart'
//                 >
//                   <LocalMallIcon />
//                 </IconButton>
//                 <IconButton
//                   size='large'
//                   edge='start'
//                   color='inherit'
//                   aria-label='logo'
//                 >
//                   <AccountBoxIcon />
//                 </IconButton>
//               </Stack>
//             )}
//           </Grid>
//         </Grid>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Header;

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'; // Assuming you use React Router

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const navLinks = [
    { text: 'Home', link: '/' },
    { text: 'Products', link: '/products' },
    { text: 'About Us', link: '/about' },
    { text: 'Contact', link: '/contact' },
  ];

  const drawerContent = (
    <div>
      <List>
        {navLinks.map((link, index) => (
          <ListItem button key={index} component={Link} to={link.link}>
            <ListItemText primary={link.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* Add other drawer content for search, profile, cart, etc. */}
    </div>
  );

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          {/* Your logo */}
          <div style={{ flexGrow: 1 }}>
            {/* Logo component */}
          </div>
          {/* Right side icons */}
          {/* Add icons for search, profile, cart */}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </div>
  );
};

export default Header;

