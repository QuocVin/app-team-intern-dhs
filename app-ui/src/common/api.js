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

}

export const API = axios.create({
    baseURL: 'http://127.0.0.1:4000/',
})
