import React, { useContext } from 'react'
import '../assets/styles/search.scss'
import { FaSearch } from "react-icons/fa";
import DataContext from '../context/DataContext';

const SearchBar = () => {

  const {state,dispatch} = useContext(DataContext);

  return (
      <div className='search-bar'>
        <ul className='markets'>
          {
            state.markets.map(market=>
              <li key={market.id} onClick={e=>dispatch({type:"selectedMarket",payload:e.target.innerText})}>{market.marketName}</li>
            )
          }
        </ul>
        <div className='input'>
          <input onChange={e=>dispatch({type:"search",payload:e.target.value})} type='search' placeholder='Hisse & Borsa'/>
          <FaSearch className='scope' />
        </div>
      </div>
  )
}

export default SearchBar