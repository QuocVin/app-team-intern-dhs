import { Box, Collapse, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, SvgIcon } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DraftsIcon from '@material-ui/icons/Drafts'
import VpnKey from '@material-ui/icons/VpnKey'
import Person from '@material-ui/icons/Person'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Subject from '@material-ui/icons/Subject'
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

    const [show, setShow] = useState(true)
    const [showButton, setShowButton] = useState(false)

     const handle = (path) => {
        history.push(path)
        handleResize()
     }
     const handleResize = (e)=>{
        const width = document.body.clientWidth || document.documentElement.clientWidth
        if(width < 768){
            setShow(false)
            setShowButton(true)
        }else{
            setShow(true)
            setShowButton(false)
        }
     }
     useEffect(() => {
         
        handleResize()
       window.addEventListener('resize', handleResize)
     
       return () => {
         window.removeEventListener('resize', handleResize)
       }
     }, [])
     
  return (
      <Box marginBottom={4} marginRight={1} borderRadius={1} className={classes.container}>
          <Box borderRadius={4} onClick={()=>setShow(!show)} color={'primary'} hidden={!showButton} style={{backgroundColor: '#3f51b5', textAlign: 'right'}}>
            <IconButton style={{color: 'white'}}><Subject/></IconButton>
          </Box>
          <Collapse in={show} className={classes.border}>
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
          </Collapse>
      </Box>
    
  )
}

export default ProfileNav