import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    searchIcon : {
        [theme.breakpoints.up("md")] : {
            display : 'none',
        }
    },
    toolbar : {
        width : '97%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
    },
    container : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
    }
}))