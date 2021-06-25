import { createClient, User } from '@supabase/supabase-js';
import { definitions } from '../types/supabase';

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_ANON_KEY as string,
  { autoRefreshToken: true },
);

const getProfile = async (
  user: User | null | undefined,
): Promise<definitions['profiles'] | null | undefined> => {
  if (user) {
    const { data } = await supabase
      .from<definitions['profiles']>('profiles')
      .select(`username`)
      .eq('id', user?.id)
      .single();

    return data;
  }
};

const upsertProfile = async (
  id?: string,
  username?: string,
): Promise<unknown | undefined> => {
  const updates = {
    id,
    username,
    updated_at: new Date(),
  };

  const { data } = await supabase.from('profiles').upsert(updates, {
    returning: 'minimal',
  });

  return data;
};

const getGames = async (
  user: User | null | undefined,
): Promise<definitions['games'][] | null | undefined> => {
  if (user) {
    const { data } = await supabase
      .from<definitions['games']>('games')
      .select('*')
      .eq('user', user?.id);

    return data;
  }
};

const insertGame = async (
  user: string | undefined,
  words: number,
  errors: number,
  wpm: number,
  accuracy: string,
): Promise<unknown | undefined> => {
  const updates = {
    user,
    words,
    errors,
    wpm,
    accuracy,
  };

  const { data } = await supabase.from('games').insert(updates, {
    returning: 'minimal',
  });

  return data;
};

export { getProfile, upsertProfile, insertGame, getGames };
