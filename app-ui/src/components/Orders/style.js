import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    table: {
        "& th":{
            fontWeight: '700',
            backgroundColor: theme.palette.primary.main,
            color: 'white'
        },
        "& tbody tr:hover":{
            backgroundColor:'rgba(0,0,0,0.05)',
            cursor: 'pointer',
        }
    }
}))