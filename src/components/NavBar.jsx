import { Menu, Badge } from 'antd';
import { HomeOutlined, ShoppingCartOutlined, MessageOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate();

    const items = [
        {
            label: 'Inicio',
            key: '1',
            icon: <HomeOutlined />,
            onClick: () => navigate('/')
        },
      
     
    ]
    return (
        <>
            <div style={{ color: '#fff', fontSize: 20 }}>🛒 MyShop</div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ flex: 1, justifyContent: 'center' }}>
                <Menu.Item key="1">Inicio</Menu.Item>
            </Menu>
            <Badge count={3} style={{ marginRight: 16 }}>
                <ShoppingCartOutlined style={{ fontSize: 24, color: '#fff' }} onClick={() => navigate('/cart')}/>
            </Badge>
        </>


    )
}
