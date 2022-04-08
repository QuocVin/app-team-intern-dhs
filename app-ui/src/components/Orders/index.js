import {  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import OrderItem from './OrderItem'
import {useStyles} from './style'



const Orders = () => {
    const classes = useStyles()
    const handleOrderItemClick = ()=>{
        
    }
  return (
    <Paper>
        <TableContainer component={Paper}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Order ID</TableCell>
                        <TableCell>Create date</TableCell>
                        <TableCell>Total price</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <OrderItem onClick={handleOrderItemClick}/>
                </TableBody>
            </Table>
        </TableContainer>
    </Paper>
  )
}

export default Orders