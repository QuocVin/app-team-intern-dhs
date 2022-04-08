import {  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import OrderItem from './OrderItem'
import {useStyles} from './style'

const getOrders = ({id}, page = 1) =>{
    const url = 'http://localhost:4000/order/get-by-user/' + id
    return axios.get(url)
}

const Orders = () => {
    const classes = useStyles()
    const [orders, setOrders] = useState([])
    const user = useSelector(state => state.loginState.user)

    const handleOrderItemClick = ()=>{
        
    }

    useEffect(() => {
      getOrders(user).then(res => {
          const {data, status} = res.data
          if(status && status === 200){
              setOrders(data)
          }
      }).catch(err=> console.log(err))
    }, [orders])
    
    


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
                    {
                        orders.map((item,i)=>
                            <OrderItem item={item} onClick={handleOrderItemClick}/>
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </Paper>
  )
}

export default Orders