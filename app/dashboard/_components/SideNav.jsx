import { LibraryBig, LineChart, MessagesSquare, Shield } from 'lucide-react'
import React from 'react'

function SideNav() {
  const menuList=[
    {
      id:1,
      name:'MyForm',
      icon:LibraryBig,
      path:'/'

    },
    {
      id:1,
      name:'Response',
      icon:MessagesSquare,
      path:'/'

    },
    {
      id:1,
      name:'Analytics',
      icon:LineChart,
      path:'/'

    },
    {
      id:1,
      name:'Upgrade',
      icon:Shield,
      path:'/'

    }
  ]
  return (
    <div className='h-screen shadow-md border'>
      <div className='p-5'>
        {menuList.map((menu,index)=>(
          <h2 key={index} className='flex items-center gap-3 p-3'>
            <menu.icon/>
            {menu.name}
          </h2>
        ))}
      </div>
    </div>
  )
}

export default SideNav