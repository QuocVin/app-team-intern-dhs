import {  Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import OrderItem from './OrderItem'
import {useStyles} from './style'
import { endpoints, API } from '../../common/api';
import {useHistory} from 'react-router'
import TablePaginationActions from '@material-ui/core/TablePagination/TablePaginationActions'

const getOrders = ({id}, page = 1) =>{
    return API.get(endpoints['ordersByUser'] + id ,{
        params:{
            page
        }
    })
    
}

const Orders = () => {
    const classes = useStyles()
    const [orders, setOrders] = useState([])
    const user = useSelector(state => state.loginState.user)
    const [page, setPage] = useState(0)
    const [totalOrders, setTotalOrders] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(0)

    const history = useHistory()

    const handleOrderItemClick = ({id})=>{
        history.push(`/OrderDetail/${id}`)
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        // setPage(1);
        console.log(123);
      };

    useEffect(() => {
      getOrders(user, page + 1).then(res => {
          const {data, status, total, limit} = res.data
          if(status && status === 200){
              setOrders(data)
              setTotalOrders(total)
              setRowsPerPage(limit)
          }
      }).catch(err=> console.log(err))
    }, [page])
    
    


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
                            <OrderItem key={i} item={item} onClick={()=>handleOrderItemClick(item)}/>
                        )
                    }
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                        colSpan={3}
                        count={totalOrders}
                        rowsPerPage={rowsPerPage}
                        rowsPerPageOptions={[]}
                        page={page}
                        
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    </Paper>
  )
}

export default Orders