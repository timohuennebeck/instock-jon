import React from 'react';
import { Link } from 'react-router-dom';
import ReturnArrow from '../../assets/images/icons/arrow_back-24px.svg';
import EditInventoryForm from '../../components/EditInventoryForm/EditInventoryForm';

export default function EditInventory() {
    return (
        <>
        <div className='editinv'>
            <div className='editinv__header'>
                <Link to='/'>
                    <img 
                    src={ReturnArrow}
                    className='editinv__header-img'
                    alt='Go back arrow'
                    />
                </Link>
                <h1 className='editinv__title'>
                    Edit Inventory Item
                </h1>
            </div>
            <div className='editinv__form'>
                <EditInventoryForm />
            </div>
        </div>
        </>
    )
}