"use client"
import { Button } from '@/components/ui/button'
import { SignInButton, UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  const {user,isSignedIn} = useUser();
  return (
    <div className='p-5 border-b shadow-sm'>
        <div className='flex items-center justify-between'>
            <Image src={'/logo.svg'} width={180} height={50} alt="logo" />
            {isSignedIn? 
            <div className='flex items-center gap-5'>
            <Link href={'/dashboard'}>
            <Button variant="outline">DashBoard</Button> 
            </Link>
            <UserButton />
            </div>:
            <SignInButton>

              <Button>Get Started</Button>
            </SignInButton>
            }
        </div>
    </div>
  )
}

export default Header