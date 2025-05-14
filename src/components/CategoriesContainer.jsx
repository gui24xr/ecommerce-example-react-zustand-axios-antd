import { useEffect } from "react"
import { Spin, Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useProductsStore } from "../store/index"

export default function CategoriesContainer() {
    const categories = useProductsStore(state => state.categoriesData.items)
    const loading = useProductsStore(state => state.categoriesData.loading)
    const error = useProductsStore(state => state.categoriesData.error)
    const getCategories = useProductsStore(state => state.getCategories)

    const navigate = useNavigate()
    
    useEffect(() => {
      getCategories()
    }, [])


    const basicMenuItems = [
      {
        key: 'all',
        label: 'Todos los productos',
        onClick:() => navigate('/')
      }
    ]

    const menuItems = [...basicMenuItems, ...categories.map(item => ({
      key: item.id,
      label: item.name,
      onClick:() => navigate(`/?categoryId=${item.id}`)
    }))]
    
   

  
    if (loading) return <Spin/>
    if (error) return <div>Error: {error}</div>

    return (
       <Menu>
        <Menu.ItemGroup title="Categorias">
          {menuItems.map(item => (
            <Menu.Item key={item.key} onClick={item.onClick}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu.ItemGroup>
       </Menu>
    );
}