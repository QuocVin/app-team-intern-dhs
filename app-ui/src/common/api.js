import axios from 'axios';

export const endpoints = {
    'login': '/users/authenticate',
    'register': '/users/create',
    // 'user-info': (userId) => `/users/detail?id=${userId}`,
    // 'user-update': '/users/update',
    // 'user-chart': '/api/users/chartRole',
    // 'user-search': '/api/users/searchName',

    'product': '/product',
}

export const API = axios.create({
    baseURL: 'http://127.0.0.1:4000/',
})