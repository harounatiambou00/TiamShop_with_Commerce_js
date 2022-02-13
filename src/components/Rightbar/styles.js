import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    drawer : {
        backgroundColor : theme.palette.warning,
        display : (props) => (props.open ? 'block': 'none'),
    }
}))