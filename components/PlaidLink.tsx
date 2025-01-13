import React, { useCallback, useEffect, useState } from 'react'
import { Button } from './ui/button'
import {PlaidLinkOnSuccess, PlaidLinkOptions} from  'react-plaid-link'
import { StyledString } from 'next/dist/build/swc/types';
import { useRouter } from 'next/router';

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
  const router = useRouter();
  // 1. State Management
  const [token, setToken] = useState('');

  // 2. Side Effect for Token Fetching
  useEffect(() => {
    const getLinkToken = async () => {
      
     // const data = await createLinkToken(user); // Runs once when component mounts

     //setToken(data?.linkToken);

    }
    getLinkToken();
  }, []);



  // 3. Success Callback
  const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token: String) => {
    //await exchangePublicToken({
    //  publicToken: public_token,
    // user,
    //});
    router.push('/');
  }, [user])

  const config: PlaidLinkOptions = {
    token,
    onSuccess
  }

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