import './Layout.css';
import { HomeOutlined, ToolOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

import { Outlet, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// https://stackoverflow.com/a/77129894/21585595
const items = [
  {
    icon: <HomeOutlined />,
    label: <Link to='/' >Home</Link>,
    key: 'home',
    link: '/',
  },
  {
    icon: <ToolOutlined />,
    label: <Link to='/test' >Test</Link>,
    key: 'test',
    link: '/test',
  },
  {
    icon: <AppstoreOutlined />,
    label: 'Three Pages',
    key: 'three-pages',
    children: [
      {
        label: <Link to='/three' >Three Page</Link>,
        key: 'three',
        link: '/three',
      },
    ],
  },
];
const itemMap = (arr) => arr.map(item => {
  if(item?.children?.length) {return itemMap(item?.children)}
  return {link: item?.link, key: item?.key};
})
const linkItems = itemMap(items).flat()


const Layout = () => {
  const [current, setCurrent] = useState('');
  const onClick = (e) => { setCurrent(e.key); };

  useEffect(() => {
    const path = window.location.pathname;
    const item = linkItems.find((item) => item.link === path);
    if (item) {
      setCurrent(item.key);
    }
  } , [location.pathname]);
  
  return <div className='w-100 h-100 d-flex flex-column'>
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal"  items={items} />
    <div className="flex-grow-1 overflow-auto"><Outlet/></div>
  </div>
}

export default Layout;