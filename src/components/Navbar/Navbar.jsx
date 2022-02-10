import React, { useState } from 'react'

import { AppBar, makeStyles, Toolbar, Typography, InputBase, alpha, Badge, Avatar, Box} from '@material-ui/core'
import { Search, Mail, Cancel } from '@material-ui/icons'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import {Alert, AlertTitle} from '@mui/material'
import Logo from '../../assets/images/Logo.png'
import testProfile from '../../assets/images/Profile-test.jpg'

//Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


import useStyles from './styles'


const Navbar = () => {
  const [openSearchBar, setOpenSearchBar] = useState(false) 
  const classes = useStyles({ openSearchBar });


  return (
    <AppBar className = {classes.appBar}>
        {/*<Alert severity='info' onClose={() => {}} classsName = { classes.alert }>This is a success alert — check it out!</Alert>*/}
        <Toolbar className = {classes.toolbar}>
            <div className= {classes.navBrand}>
              <Box component = 'img' src =  {Logo} alt = 'Logo' width={'75px'} />
              <Typography variant = 'h4' className = {classes.navBrandText}>TiamShop</Typography>
            </div>

            <div className = {classes.search}>
              <FontAwesomeIcon icon={faMagnifyingGlass} className = {classes.searchIcon}/>
              <InputBase placeholder = "Search ..."  className= {classes.input}/>
              <FontAwesomeIcon icon={faXmark} onClick = {() => setOpenSearchBar(false)}/>
            </div>

            <div className= {classes.navIcons}>
              <Search className= { classes.searchButton}  onClick = {() => setOpenSearchBar(true)}/>
              <Badge badgeContent={4} color="secondary" className= { classes.navIconsItem}>
                <Mail />
              </Badge>
              <Badge badgeContent={2} color="secondary"  className= { classes.navIconsItem}>
                <ShoppingCartIcon />
              </Badge>
              <Avatar alt="Sharp" src={testProfile}  className= { classes.navIconsItem} />
            </div>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar