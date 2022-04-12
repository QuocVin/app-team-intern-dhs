import React, { useState, useEffect } from 'react';
import {
    Typography,
    Container,
    Box
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
    const [monthForChart, setMonthForChart] = useState(new Date().getMonth() + 1);

    useEffect(() => {
        async function init() {
            setLoading(true)
            setTimeout(() => {
                fetchTableYear()
                fetchOrderByBrand(monthForChart)
                fetchChartYear()
                setLoading(false)
            }, 500);
        }
        init()
    }, [])

    // thống kê tổng price trong năm thành bảng
    const fetchTableYear = async () => {
        API.get(endpoints["table-year-total"]).then(res => {
            setTableYear(
                res?.data?.data?.map((r, idx) =>
                    createData(`tháng ${r.months}`, r.sl, r.total, r.months)
                )
            );
        })
    }

    // tổng trong tháng theo brand
    const fetchOrderByBrand = async (month) => {
        API.get(endpoints["chart-month-total-by-brand"](month)).then(res => {
            setChartOrderByBrand({
                total: converData(res?.data?.data, 'total'),
                brand: converData(res?.data?.data, 'name')
            });
        })
    }

    // thống kê danh thu trong năm
    const fetchChartYear = async () => {
        API.get(endpoints["chart-year"]).then(res => {
            setChartYear({
                total: formatChartYear(res?.data?.data),
                month: MONTHS
            });
        })
    }


    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 7]
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

    const componentMonthPrice = {
        labels: chartOrderByBrand?.brand,
        datasets: [
            {
                label: 'Tổng VNĐ',
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

    const handleChoose = (month) => {
        setMonthForChart(month)
        fetchOrderByBrand(month)
    }

    return (
        <Container maxWidth='md'>
            <Typography className={classes.title} variant="h4" >Báo cáo thống kê</Typography>

            {loading ? <p>loading. . .</p> : (
                <Box className={classes.chart}>
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

            {loading ? <p>loading. . .</p> : (
                <Box className={classes.chart}>
                    <Doughnut
                        data={componentMonthPrice}
                        options={{
                            plugins: {
                                legend: {
                                    display: true,
                                    position: 'top',
                                },
                                title: {
                                    display: true,
                                    text: `Danh thu của tháng ${monthForChart}`,
                                },
                            },
                        }} />
                </Box>
            )}


            {loading ? <p>Loading ...</p> :
                <Box className={classes.chart}>
                    <AppTable columns={chartOrderColumns} data={tableYear} handleChoose={handleChoose} />
                </Box>
            }

        </Container>
    )
}