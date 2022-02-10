import { makeStyles, alpha } from "@material-ui/core";

export default makeStyles((theme) => ({
    container : {
        height: "100vh",
        color: "white",
        paddingTop: theme.spacing(10),
        backgroundColor: theme.palette.primary.main,
        position: "sticky",
        top: 0,
    }
}))