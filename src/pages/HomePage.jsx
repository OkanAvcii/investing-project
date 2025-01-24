import React from 'react'
import SearchBar from '../components/SearchBar'
import CardList from '../components/CardList'
import { Outlet } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <Outlet/>
      <SearchBar/>
      <CardList/>
    </>
  )
}

export default HomePage