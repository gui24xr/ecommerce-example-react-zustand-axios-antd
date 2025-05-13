import React from 'react';
import { Layout,  } from 'antd';
import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/index'

const { Header, Content, Footer, Sider } = Layout;

export default function AppLayout() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Header */}
      <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#001529' }}>
        <NavBar />
      </Header>

      {/* Body */}
      <Layout>
        {/* Sider con carrusel u ofertas */}
        <Sider width={250} style={{ background: '#f0f2f5', padding: 12 }}>
         <h1>Ofertas</h1>
         <h1>Categorias</h1>
        </Sider>

        {/* Contenido principal */}
        <Content style={{ padding: 24 }}>
          <Outlet />
        </Content>
      </Layout>

      {/* Footer */}
      <Footer style={{ textAlign: 'center' }}>
        ©2025 MyShop - Todos los derechos reservados
      </Footer>
    </Layout>
  );
};


