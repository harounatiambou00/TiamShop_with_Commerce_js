import { Grid, Box, IconButton, Divider, Button, TextField, InputLabel, InputAdornment, OutlinedInput, FormControl} from '@material-ui/core';
import React from 'react'
import useStyles from './styles'

import Logo from '../../assets/images/TiamTechLogo.png'

import { 
    FacebookRounded,
    LinkedIn,
    Twitter,
    YouTube,
    LanguageTwoTone, 
    Visibility,
    VisibilityOff
} from '@mui/icons-material';
import { Stack } from '@mui/material';

const Footer = () => {
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    const classes = useStyles();
  return (
    <footer className = {classes.footer}>
        <Grid container spacing = {2} className = { classes.footerHeader}>
            <Grid item xs = {12} md  = {6} className = {classes.logo}>
                <Box component = 'img' src =  {Logo} alt = 'Logo' width={'100px'} />
            </Grid>
            <Grid item xs = {12} md  = {6} className = {classes.socialMediaIcons}>
                <div>
                    <IconButton>
                        <FacebookRounded sx = {{ fontSize : 40}}/>
                    </IconButton>
                    <IconButton>
                        <Twitter sx = {{ fontSize : 40}} />
                    </IconButton>
                    <IconButton>
                        <LinkedIn sx = {{ fontSize : 40}} />
                    </IconButton>
                    <IconButton>
                        <YouTube sx = {{ fontSize : 40}} />
                    </IconButton>
                </div>
            </Grid>
        </Grid>
        <Divider light className = {classes.footerDivider}/>
        <Grid container spacing = {2} className = {classes.footerBody}>
            <Grid item xs = {12} sm = {6} lg = {3}>
                <h3>Conditions d'utilistation</h3>
                <h5><a href = "#" className = {classes.footerBodyLinks} >Termes et Conditions d'utilistation</a></h5>
                <h5><a href = "#" className = {classes.footerBodyLinks}>Livraisons et Remboursements</a></h5>
                <h5><a href = "#" className = {classes.footerBodyLinks}>Politique de confidentialité</a></h5>
                <h5><a href = "#" className = {classes.footerBodyLinks}>Modes de payement</a></h5>
                <h5><a href = "#" className = {classes.footerBodyLinks}>FAQ</a></h5>
            </Grid>
            <Grid item xs = {12} sm = {6} lg = {3}>
                <h3>Notre Entreprise</h3>
                <h5><a href = "#" className = {classes.footerBodyLinks}>Qui sommes-nous ?</a></h5>
                <h5><a href = "#" className = {classes.footerBodyLinks}>Contactez-nous</a></h5>
                <h5><a href = "#" className = {classes.footerBodyLinks}>Nos Magasins</a></h5>
                <IconButton>
                    <LanguageTwoTone sx = {{ fontSize : 30}}/>
                </IconButton>
            </Grid>
            <Grid item xs = {12} sm = {6} lg = {3}>
                <h3>Conditions d'utilistation</h3>
                <h5><a href = "#" className = {classes.footerBodyLinks}>Termes et Conditions d'utilistation</a></h5>
                <h5><a href = "#" className = {classes.footerBodyLinks}>Livraisons et Remboursements</a></h5>
                <h5><a href = "#" className = {classes.footerBodyLinks}>Politique de confidentialité</a></h5>
                <h5><a href = "#" className = {classes.footerBodyLinks}>Modes de payement</a></h5>
                <h5><a href = "#" className = {classes.footerBodyLinks}>FAQ</a></h5>
            </Grid>
            <Grid item xs = {12} sm = {6} lg = {3}>
                <h3>Se connecter</h3>
                <form>
                    <Stack spacing={2} mr = {2} pr = {5} pl = {5}>
                        <TextField variant='outlined' label = 'E-mail'/>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Mot de passe</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        <Button variant="outlined">Se connecter</Button>
                    </Stack>
                </form>
            </Grid>
            <Grid item xs = {12}>
                <h3>Nos Partenaires</h3>
                <h5>
                    <a href = "#" className = {classes.footerBodyLinks}>Airtel Niger</a>, &nbsp;&nbsp;
                    <a href = "#" className = {classes.footerBodyLinks}>Airtel Niger</a>, &nbsp;&nbsp;
                    <a href = "#" className = {classes.footerBodyLinks}>Airtel Niger</a>, &nbsp;&nbsp;
                    <a href = "#" className = {classes.footerBodyLinks}>Airtel Niger</a>, &nbsp;&nbsp;
                    <a href = "#" className = {classes.footerBodyLinks}>Airtel Niger</a>, &nbsp;&nbsp;
                    <a href = "#" className = {classes.footerBodyLinks}>Airtel Niger</a>, &nbsp;&nbsp;
                    <a href = "#" className = {classes.footerBodyLinks}>Airtel Niger</a>, &nbsp;&nbsp;
                    <a href = "#" className = {classes.footerBodyLinks}>Airtel Niger</a>, &nbsp;&nbsp;
                    <a href = "#" className = {classes.footerBodyLinks}>Airtel Niger</a>, &nbsp;&nbsp;
                    <a href = "#" className = {classes.footerBodyLinks}>Airtel Niger</a>, &nbsp;&nbsp;
                    <a href = "#" className = {classes.footerBodyLinks}>Airtel Niger</a>, &nbsp;&nbsp;
                    <a href = "#" className = {classes.footerBodyLinks}>Airtel Niger</a>, &nbsp;&nbsp;
                    <a href = "#" className = {classes.footerBodyLinks}>Airtel Niger</a>, &nbsp;&nbsp;
                    
                </h5>
            </Grid>
        </Grid>
        <Box className = {classes.footerFooter}>
            <small>Copyright @2022 | Designed by TiamTech <br /><br /></small>
            <div className = {classes.tiamtechLinks}>
                <small>Suivez-nous sur </small>
                <div>
                    <IconButton>
                        <FacebookRounded sx = {{ fontSize : 30}}/>
                    </IconButton>
                    <IconButton>
                        <Twitter sx = {{ fontSize : 30}} />
                    </IconButton>
                    <IconButton>
                        <LinkedIn sx = {{ fontSize : 30}} />
                    </IconButton>
                    <IconButton>
                        <YouTube sx = {{ fontSize : 30}} />
                    </IconButton>
                </div>
            </div>                
        </Box>
    </footer>
  )
}

export default Footer