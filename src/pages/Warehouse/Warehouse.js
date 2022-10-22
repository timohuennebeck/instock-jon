import WarehouseList from '../../components/WarehouseList/WarehouseList'
import { useEffect, useState } from "react";
import axios from "axios";
import React from 'react';
import { useParams } from 'react-router-dom';


const baseURL = `http://localhost:8080/warehouses`;

export default function Warehouse(){
    const[warehouseData, setWarehouseData] = useState([])
    const {id} = useParams()
   

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setWarehouseData(response.data)
            
        })
        .catch((error) => {
            console.log('error');
        })
    },[baseURL])


    if(!warehouseData){
        return;
    }

    return (
        <>
            <WarehouseList warehouseData={warehouseData} />
        </>
    )
}