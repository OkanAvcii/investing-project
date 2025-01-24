import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import { Slide, toast } from "react-toastify";
import { initialState, reducer } from "../reducer/reducer";

const DataContext = createContext();

export const DataProvider = ({children})=>{

const[state,dispatch] = useReducer(reducer,initialState)
const{selectedStock,stocks,stockQuantity,inputQuantity}=state

  const getStocks = async ()=>{
    const url = "http://localhost:3003/stocks";
    const response = await fetch(url);
    const stocks = await response.json();
    //case-1
    dispatch({type:"getStocks",payload:stocks})
    // setStocks(stocks);
  }

  const getMarkets = async ()=>{
    const url = "http://localhost:3003/markets";
    const response = await axios.get(url);
    const markets = await response.data;
    //case-2
    dispatch({type:"getMarkets",payload:markets})
    // setMarkets(markets);
  }

  useEffect(()=>{
    getStocks();
    getMarkets();
  },[]);

  const BuyStock = async (newStock)=>{
    let url = "http://localhost:3003/stocks";
    if(!selectedStock){
      newStock.id = (Number(stocks[stocks.length-1].id) + 1).toString(),
      //case-12
      dispatch({type:"buyStock",newStock})
      // setStocks(prev=>[...prev,newStock]);
      const response = await axios.post(url,newStock);
      console.log("İşlem Yapılan Hisse",response.data);
      toast('Hisse Senedi Portfoye Eklendi.', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
        });
    }
    else{
      url += `/${selectedStock.id}`;
      const response = await axios.put(url,newStock);
      console.log("Yeni Alınan Hisse Senedi",response.data)
      newStock.id = selectedStock.id;
      //case-13
      dispatch({type:"editStock",newStock});
      // setStocks(prev=>prev.map(stock=>{
      //   if(stock.id === selectedStock.id){
      //     return {...newStock}
      //   }
      //   else{
      //     return {...stock}
      //   }
      // }))
      // setSelectedStock("");
      toast('Hisse Senedi İşleminiz Tamamlandı.', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
        });
    }
  }

  const handleBuy = (e) => {
    e.preventDefault();
    const newQuantity = Number(stockQuantity) + Number(inputQuantity); // Yeni miktarı hesapla
    dispatch({type:"stockQuantity",newQuantity})
    // setStockQuantity(newQuantity); // Güncel miktarı ayarla

    BuyStock({
      stockCategory:state.stockCategory,
      stockName:state.stockName,
      stockQuantity: newQuantity,
      stockPrice:state.stockPrice,
      stockTotal:state.stockTotal,
      stockIncrease:state.stockIncrease,
      stockImage:state.stockImage
    });
    //case-3
    dispatch({type:"formReset"});
    // setInputQuantity(''); // Miktar girişini sıfırla
  };

  const handleSell = (e) => {
    e.preventDefault();
    const newQuantity = Math.max(0, Number(stockQuantity) - Number(inputQuantity)); // 0’ın altına düşmesini engelle
    dispatch({type:"stockQuantity",newQuantity})
    // setStockQuantity(newQuantity);

    BuyStock({
      stockCategory:state.stockCategory,
      stockName:state.stockName,
      stockQuantity: newQuantity,
      stockPrice:state.stockPrice,
      stockTotal:state.stockTotal,
      stockIncrease:state.stockIncrease,
      stockImage:state.stockImage
    });
    //case-3
    dispatch({type:"formReset"});
    // setInputQuantity(''); // Miktar girişini sıfırla
  };

  // useEffect(() => {
  //   if (selectedStock) {
  //     setStockCategory(selectedStock.stockCategory);
  //     setStockName(selectedStock.stockName);
  //     setStockQuantity(selectedStock.stockQuantity);
  //     setStockPrice(selectedStock.stockPrice);
  //     setStockTotal(selectedStock.stockTotal);
  //     setStockIncrease(selectedStock.stockIncrease);
  //     setStockImage(selectedStock.stockImage);
  //   }
  // }, [selectedStock]);

    return <DataContext.Provider value={{
                handleBuy,handleSell,state,dispatch}}>
                {children}
           </DataContext.Provider>
}

export default DataContext;