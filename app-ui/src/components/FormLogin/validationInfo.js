import React from 'react'

export default function validationInfo(values) {
    const error = {}

    if(!values.username){
        error.username = 'Username is required'
    }
    if(!values.password){
        error.password = 'Password is required'
    }

    return error;
}
