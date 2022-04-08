import { Box, Divider, Drawer, Icon, List, ListItem, ListItemIcon, ListItemText, SvgIcon } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import DraftsIcon from '@material-ui/icons/Drafts'
import VpnKey from '@material-ui/icons/VpnKey'
import Person from '@material-ui/icons/Person'
import AccountCircle from '@material-ui/icons/AccountCircle'
import {useHistory} from 'react-router'

import { useStyles } from './style'


const listNavItems =[
    {
        text :'Your profile',
        link: '/Profile',
        icon: Person
    },{
        text :'Change profile',
        link: '/ChangeProfile',
        icon: AccountCircle
    },{
        text :'Change password',
        link: '/ChangePassword',
        icon: VpnKey
    },{
        text :'Your orders',
        link: '/Orders',
        icon: DraftsIcon
    }
]
const ProfileNav = () => {
    const classes= useStyles()
    const history = useHistory()

     const handle = (path) => {
        history.push(path)
     }
  return (
      <Box borderRight={1} height={'100%'}>
        <List component={'nav'}>
            {
                listNavItems.map((item, index)=>{
                    return <>
                            <ListItem key={index} button component="a" onClick={() => handle(item.link)} className={classes.selected}>
                                <ListItemIcon>
                                    <SvgIcon color='primary' component={item.icon}/>
                                </ListItemIcon>
                                <ListItemText primary={item.text}/>
                            </ListItem>
                        </>
                })
            }
                
            </List>
      </Box>
    
  )
}

export default ProfileNav