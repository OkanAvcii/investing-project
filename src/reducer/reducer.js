export const initialState = {
    stocks:[],
    markets:[],
    selectedMarket:"Tüm Borsalar",
    selectedStock:"",
    search:"",
    stockCategory:"",
    stockName:"",
    stockQuantity:"",
    inputQuantity:"",
    stockPrice:"",
    stockTotal:"",
    stockIncrease:"",
    stockImage:""
}

export const reducer = (state,action)=>{
    switch(action.type){
        //case-1
        case"getStocks":
        return{
            ...state,
            stocks: action.payload
        }
        //case-2
        case"getMarkets":
        return{
            ...state,
            markets: action.payload
        }
        //case-3
        case"formReset":
        return{
            ...state,
            stockCategory:"",
            stockName:"",
            stockQuantity:"",
            inputQuantity:"",
            stockPrice:"",
            stockTotal:"",
            stockIncrease:"",
            stockImage:""
        }
        //case-4
        case"stockName":
        return{
            ...state,
            stockName: action.payload
        }
        //case-5
        case"stockCategory":
        return{
            ...state,
            stockCategory: action.payload
        }
        //case-6
        case"stockPrice":
        return{
            ...state,
            stockPrice: action.payload
        }
        //case-7
        case"selectedStock":
        return{
            ...state,
            selectedStock: action.payload
        }
        //case-8
        case"inputQuantity":
        return{
            ...state,
            inputQuantity: action.payload
        }
        //case-9
        case"selectedMarket":
        return{
            ...state,
            selectedMarket: action.payload
        }
        //case-10
        case"search":
        return{
            ...state,
            search: action.payload
        }
        //case-11
        case"exchange":
        const choosen = action.stock
        console.log(action.stock);
        
        return{
            ...state,
            selectedStock: choosen,
            stockCategory:choosen.stockCategory,
            stockName:choosen.stockName,
            stockQuantity:choosen.stockQuantity,
            stockPrice:choosen.stockPrice,
            stockTotal:choosen.stockTotal,
            stockIncrease:choosen.stockIncrease,
            stockImage:choosen.stockImage
        }
        //case-12
        case"buyStock":
        const newMarket = [...state.stocks,action.newStock]
        return{
            ...state,
            stocks: newMarket
        }
        //case-13
        case"editStock":
        const edittedMarket = state.stocks.map(item=>{
            if(item.id===state.selectedStock.id){
                return{...action.newStock}
            }else{
                return{...item}
            }
        })
        return{
            ...state,
            stocks: edittedMarket,
            selectedStock:""
        }
        //case-14
        case"stockQuantity":
        return{
            ...state,
            stockQuantity: action.newQuantity
        }
    }
}
