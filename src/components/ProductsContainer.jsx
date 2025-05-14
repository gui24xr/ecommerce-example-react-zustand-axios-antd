import { useState, useEffect } from "react"
import axios from "axios"
import { Spin, Alert, Row, Col } from 'antd'
import { useSearchParams } from 'react-router-dom';
const apiUrl = "https://api.escuelajs.co/api/v1/products"

export default function ProductsContainer({renderItem}) {
  
    const [searchParams] = useSearchParams()
    const categoryId = searchParams.get('categoryId')
    console.log('categoryId',categoryId)
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [loading,setLoading] = useState(false) 
    const [error,setError] = useState(null)

    useEffect(() => {
      const fetchProducts = async () =>{
        try{
            setLoading(true)
            const {data} = await axios.get(apiUrl)
            console.log(data)
            setProducts(data)
            setLoading(false)
        }catch(error){
            setLoading(false)
            setError(error.message)
        }
      }
      fetchProducts()
    }, [])

    useEffect(() => {
      if(categoryId){
        const filtered = products.filter(product => product.category.id === parseInt(categoryId))
        setFilteredProducts(filtered)
      }else{
        setFilteredProducts(products)
      }
    }, [categoryId, products])

    if (loading) return <Spin/>
    if (error) throw new Error(error);

    return(
      <>
      <Alert
        message={`Hay ${filteredProducts.length} productos disponibles en esta categoria.`}
        type="info"
        banner
        style={{ marginBottom: 16 }}
      />
  
      <Row gutter={[16, 16]}>
        {filteredProducts.map((item, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={4}>
            {renderItem(item)}
          </Col>
        ))}
      </Row> 
      </>     
    )
}