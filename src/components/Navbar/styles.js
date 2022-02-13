import { makeStyles, alpha } from "@material-ui/core";
import { padding, width } from "@mui/system";

export default makeStyles((theme) => ({
    appBar : {
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
    navIcons : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'space-between',
        [theme.breakpoints.down("sm")] : {
            display : (props) => (props.openSearchBar ? 'none' : 'flex')
        }
    },
}))