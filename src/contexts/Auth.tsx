/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Provider,
  Session,
  User,
  UserCredentials,
} from '@supabase/supabase-js';
import React, { ReactElement, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface Props {
  children: ReactElement;
}

interface IAuthContext {
  signUp: (data: any) => Promise<{
    user: User | null;
    session: Session | null;
    error: Error | null;
    data: User | Session | null;
  }>;
  signIn: (data: any) => Promise<{
    session: Session | null;
    user: User | null;
    provider?: Provider | undefined;
    url?: string | null | undefined;
    error: Error | null;
    data: Session | null;
  }>;
  signOut: () => Promise<{
    error: Error | null;
  }>;
  user: User | null | undefined;
}

const AuthContext = React.createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check active sessions and sets the user
    const session = supabase.auth.session();

    setUser(session?.user ?? null);
    setLoading(false);

    // Listen for changes on auth state (logged in, signed out, etc.)
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      },
    );

    return () => {
      listener?.unsubscribe();
    };
  }, []);

  // Will be passed down to Signup, Login and Dashboard components
  const value = {
    signUp: (data: UserCredentials) => supabase.auth.signUp(data),
    signIn: (data: UserCredentials) => supabase.auth.signIn(data),
    signOut: () => supabase.auth.signOut(),
    user,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): IAuthContext => {
  return useContext(AuthContext);
};

export default AuthProvider;
