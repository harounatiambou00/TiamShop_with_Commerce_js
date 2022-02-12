import React from 'react'

import { AppBar, Toolbar, IconButton, Slide, Dialog, TextField } from '@material-ui/core'
import { Search, ArrowBack, MoreVert } from '@mui/icons-material';

import useStyles from './styles'

import AutoComplete from './AutoCompleteSearchbar/AutoComplete'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const SearchBarDialog = () => {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <IconButton 
          edge="start"
          color="inherit"
          className = {classes.searchIcon}
        >
          <Search onClick = {handleClickOpen}/>
        </IconButton>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar className= {classes.toolbar}>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <ArrowBack />
                </IconButton>
                <AutoComplete/>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="close"
                >
                  <MoreVert />
                </IconButton>
            </Toolbar>
          </AppBar>
        </Dialog>
      </div>
    );
}

export default SearchBarDialog