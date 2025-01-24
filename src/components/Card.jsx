import React, { useContext } from "react";
import "../assets/styles/card.scss";
import { AiOutlineStock } from "react-icons/ai";
import DefaultStock from "../assets/img/logoInvest.png";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Card = ({stock}) => {

  const { state,dispatch } = useContext(DataContext);
  const {isAuthenticated} = useContext(AuthContext);

  return (
    (stock.stockName.toLowerCase().startsWith(state.search.toLowerCase()) ||
      stock.stockCategory.toLowerCase().startsWith(state.search.toLowerCase())) && (
      <div className="container">

        <Link to={`/investing/stock/${stock.id}`} className="card">
          <img
            src={stock.stockIcon ? stock.stockIcon : DefaultStock}
            alt="icon"
          />
          <div className="card-content">
            <div className="card-left">
              <h5>{stock.stockName}</h5>
              <p>{stock.stockQuantity} Adet</p>
            </div>
            <div className="card-right">
              <h5>{(stock.stockQuantity * stock.stockPrice).toFixed(2)} $</h5>
              <p>
                <b>
                  +{(stock.stockQuantity * stock.stockPrice * 0.07).toFixed(2)}{" "}
                  $
                </b>
              </p>
            </div>
          </div>
        </Link>
        {
          isAuthenticated&&
          <>
            <button className="sell" onClick={() => dispatch({type:"exchange",stock})}>
            <AiOutlineStock size={40} />
            </button>
          </>
        }
        
      </div>
    )
  );
};

export default Card;
