import axios from 'axios';

export const endpoints = {
    'login': '/users/authentication',
    'register': '/users/create',
    // 'user-info': (userId) => `/users/detail?id=${userId}`,
    // 'user-update': '/users/update',
    // 'user-chart': '/api/users/chartRole',
    // 'user-search': '/api/users/searchName',

    'product': '/product',
    'ordersByUser': '/order/get-by-user/',
    'orderDetail': '/order/order-detail/',
    'updateUser':'/users/update/',
    'changePassword': '/users/user-detail/change-password',


    'table-year-total': (year) => `/order/get-year-total?year=${year}`,
    'chart-month-total-by-brand': (month, year) => `/order/get-month-total-by-brand?month=${month}&year=${year}`,
    'chart-year': (year) => `/order/get-chart-year?year=${year}`,
}

export const API = axios.create({
    baseURL: 'http://127.0.0.1:4000/',
})
