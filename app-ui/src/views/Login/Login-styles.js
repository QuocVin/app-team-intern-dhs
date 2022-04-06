import { makeStyles } from "@material-ui/core/styles";

const colorPriamary = '#258fc1'

export const useStyles = makeStyles((theme) => ({
    container: {
        maxWidth: '500px',
        margin: '8px auto',
    },
    form: {
        padding: '8px 16px',
        border: `4px solid ${colorPriamary}`,
        borderBottomLeftRadius: "4px",
        borderBottomRightRadius: "4px",
    },
    title: {
        textAlign: "center",
        textTransform: "uppercase",
        padding: '8px',
        margin: '0',
        backgroundColor: colorPriamary,
        borderTopLeftRadiusStartRadius: "4px",
        borderTopRightRadius: "4px",
        color: '#fff'
    },
    input: {
        width: '100%',
        margin: '12px 0'
    },
    button: {
        display: "block",
        margin: "0 auto"
    },
    errorMessage: {
        fontSize: '12px',
        color: 'red'
    }
}));