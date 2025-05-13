import { useState, useEffect } from "react"
import axios from "axios"
import { Spin,Carousel, Radio, Card, Rate  } from 'antd'
const { Meta } = Card;


const apiUrl = "https://fakestoreapi.com/products"

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

export default function ProductsCarousel({renderItem}) {
  
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
        <>
      <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={2000}>
        {products.map((product) => (
          <div key={product.id} style={contentStyle}>
            {renderItem(product)}
          </div>
        ))}
      </Carousel>
    </>
    )
}