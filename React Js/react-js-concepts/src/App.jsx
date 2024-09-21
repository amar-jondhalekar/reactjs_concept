import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassBasedComponent from './components/class-based-component'
import FunctionalComponent from './components/functional-component'
import ProductList from './components/products'
import Users from './components/products/components/users'

function App() {
  const dummyProductData = ['Product 1', 'Product 2', 'Product 3'];
  return (
    <>
      <div>
        <h1> React JS Concepts 2024 </h1>
        {/* <ClassBasedComponent/> */}
        {/* <FunctionalComponent/> */}
        {/* <ProductList listOfProducts={dummyProductData} name='Amar' city='Kolhapur'></ProductList> */}
        <Users/>
      </div>
    </>
  )
}

export default App
