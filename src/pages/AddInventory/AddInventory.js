import React from 'react';
import { Link } from 'react-router-dom';
import ReturnArrow from '../../assets/images/icons/arrow_back-24px.svg';
import AddInventoryForm from '../../components/AddInventoryForm/AddInventoryForm';
import './AddInventory.scss';

export default function AddInventory() {
    return (
        <>
        <div className='addinv'>
            <div className='addinv__header'>
                <Link to='/inventory'>
                    <img src={ReturnArrow} className='addinv__header-img' alt='Go back arrow' />
                </Link>
                <h1 className='addinv__title'>Add New Inventory Item</h1>
            </div>
            <div className='addinv__form'>
                <AddInventoryForm />
            </div>
        </div>
        </>
    )
}