import WarehouseList from '../../components/WarehouseList/WarehouseList'
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams} from "react-router-dom";
import WarehousesDetailsEdit from '../WarehousesDetailsEdit/WarehousesDetailsEdit';

const baseURL = `http://localhost:8080/warehouses`;

export default function Warehouse(){
    const[warehouseData, setWarehouseData] = useState([])
    // const[warehouseToEdit,setWarehouseToEdit] = useState(null)
    const[selectedWarehouseName,setSelectedWarehouseName]=useState(null)
    const { id } = useParams();

    const handleDelete = ()=> {
        console.log(id);
      document.querySelector('.delete-warehouse').showModal() 
    }

    

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setWarehouseData(response.data)
            const warehouseName = warehouseData.find(warehouse=>warehouse.id ===id).name 
            setSelectedWarehouseName(warehouseName)
            
        })
        .catch((error) => {
            console.log(error);
        })
    },[id])


    if(!warehouseData){
        return;
    }

    return (
        <>
            <WarehouseList warehouseData={warehouseData} handleDelete={handleDelete} selectedWarehouseName={selectedWarehouseName} id={id}/>
        </>
    )
}