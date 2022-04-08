import {  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import {useStyles} from './style'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



const OrderItem = ({onClick, item}) => {
  const classes = useStyles()
  const dateFormat = new Date(item.created_date).toLocaleDateString()
  return (
    <TableRow hover={true} onClick={onClick}  className={classes.row}>
        <TableCell>{item.id}</TableCell>
        <TableCell>{dateFormat}</TableCell>
        <TableCell>{item.total_price} VNĐ</TableCell>
        <TableCell><span>&gt;More info</span></TableCell>
    </TableRow>
  )
}

export default OrderItem