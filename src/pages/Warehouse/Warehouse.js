import WarehouseList from '../../components/WarehouseList/WarehouseList'
import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = `http://localhost:8080/warehouses`;

export default function Warehouse(){
    const[warehouseData, setWarehouseData] = useState([])

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setWarehouseData(response.data)
        })
        .catch((error) => {
            console.log(error);
        })
    },[])

    console.log(warehouseData);

    if(!warehouseData){
        return;
    }

    return (
        <WarehouseList warehouseData={warehouseData}/>
    )
}