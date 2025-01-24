import React, { useContext, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import DataContext from "../context/DataContext";
import CardList from './CardList';

const Detail = () => {

    const { stocks,setSelectedStock } = useContext(DataContext);
    const params = useParams();
    const navigate = useNavigate();
    let stockIndex = params.stockID - 1;
 
  return (
    <div className='stock-detail'>
        <h3>deneme</h3>
        <CardList/>
    </div>
  )
}

export default Detail