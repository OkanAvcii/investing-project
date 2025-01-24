import React from 'react'
import Navi from './components/Navi'
import './assets/styles/app.css'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import StockPage from './pages/StockPage'
import LoginPage from './pages/LoginPage'
import { ToastContainer } from 'react-toastify'
import LoadingPage from './pages/LoadingPage'
import Detail from './components/Detail'
import PrivateRoute from './services/PrivateRoute'
import Form from './components/Form'
import { AuthProvider } from './context/AuthContext'


const App = () => {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoadingPage/>}/>

          <Route path='/investing' element={<Navi/>}>
            <Route path='home' element={<HomePage/>}>
              <Route path='/investing/home' element={<PrivateRoute special={<Form/>}/>}/>
            </Route>

            <Route path='login' element={<LoginPage/>}/>
            <Route path='stock' element={<StockPage/>}/>
            <Route path='stock/:stockID' element={<Detail/>}/>
          </Route>
          
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App