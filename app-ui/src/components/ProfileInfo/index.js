import { Box, Button, Container, Divider, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useStyles } from './style'
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import ProfileTitle from '../ProfileTitle';

const ProfileInfo = () => {
  const {user} = useSelector(state => state.loginState)

  const date_ob = new Date(user.date_ob)
  const date_obFormat = `${("0" + date_ob.getDate()).slice(-2)}/${("0" + (date_ob.getMonth() + 1)).slice(-2)}/${date_ob.getFullYear()}`
  const classes = useStyles()

  return (
    <Box>
      <ProfileTitle text={"Your profile"}/>
      <TableContainer>
        <Table>
          <TableBody>

            <TableRow>
              <TableCell >Username: </TableCell>
              <TableCell >{user.username}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell >Name: </TableCell>
              <TableCell>{user.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell >Phone: </TableCell>
              <TableCell>{user.phone}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell >Email: </TableCell>
              <TableCell>{user.mail}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell >Birth date: </TableCell>
              <TableCell>{date_obFormat}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Container component={'div'} className={classes.textAlignCenter}>
          <Button variant='contained' comp color='primary' className={classes.margin}>
            <Link to='/ChangeProfile' className={classes.link}>
              Change your profile
            </Link>
          </Button>
        </Container>
      </TableContainer>
    </Box>
  )
}

export default ProfileInfo