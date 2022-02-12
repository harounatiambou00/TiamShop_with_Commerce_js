import React, { useState } from 'react'

import { AppBar, makeStyles, Toolbar, Typography, InputBase, alpha, Badge, Avatar, Box, IconButton} from '@material-ui/core'
import { Search, Mail, Cancel } from '@material-ui/icons'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import Logo from '../../assets/images/Logo.png'
import testProfile from '../../assets/images/Profile-test.jpg'



import useStyles from './styles'

import SearchBarDialog from './MobileDevicesSearchBarDialog/SearchBarDialog' // This searchbar dialog will be displayed for mobile devices
import Searchbar from './Searchbar/Searchbar' //this one will be displayed on md lg and xl screen 


const Navbar = () => {
  const [openSearchBar, setOpenSearchBar] = useState(false) 
  const classes = useStyles({ openSearchBar });


  return (
    <AppBar className = {classes.appBar}>
        <Toolbar className = {classes.toolbar}>
            <div className= {classes.navBrand}>
              <Box component = 'img' src =  {Logo} alt = 'Logo' width={'75px'} />
            </div>

            <Searchbar />

            <div className= {classes.navIcons}>
              <SearchBarDialog  onClick = {() => setOpenSearchBar(true)}/>
              <IconButton 
                edge="start"
                color="inherit"
              >
                <Badge badgeContent={4} color="secondary" className= { classes.navIconsItem}>
                  <Mail />
                </Badge>
              </IconButton>
              <IconButton 
                edge="start"
                color="inherit"
              >
                <Badge badgeContent={2} color="secondary"  className= { classes.navIconsItem}>
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <IconButton 
                edge="start"
                color="inherit"
              >
                  <Avatar alt="Sharp" src={testProfile}  className= { classes.navIconsItem} />
              </IconButton>
            </div>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar