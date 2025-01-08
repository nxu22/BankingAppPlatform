'use server';

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async ({ email, password}:signInProps)=> {
    try{
      //get appwrite account client
      const { account } = await createAdminClient();
      //create user session with email/password
      const response = await account.createEmailPasswordSession(email,password);
      //return stringified session data
      return parseStringify(response); 
    }catch(error){
        console.error('Error', error);
    }
} 


export const signUp = async (userData:SignUpParams) => {
    const {email, password, firstName, lastName }= userData;
    try{
    const { account } = await createAdminClient();

       const newUserAccount =  await account.create(
        ID.unique(), 
        email, 
        password, 
       `${firstName} ${lastName}`
    );
        const session = await account.createEmailPasswordSession(email, password);
      
        (await cookies()).set("appwrite-session", session.secret, {
          path: "/",
          httpOnly: true,
          sameSite: "strict",   
          secure: true,
        });

        return parseStringify(newUserAccount);
    }catch(error){
        console.error('Error', error);
        throw error;
    }
} 


// checks if a user is currently logged in by attempting to get their account details and returns the user data if logged in, or null if not.
export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      const user = await account.get();
      return parseStringify(user);
    } catch (error) {
      return null;
    }
  }

  export const logoutAccount = async () => {
    try {
      const {account} = await createSessionClient();
      cookies().delete('appwrite-session');
      await account.deleteSession('current');
    } catch (error) {
      return null;
    }
  }