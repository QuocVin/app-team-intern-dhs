import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme)=>({
    selected: {
        color: '#3f51b5'
    },
    border: {
        borderRadius: '4px',
        borderLeft: '1px solid #333',
        borderRight: '1px solid #333',
        [theme.breakpoints.up('sm')]:{
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
        }
    },
    container: {
        height: 'auto',
        borderRight: '1px solid transparent',
        [theme.breakpoints.up('sm')]:{
            height: '100%',
            borderRightColor: '#333',
        }
    }
}))