import { makeStyles, alpha } from "@material-ui/core";
import { padding, width } from "@mui/system";

export default makeStyles((theme) => ({
    appBar : {
        
    },
    alert : {
        
    },
    toolbar : {
        display : 'flex',
        justifyContent : 'space-between',
    },
    navBrand :{
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center'
    },
    navBrandText : {
        fontFamily : "'Audiowide', cursive",
        color : '#D67D3E',
        [theme.breakpoints.down("sm")]: {
            display : "none"
        }
    },
    search : {
        display : 'flex',
        alignItems : 'center',
        backgroundColor : theme.palette.common.white,
        color : theme.palette.common.black,
        width : '50%',
        paddingLeft : theme.spacing(2),
        paddingRight : theme.spacing(2),
        paddingTop : theme.spacing(0.5),
        paddingBottom : theme.spacing(0.5),
        borderRadius : theme.shape.borderRadius,
        [theme.breakpoints.down("sm")]: {
            display : (props) => (props.openSearchBar ? 'flex' : 'none'),
            width : '60%',
        }
    },
    searchIcon : {
        marginRight : '2%',
    },
    input : {
        width : '100%',
        opacity : 0.9,
    },
    navIcons : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'space-between',
        [theme.breakpoints.down("sm")] : {
            display : (props) => (props.openSearchBar ? 'none' : 'flex')
        }
    },
    searchButton : {
        [theme.breakpoints.up("sm")] : {
          display: "none"
        }
    },
    navIconsItem : {
        marginLeft : theme.spacing(2)
    }
}))