import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme)=>({
    wrapper: {
        margin: theme.spacing(2),
        position: "relative",
        display: "flex",
        justifyContent: "center",
    },
    process:{
        position: "absolute",
        top: "50%",
        left:"50%",
        marginTop: -12,
        marginLeft: -12,
    }
}))