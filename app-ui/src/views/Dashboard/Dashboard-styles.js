import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    title: {
        margin: theme.spacing(3, 0, 2,),
    },
    chartYear: {
        width: 700
    },
    chartMonth: {
        width: 400
    },
    table: {
        width: 500
    },
    tool: {
        border: '2px solid gray',
        borderRadius: '15px',
        padding: '30px',
        textAlign: 'center',
        width: '300px'
    },
    toolHidden: {
        display: 'none'
    },
    titleTool: {
        margin: '10px 0 30px 0'
    },
    inputSearch: {
        width: '100%',
        marginBottom: '20px'
    },
    btn: {
        padding: '8px 0',
        marginTop: '10px'
    }
}));