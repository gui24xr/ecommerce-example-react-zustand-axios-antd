import { useState, useEffect } from "react"
import axios from "axios"
import { Spin, Modal, Row, Col } from 'antd'
const apiUrl = "https://fakestoreapi.com/products"

export default function ProductsContainer({renderItem}) {
   
    const [products, setProducts] = useState([])
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

    if (loading) return <Spin/>
    if (error) throw new Error(error);

    return(
        <Row gutter={[16, 16]}>
          {products.map((item) => (
            <Col key={item.id} xs={24} sm={12} md={8} lg={4}>
              {renderItem(item)}
            </Col>
          ))}
        </Row>
    )
}