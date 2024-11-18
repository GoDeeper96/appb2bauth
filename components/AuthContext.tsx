import React, { createContext, PropsWithChildren, useContext, useState } from 'react'
import * as SecureStore from 'expo-secure-store'
import { View } from 'react-native';
import axios from 'axios';
import { ApiRoutes } from '@/routes/PRIVATE_ROUTES';

interface AuthProps {
    authState?:{token:string | null;authenticated:boolean|null}
    // onRegister?:(email:string,password:string)=>Promise<any>;
    onLogin?:(usuario:string,contraseña:string)=>Promise<any>;
    onLogout?:()=>Promise<any>;
}
const AuthContext = createContext<AuthProps>({})
const token = process.env.EXPO_PUBLIC_TOKEN || ''
export const useAuth = ()=>{
    return useContext(AuthContext)
}

export default function AuthProvider({children}:PropsWithChildren) {
  const [authState,setAuthState] = useState<{
    token:string|null;
    authenticated:boolean|null;
  }>({
    token:null,
    authenticated:null,
  })
  const Login = async(usuario:string,contraseña:string)=>{
    try {
        const res = await axios.post(`${process.env.EXPO_PUBLI_API_URL}${ApiRoutes.LOGIN}`,{usuario,contraseña})
        setAuthState({
            token:res.data.token,
            authenticated:true
        })
        axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`
        await SecureStore.setItemAsync(token,res.data.token)
        return res;
    } catch (error) {
        console.log(error)
    }
  }
  const Logout = async()=>{
    await SecureStore.deleteItemAsync(token)
    axios.defaults.headers.common['Authorization'] = ''
    setAuthState({
        token:null,
        authenticated:false
    })
  }
  const value = {
    onLogin:Login,
    onLogout:Logout
  }
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}
