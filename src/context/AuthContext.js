import React, { createContext, useState, useContext, useEffect } from "react";
import supabase from "../supabaseClient";

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (user) => setUser(user);
  const logout = () => {
    supabase.auth.signOut();
    setUser(null);
  };

  useEffect(() => {
    supabase.auth.getSession().then(({data: {session}}) => {
      setUser(session?.user ?? null);
    });

    const {data: listener} = supabase.auth.onAuthStateChange((_, session) => {
     setUser(session?.user ?? null); 
    })

    return () => {
      listener.subscription.unsubscribe();
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};