import { useCallback, useEffect, useState } from 'react';

import { useAuth } from '../contexts/Auth';
import { getGames } from '../lib/supabase';
import { definitions } from '../types/supabase';

const useGamesDash = () => {
  const { user, profile } = useAuth();
  const [page, setPage] = useState(0);
  const [games, setGames] = useState<definitions['games'][] | undefined | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);

  const getGamesDash = useCallback(async (): Promise<void> => {
    try {
      setGames(await getGames(user, page));
    } catch (e) {
      const err = e as Error;
      setError(err.message);
    }
  }, [page, user]);

  useEffect(() => {
    getGamesDash();
  }, [getGamesDash]);

  return {
    profile,
    page,
    setPage,
    games,
    setGames,
    error,
  };
};

export default useGamesDash;
