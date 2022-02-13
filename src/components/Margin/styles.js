import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    container : {
        marginBottom : theme.spacing(10),
        [theme.breakpoints.down("sm")]: {
            marginBottom : theme.spacing(2),
        }
    }
}))