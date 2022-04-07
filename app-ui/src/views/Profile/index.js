import { Grid } from '@material-ui/core'
import React from 'react'
import { Route, Switch } from 'react-router'
import ProfileInfo from '../../components/ProfileInfo'
import ProfileNav from '../../components/ProfileNav'

const Profile = () => {
  return (
    <Grid container>
        <Grid item xs={12} md={3} >
            <ProfileNav/>
        </Grid>
        <Grid item xs={12} md={9} >
            <Switch>
                <Route exact path="/Profile">
                    <ProfileInfo/>
                </Route>
                <Route path="/ChangeProfile">
                    asd
                </Route>
                <Route path="/ChangePassword">
                    <ProfileInfo/>
                </Route>
                <Route path="/Orders">
                    <ProfileInfo/>
                </Route>
            </Switch>
        </Grid>
    </Grid>
  )
}

export default Profile