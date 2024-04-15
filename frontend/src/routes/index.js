import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AppProduct from '../views/products/add'
import AddArticles from '../views/articles/add'
import ListProduct from '../views/products/list'
import Dashboard from '../views/dashboard'

const MyRoutes = () => {
    return (
      <Routes>
         <Route path='/' element={<Dashboard/>}/>
         <Route path='/product/import' element={<AppProduct/>}/>
         <Route path='/product/list' element={<ListProduct/>}/>
         <Route path='/article/import' element={<AddArticles/>}/>
      </Routes>
    );
  }
  
  export default MyRoutes;