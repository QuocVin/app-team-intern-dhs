import React, { useState, useEffect } from 'react';
import {
    Typography,
    Container,
    Box,
    TextField,
    Button,
} from '@material-ui/core';
import { useStyles } from "./Dashboard-styles";
import { Bar, Doughnut } from 'react-chartjs-2';
import { endpoints, API } from '../../common/api';
import AppTable from '../../components/Table';
import {
    createData,
    converData,
    formatChartYear,
} from './Dashboard-utils'

const MONTHS = [
    'thang 1', 'thang 2', 'thang 3', 'thang 4', 'thang 5', 'thang 6', 'thang 7', 'thang 8', 'thang 9', 'thang 10', 'thang 11', 'thang 12',
]

export const chartOrderColumns = [
    { id: 'month', label: 'Tháng', maxWidth: 20, align: 'center', },
    {
        id: 'sl',
        label: 'Tổng đơn hàng',
        minWidth: 80,
        align: 'right',
    },
    {
        id: 'total',
        label: 'Tổng thu nhập',
        minWidth: 120,
        align: 'right',
    },
];



export default function Dashboard() {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const [chartOrderByBrand, setChartOrderByBrand] = useState({});
    const [chartYear, setChartYear] = useState({});
    const [tableYear, setTableYear] = useState([]);
    // const [monthForChart, setMonthForChart] = useState();

    // tool
    const [input, setInput] = useState({
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1
    });

    useEffect(() => {
        async function init() {
            setLoading(true)
            setTimeout(() => {
                fetchTableYear(input?.year)
                fetchOrderByBrand(input?.month, input?.year)
                fetchChartYear(input?.year)
                setLoading(false)
            }, 500);
        }
        init()
    }, [])

    // thống kê tổng price trong năm thành bảng
    const fetchTableYear = async (year) => {
        API.get(endpoints["table-year-total"](year)).then(res => {
            setTableYear(
                res?.data?.data?.map((r, idx) =>
                    createData(`tháng ${r.month}`, r.sl, r.total, r.month, r.year)
                )
            );
        })
    }

    // tổng trong tháng theo brand
    const fetchOrderByBrand = async (month, year) => {
        API.get(endpoints["chart-month-total-by-brand"](month, year)).then(res => {
            setChartOrderByBrand({
                total: converData(res?.data?.data, 'total'),
                brand: converData(res?.data?.data, 'name')
            });
        })
    }

    // thống kê danh thu trong năm
    const fetchChartYear = async (year) => {
        API.get(endpoints["chart-year"](year)).then(res => {
            setChartYear({
                total: formatChartYear(res?.data?.data),
                month: MONTHS
            });
        })
    }

    // data -> fetchChartYear
    const componentYearOrder = {
        labels: chartYear?.month,
        datasets: [
            {
                label: ' VNĐ',
                data: chartYear?.total,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
            }
        ]
    }

    // data -> fetchOrderByBrand
    const componentMonthPrice = {
        labels: chartOrderByBrand?.brand,
        datasets: [
            {
                // label: 'Tổng VNĐ',
                data: chartOrderByBrand?.total,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgb(255, 99, 132, 0.2)',
                    'rgba(226, 128, 54, 0.7)',
                    'rgba(215, 206, 43, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(226, 128, 54, 1)',
                    'rgba(215, 206, 43, 1)',
                ],
                borderWidth: 1,
            }
        ]
    }

    const handleChoose = (month, year) => {
        fetchOrderByBrand(month, year)
    }

    const handleInput = (e) => {
        setInput({
            ...input,
            year: e.target.value
        })
    }

    const handleReport = ({ month, year }) => {
        fetchTableYear(year)
        fetchOrderByBrand(month, year)
        fetchChartYear(year)
    }

    return (
        <Container maxWidth='lg'>
            <Typography className={classes.title} variant="h3" >Báo cáo thống kê</Typography>

            <Box
                flexDirection='row'
                display='flex'
                marginBottom={5}
            >
                <Box
                    flexDirection='columns'
                    display='flex'
                    marginRight={10}
                >
                    {loading ? <p>loading. . .</p> : (
                        <Box className={classes.chartYear}>
                            <Bar
                                data={componentYearOrder}
                                options={{
                                    plugins: {
                                        legend: {
                                            display: true,
                                            position: 'top',
                                        },
                                        title: {
                                            display: true,
                                            text: 'Thống kê số lượng đơn hàng trong năm',
                                        },
                                    },
                                }} />
                        </Box>
                    )}
                </Box>
                <Box
                    flexDirection='columns'
                    display='flex'
                    className={classes.tool}
                >
                    <Box>
                        <Typography className={classes.titleTool} variant="h5">Bảng điều khiển</Typography>
                        <TextField
                            id="outlined-basic" variant="outlined"
                            value={input?.year} label="Năm thống kê"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            className={classes.inputSearch}
                            onChange={handleInput}
                        />
                        <Button
                            onClick={() => handleReport(input)}
                            color='primary'
                            variant='contained'
                            fullWidth
                        >Thống kê</Button>
                    </Box>
                </Box>
            </Box>

            <Box
                flexDirection='row'
                display='flex'
            >
                <Box
                    flexDirection='columns'
                    display='flex'
                    marginRight={10}
                >
                    {loading ? <p>Loading ...</p> :
                        <Box className={classes.table}>
                            <Typography className={classes.title} variant="h4" >Danh thu trong năm</Typography>
                            <AppTable columns={chartOrderColumns} data={tableYear} handleChoose={handleChoose} />
                        </Box>
                    }
                </Box>
                <Box
                    flexDirection='columns'
                    display='flex'
                >
                    {loading ? <p>loading. . .</p> : (
                        <Box className={classes.chartMonth}>
                            <Doughnut
                                data={componentMonthPrice}
                                options={{
                                    plugins: {
                                        legend: {
                                            display: true,
                                            position: 'right',
                                        },
                                        title: {
                                            display: true,
                                            text: `Danh thu trong tháng ${input.month} theo thương hiệu`,
                                        },
                                    },
                                }} />
                        </Box>
                    )}
                </Box>
            </Box>
        </Container>
    )
}