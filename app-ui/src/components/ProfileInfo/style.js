import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme)=>({
    margin: {
        margin: theme.spacing(1),
    },
    link: {
      textDecoration: 'none',
      color:'white',
    },
    textAlignCenter: {
      textAlign: "center"
    }
}))