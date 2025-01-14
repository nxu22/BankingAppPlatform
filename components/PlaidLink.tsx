import React, { useCallback, useEffect, useState } from 'react'
import { Button } from './ui/button'
import {PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink} from  'react-plaid-link'
import { StyledString } from 'next/dist/build/swc/types';
import { useRouter } from 'next/navigation';
import { createLinkToken } from '@/lib/actions/user.actions';

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
  
  const router = useRouter();
  // 1. State Management
  const [token, setToken] = useState('');

  // 2. Side Effect for Token Fetching
  useEffect(() => {
    const getLinkToken = async () => {
      
     const data = await createLinkToken(user); // Runs once when component mounts

     setToken(data?.linkToken);

    }
    getLinkToken();
  }, [user]);



  // 3. Success Callback
  const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token: String) => {
    //await exchangePublicToken({
    //  publicToken: public_token,
    // user,
    //});
    router.push('/');
  }, [user])

  //use hook
  const config: PlaidLinkOptions = {
    token,
    onSuccess
  }

  const { open, ready } = usePlaidLink(config);
  return (
    <>
      {variant === 'primary' ? (
        <Button
        onClick={open}
          disabled={!ready}
        className='plaidlink-primary'>
          connect bank
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