import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <a href="/">Início</a>
      </Menu.Item>
      <Menu.Item key="Blog">
        <a href="/blog">Página de Periódicos</a>
      </Menu.Item>
      <Menu.Item key="Create">
        <a href="/blog/create">Criação de Periódicos</a>
      </Menu.Item>
    </Menu>
  )
}

export default LeftMenu