import { Session } from '@supabase/supabase-js';
import React, { useEffect, useState } from 'react';
import Account from './components/Account';
import Auth from './components/Auth';
import { supabase } from './supabaseClient';

const Home: React.FC = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? (
        <Auth />
      ) : (
        <Account key={session?.user?.id} session={session} />
      )}
    </div>
  );
};

export default Home;
