import React from 'react'
import Image from 'next/image'
import { logoutAccount } from '@/lib/actions/user.actions'
import { useRouter } from 'next/router'
import { Router } from 'lucide-react'

const footer = ({user,type='desktop'}:FooterProps) => {

const handleLogOut = async () =>{


   const loggedOut = await logoutAccount();
   if(loggedOut) Router.push('/sign-in')
} 

  return (
    <footer className="footer">
    <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
        <p className='text-xl font-bold text-gray-700'>
         {user?.name[0]}
        </p>
    </div>

    <div className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}>
  <h1 className="text-14 truncate font-normal text-gray-700 font-semibold">
    {user?.name} {/* If user is null - Returns undefined instead of crashing */}
  </h1>
  <p className="text-14 truncate font-normal text-gray-600">
    {user?.email}
  </p>
</div>

<div className="footer_image" onClick={handleLogOut}>
<Image src="/icons/logout.svg" fill alt="jsm" />
      </div>
    </footer>
  )
}

export default footer
