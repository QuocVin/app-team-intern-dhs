import { makeStyles } from "@material-ui/core/styles";

const colorPriamary = '#258fc1'

export const useStyles = makeStyles((theme) => ({
    container: {
        maxWidth: '500px',
        maxWidth: '100%',
        margin: '8px auto',
    },
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
    },
    forgotPassword: {
        textAlign: "end",
        "& a":{
            textDecoration:"none",
        }
    },

}));