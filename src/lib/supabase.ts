import { createClient, User } from '@supabase/supabase-js';
import { definitions } from '../types/supabase';

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_ANON_KEY as string,
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getProfile = async (
  user: User | null | undefined,
): Promise<definitions['profiles'] | undefined | null> => {
  if (user) {
    const { data } = await supabase
      .from<definitions['profiles']>('profiles')
      .select(`username`)
      .eq('id', user?.id)
      .single();

    return data;
  }
};

const upsertProfile = async (id?: string, username?: string): Promise<void> => {
  const updates = {
    id,
    username,
    updated_at: new Date(),
  };

  await supabase.from('profiles').upsert(updates, {
    returning: 'minimal',
  });
};

const getGames = async (
  user: User | null | undefined,
): Promise<definitions['games'][] | undefined | null> => {
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
): Promise<void> => {
  const updates = {
    user,
    words,
    errors,
    wpm,
    accuracy,
  };

  await supabase.from('games').insert(updates, {
    returning: 'minimal',
  });
};

export { getProfile, upsertProfile, insertGame, getGames };
