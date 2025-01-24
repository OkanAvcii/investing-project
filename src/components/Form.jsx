import React, { useContext } from 'react';
import '../assets/styles/form.scss';
import DataContext from '../context/DataContext'

const Form = () => {
  
  const { handleBuy,handleSell,state,dispatch } = useContext(DataContext);
  const{selectedStock,stockName,stockCategory,stockPrice,inputQuantity} = state

  return (
    <form>
      <h3>{selectedStock ? 'Mevcut Hisse Senedi Al / Sat' : 'Portfoyüne Yeni Hisse Ekle'}</h3>

      <label>Borsa Seçiniz</label>
      <select value={stockCategory} onChange={(e) => dispatch({type:"stockCategory",payload:e.target.value})}>
        <option>Borsa Seçiniz</option>
        <option>Dow Jones</option>
        <option>S&P 500</option>
        <option>Nasdaq 100</option>
        <option>NYSE</option>
      </select>

      <label>Hisse Senedi Seçiniz</label>
      <select value={stockName} onChange={(e) => dispatch({type:"stockName",payload:e.target.value})}>
        <option>Hisse Senedi Seçiniz</option>
        <option>Boeing</option>
        <option>Intel</option>
        <option>Microsoft</option>
        <option>Bank of America</option>
        <option>Lockheed Martin</option>
        <option>JPMorgan</option>
      </select>

      <label>Teklif Edilen Fiyat</label>
      <input value={stockPrice} onChange={(e) => dispatch({type:"stockPrice",payload:e.target.value})} type="number" placeholder="00,000$" />

      <label>ADET</label>
      <input value={inputQuantity} onChange={(e) => dispatch({type:"inputQuantity",payload:e.target.value})} type="number" placeholder="Lütfen adedi yaz" />

      <label>TUTAR</label>
      <input value={stockPrice * inputQuantity} type="number" placeholder="0,00$" disabled />

      <div className="buttons">
        <button disabled={!stockName || !stockCategory || !stockPrice || !inputQuantity} onClick={handleBuy}>
          Hisse Senedi Al
        </button>
        <button
          disabled={!stockName || !stockCategory || !stockPrice || !inputQuantity || !selectedStock}
          onClick={handleSell}
        >
          Hisse Senedi Sat
        </button>
      </div>
    </form>
  );
};

export default Form;
