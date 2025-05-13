import './App.css'
import AppLayout from './Layouts/AppLayout'
import { Routes, Route } from 'react-router-dom'
import { ProductsContainer, ProductCard, CartContainer } from './components/index'
function App() {
 
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<ProductsContainer renderItem={(item) => (<ProductCard key={item.id} product={item} />)}/>} />
        <Route path='cart' element={<CartContainer />} />   
      </Route>
    </Routes>
  )
}

export default App
