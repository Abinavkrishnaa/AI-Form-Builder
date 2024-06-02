"use client"
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
  const {user,isSignedIn} = useUser();
  return (
    <div className='p-5 border-b shadow-sm'>
        <div className='flex items-center justify-between'>
            <Image src={'/logo.svg'} width={180} height={50} alt="logo" />
            {isSignedIn? 
            <div className='flex items-center gap-5'>
            <Button variant="outline">DashBoard</Button> 
            <UserButton />
            </div>:
            <Button>Get Started</Button>
            }
        </div>
    </div>
  )
}

export default Header