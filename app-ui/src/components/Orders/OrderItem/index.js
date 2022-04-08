import {  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import {useStyles} from './style'



const OrderItem = ({onClick, item}) => {
  return (
    <TableRow hover={true} onClick={onClick}>
        <TableCell>{item.id}</TableCell>
        <TableCell>{item.created_date}</TableCell>
        <TableCell>{item.total_price} VNĐ</TableCell>
        <TableCell>More info</TableCell>
    </TableRow>
  )
}

export default OrderItem