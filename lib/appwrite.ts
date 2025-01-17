"use server";
import { Client, Account, Databases, Users } from "node-appwrite";
import { cookies } from "next/headers";

export async function createSessionClient() {
  if (!process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT) {
    throw new Error('Missing Appwrite endpoint configuration');
  }
  if (!process.env.NEXT_PUBLIC_APPWRITE_PROJECT) {
    throw new Error('Missing Appwrite project configuration');
  }

  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT);

  const session = (await cookies()).get("appwrite-session");
  if (!session || !session.value) {
    throw new Error("No session");
  }
  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
    get database() {
      return new Databases(client);
    },
    get user() {
      return new Users(client);
    }
  };
}

export async function createAdminClient() {
  if (!process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT) {
    throw new Error('Missing Appwrite endpoint configuration');
  }
  if (!process.env.NEXT_PUBLIC_APPWRITE_PROJECT) {
    throw new Error('Missing Appwrite project configuration');
  }
  if (!process.env.NEXT_APPWRITE_KEY) {
    throw new Error('Missing Appwrite API key configuration');
  }

  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT)
    .setKey(process.env.NEXT_APPWRITE_KEY);

  return {
    get account() {
      return new Account(client);
    },
    get database() {
      return new Databases(client);
    },
    get user() {
      return new Users(client);
    }
  };
}