import React from 'react'
import { Button } from './ui/button'

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
  return (
    <>
      {variant === 'primary' ? (
        <Button className='plaidlink-primary'>
          Connect bank
        </Button>
      ):variant ==="ghost"?(
        <Button>
          Connect bank  
        </Button>
      ):(<button>
        Connect bank
      </button>)}
    </>
  )
}

export default PlaidLink