import React from 'react';
import { Card, Rate, Button, Space} from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const { Meta } = Card;


export default function ProductCard({product}){

    return(
        <Card
              hoverable
         
              cover={
                <img
                  alt={product.title}
                  src={product.images[0]}
                  style={{ height: 100, objectFit: 'contain', padding: 16 }}
                />
              }
            >
              <Meta title={product.title} description={`$${product.price}`} />
              <p style={{ marginTop: 8 }}>{product.category.name}</p>
              <Rate disabled allowHalf defaultValue={product.rating?.rate} />
             
              <Space direction="vertical">
                <Button type='link' onClick={() => navigate(`/product/${product.id}`)}>
                    Ver detalle
                </Button>
                <Button
                    type="link"
                    icon={<ShoppingCartOutlined />}
                    onClick={() => console.log('Producto agregado al carrito')}
                >
                    Agregar al carrito
                </Button>
            </Space>
            </Card>
    )
}
