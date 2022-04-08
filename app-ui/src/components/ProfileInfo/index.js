import { Box, Button, Container, Divider, Table, TableCell, TableContainer, TableRow, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useStyles } from './style'
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

const ProfileInfo = () => {
  const {user} = useSelector(state => state.loginState)

  const date_ob = new Date(user.date_ob)
  const date_obFormat = `${date_ob.getDate()}/${date_ob.getMonth() + 1}/${date_ob.getFullYear()}`
  const classes = useStyles()

  return (
    <Box>

      <Box display={'flex'} justifyContent="space-between">
          <Typography component={'h1'} variant={'h3'} color={'primary'}>
            Your profile
          </Typography>
          <Link to='/ChangeProfile' className={classes.margin}>
            Change your profile
        </Link>
      </Box>
      <Divider />
      <TableContainer>
        <Table>
          <TableRow>
            <TableCell align='right'>Username: </TableCell>
            <TableCell>{user.username}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='right'>Name: </TableCell>
            <TableCell>{user.name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='right'>Phone: </TableCell>
            <TableCell>{user.phone}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='right'>Email: </TableCell>
            <TableCell>{user.mail}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='right'>Birth date: </TableCell>
            <TableCell>{date_obFormat}</TableCell>
          </TableRow>
        </Table>
        
      </TableContainer>
    </Box>
  )
}

export default ProfileInfo