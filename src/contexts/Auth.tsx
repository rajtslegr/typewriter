import { User } from '@supabase/supabase-js';
import React, {
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { getProfile, supabase } from '../lib/supabase';
import { definitions } from '../types/supabase';

interface Props {
  children: ReactElement;
}

interface AuthContext {
  refreshProfile: () => void;
  user: User | null | undefined;
  profile: definitions['profiles'] | null | undefined;
}

const AuthContext = React.createContext<AuthContext>({} as AuthContext);

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>();
  const [profile, setProfile] = useState<AuthContext['profile'] | null>();
  const [loading, setLoading] = useState(true);

  const refreshProfile = useCallback(async (): Promise<void> => {
    setProfile(await getProfile(user));
  }, [user]);

  useEffect(() => {
    const session = supabase.auth.session();

    setUser(session?.user ?? null);
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

export const useAuth = (): AuthContext => {
  return useContext(AuthContext);
};

export default AuthProvider;
