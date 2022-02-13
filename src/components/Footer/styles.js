import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    footer : {
        position : "fixed",
        bottom : 0,
        width : "100%",
        backgroundColor : theme.palette.primary.main,
        color : theme.palette.common.white,
        paddingRight : theme.spacing(2),
        textAlign : 'center',
        height : "80vh",
    },
    footerHeader : {
        alignItems : 'center',
        [theme.breakpoints.down("md")] : {
            textAlign : 'center',
        }
    },
    logo : {
        paddingRight : theme.spacing(2),
    },
    socialMediaIcons : {
        textAlign : 'center',
    },
    footerDivider : {
        color : theme.palette.common.white,
        width : "100%",
        height : "2px",
        marginBottom : theme.spacing(3),
    },
    footerBody : {
        textAlign : 'center',
    }, 
    footerBodyLinks : {
        textDecoration : 'none', 
        color : "inherit",
        '&:hover' : {
            color : theme.palette.warning.main,
            textDecoration : 'underline',
        }
    },
    input: {
        paddingTop: 29,
        paddingBottom: 8
      },
    footerFooter : {
        display : 'fixed',
        width : '100%',
        bottom : 0,
        backgroundColor : theme.palette.primary.main,
        paddingTop : theme.spacing(3),
    },
    tiamtechLinks : {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
     }
}))