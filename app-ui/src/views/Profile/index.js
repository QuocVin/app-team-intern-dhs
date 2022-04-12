import { Box, Divider, Grid } from '@material-ui/core'
import React from 'react'
import { Route, Switch } from 'react-router'
import ChangePassword from '../../components/ChangePassword'
import OrderDetail from '../../components/OrderDetail'
import Orders from '../../components/Orders'
import ProfileChange from '../../components/ProfileChange'
import ProfileInfo from '../../components/ProfileInfo'
import ProfileNav from '../../components/ProfileNav'

const Profile = () => {
  return (
    <Grid container>
        <Grid item xs={12} sm={4} md={3}>
            <ProfileNav/>
        </Grid>
        <Grid item xs={12} sm={8} md={9} >
            <Box width={'100%'}>
                <Switch>
                    <Route exact path="/Profile">
                        <ProfileInfo/>
                    </Route>
                    <Route path="/ChangeProfile">
                        <ProfileChange/>
                    </Route>
                    <Route path="/ChangePassword">
                        <ChangePassword/>
                    </Route>
                    <Route path="/Orders">
                        <Orders/>
                    </Route>
                    <Route path="/OrderDetail/:id">
                        <OrderDetail/>
                    </Route>
                </Switch>
            </Box>
            
        </Grid>
    </Grid>
  )
}

export default Profile