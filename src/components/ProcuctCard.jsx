import React from 'react';
import { Card, Rate } from 'antd';
const { Meta } = Card;


export default function ProductCard({product}){

    return(
        <Card
              hoverable
         
              cover={
                <img
                  alt={product.title}
                  src={product.image}
                  style={{ height: 100, objectFit: 'contain', padding: 16 }}
                />
              }
            >
              <Meta title={product.title} description={`$${product.price}`} />
              <p style={{ marginTop: 8 }}>{product.category}</p>
              <Rate disabled allowHalf defaultValue={product.rating?.rate} />
              <p>{product.rating?.count} reviews</p>
            </Card>
    )
}
