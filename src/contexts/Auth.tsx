import {
  createContext,
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { User } from '@supabase/supabase-js';

import { getProfile, supabase } from '../lib/supabase';
import { definitions } from '../types/supabase';

interface Props {
  children: ReactElement;
}

interface AuthContextType {
  refreshProfile: () => void;
  user: User | null | undefined;
  profile: definitions['profiles'] | null | undefined;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>();
  const [profile, setProfile] = useState<AuthContextType['profile'] | null>();
  const [loading, setLoading] = useState(true);

  const refreshProfile = useCallback(async (): Promise<void> => {
    setProfile(await getProfile(user));
  }, [user]);

  useEffect(() => {
    const userSession = supabase.auth.session();

    setUser(userSession?.user ?? null);
    refreshProfile();
    setLoading(false);

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      },
    );

    return () => {
      listener?.unsubscribe();
    };
  }, [user, refreshProfile]);

  const value = {
    refreshProfile,
    user,
    profile,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  return useContext(AuthContext);
};

export default AuthProvider;
