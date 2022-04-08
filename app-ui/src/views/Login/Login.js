import { AppBar, Paper, Tab, Tabs } from '@material-ui/core';
import React from 'react';
import TabPanel from '../../components/TabPanel';
import {useStyles} from './Login-styles'
import FormLogin from '../../components/FormLogin'
import FormRegister from '../../components/FormRegister';

function a11yProps(index) {
    return {
      id: `wrapped-tab-${index}`,
      'aria-controls': `wrapped-tabpanel-${index}`,
    };
  }

export default function Login() {

    const classes = useStyles()

    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return (
        <div className={classes.container}>
            <Paper square>
                <Tabs
                    className={classes.indicator}
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="Tab login page"
                    variant='fullWidth'
                >
                    <Tab fullWidth={true} label="Login" value="one" {...a11yProps("one")}/>
                    <Tab fullWidth={true} label="Register" value="two" {...a11yProps("two")}/>
                </Tabs>
            </Paper>
            <TabPanel value={value} index="one">
                <FormLogin/>
            </TabPanel>
            <TabPanel value={value} index="two">
                <FormRegister callback={()=>setValue("one")}/>
            </TabPanel>
        </div>
    )
}