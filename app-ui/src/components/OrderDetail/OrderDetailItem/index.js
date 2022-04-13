import { Box, Paper, Typography, TableRow, TableCell } from '@material-ui/core'
import React from 'react'
import {useStyles} from './style'

const OrderDetailItem = ({item}) => {
  return (
    <TableRow hover={true}>
        <TableCell align='center'>{item.name}</TableCell>
        <TableCell align='center'>{item.price} VNĐ</TableCell>
        <TableCell align='center'>{item.quantity}</TableCell>
        <TableCell align='center'>{item.price * item.quantity} VNĐ</TableCell>
    </TableRow>
      
    
  )
}

export default OrderDetailItem