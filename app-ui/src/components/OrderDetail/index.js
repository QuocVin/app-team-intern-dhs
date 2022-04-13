import { Box, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { API, endpoints } from '../../common/api'
import OrderDetailItem from './OrderDetailItem'
import { useStyles } from './style'

function OrderDetail() {
    const {id} = useParams()

    const [listProduct, setListProduct] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [createdDate, setCreatedDate] = useState('')

    const fetchOrderDetail=(id)=>{
        return API.get(endpoints['orderDetail'] + id)
    }
    useEffect(() => {
        fetchOrderDetail(id)
        .then(res => {
            const {status, data} = res.data
            setListProduct(data.list_product)
            setCreatedDate(new Date(data.created_date).toLocaleDateString())
            setTotalPrice(data.total_price)
        })
    }, [])
    
    
    
    
    const classes = useStyles()
  return (
      <Box p={3}>
            <Typography variant='h4' color='primary' component={'h4'}>
                Order ID: {id}
            </Typography>
            
          <Grid container justifyContent={'space-between'}>
              <Grid item xs={12} md={6} >
                <Typography variant='h6' color='textSecondary' component={'span'} gutterBottom>
                    Created date:
                    <Typography variant='h6' color='textPrimary' component={'span'} gutterBottom>
                        {' ' + createdDate}
                    </Typography>
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} direction={"row-reverse"}>
                <Typography variant='h6' color='textSecondary' component={'span'} gutterBottom>
                    Total price:
                    <Typography variant='h6' color='secondary' component={'span'} gutterBottom>
                        {' ' + totalPrice} VNĐ
                    </Typography>
                </Typography>
              </Grid>
          </Grid>
            <Divider />
            <Typography variant='h6' align='right' color='primary' component={'h6'} gutterBottom>
                <Link to='/Orders'>Back to orders list</Link>
            </Typography>
          <TableContainer component={Paper}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>Name</TableCell>
                        <TableCell align='center'>Price</TableCell>
                        <TableCell align='center'>Quantity</TableCell>
                        <TableCell align='center'>Amount price </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {
                    listProduct.map((item, i)=>
                        <OrderDetailItem key={i} item={item} onClick={()=>console.log(1)}/>
                    )
                }
                </TableBody>
            </Table>
        </TableContainer>
      </Box>
  )
}

export default OrderDetail