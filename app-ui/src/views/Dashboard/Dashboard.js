import React, { useState, useEffect } from 'react';
import { endpoints, API } from '../../common/api';


export default function Dashboard() {

    useEffect(() => {
        async function init() {
            await fetch()
        }
        init()
    }, [])

    const fetch = async () => {
        API.get(endpoints["product"]).then(res => {
            console.info(res.data.data)
        })
    }

    return (
        <div>Dashboard</div>
    )
}