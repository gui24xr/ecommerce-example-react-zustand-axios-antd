import { Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
export default function AddToCartButton(){
   return(
      
         <Button
           type="primary"
           icon={<ShoppingCartOutlined />}
           onClick={() => console.log('Producto agregado al carrito')}
         >
           Agregar al carrito
         </Button>
      
   )
}