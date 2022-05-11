import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Order = () => {
    const [order, setOrder] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:5000/order', {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status !== 200) {
                    navigate('/login')
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
                setOrder(data)
            })
    })
    return (
        <div>
            <h1>This is for order: {order.length}</h1>
        </div>
    );
};

export default Order;