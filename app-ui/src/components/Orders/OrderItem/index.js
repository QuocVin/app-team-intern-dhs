import {  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import {useStyles} from './style'



const OrderItem = ({onClick}) => {
  return (
    <TableRow hover={true} onClick={onClick}>
        <TableCell>Order ID</TableCell>
        <TableCell>Create date</TableCell>
        <TableCell>Total price VNĐ</TableCell>
        <TableCell>More info</TableCell>
    </TableRow>
  )
}

export default OrderItem