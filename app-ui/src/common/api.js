import axios from 'axios';

export const endpoints = {
    'login': '/users/authenticate',
    'register': '/users/create',
    // 'user-info': (userId) => `/users/detail?id=${userId}`,
    // 'user-update': '/users/update',
    // 'user-chart': '/api/users/chartRole',
    // 'user-search': '/api/users/searchName',

    'product': '/product',

    'table-year-total': (year) => `/order/get-year-total?year=${year}`,
    'chart-month-total-by-brand': (month, year) => `/order/get-month-total-by-brand?month=${month}&year=${year}`,
    'chart-year': (year) => `/order/get-chart-year?year=${year}`,
}

export const API = axios.create({
    baseURL: 'http://127.0.0.1:4000/',
})