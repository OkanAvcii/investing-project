import React, { useContext } from 'react'
import Card from './Card'
import DataContext from '../context/DataContext'
import AuthContext from '../context/AuthContext';

const CardList = () => {

  const {state} = useContext(DataContext);
  const {isAuthenticated} = useContext(AuthContext);
  
  return (
    <div className='card-list'>
      {
        !isAuthenticated &&
        <p className="guest-message">Giriş Yapmadan İşlem Yapamazsınız.</p>
      }
      {
        state.stocks.map(stock=>
          stock.stockQuantity>0 &&
        (state.selectedMarket === stock.stockCategory || state.selectedMarket === "Tüm Borsalar") &&
          <Card key={stock.id} stock={stock} search={state.search} setSelectedStock={state.setSelectedStock}/>
          
        )
      }
    </div>
  )
}

export default CardList