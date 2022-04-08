import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    form: {
        padding: '8px 16px',
        borderBottomLeftRadius: "4px",
        borderBottomRightRadius: "4px",
    },
    input: {
        width: '100%',
        margin: '12px 0'
    },
    button: {
        display: "block",
        margin: "0 auto",
        textTransform: "none"
    },
    errorMessage: {
        fontSize: '12px',
        color: 'red'
    }
}))