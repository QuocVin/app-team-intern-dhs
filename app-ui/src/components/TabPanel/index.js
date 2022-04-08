import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box'


const useStyles = makeStyles((theme)=>{

})


export default function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box style={{border: '1px solid #3f51b5', borderRadius: '4px'}}>
            {children}
          </Box>
        )}
      </div>
    );
  }