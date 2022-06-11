import { createClient, User } from '@supabase/supabase-js';

import { definitions } from '../types/supabase';

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_ANON_KEY as string,
  { autoRefreshToken: true },
);

export const getProfile = async (
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
  return undefined;
};

export const upsertProfile = async (
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

export const getGames = async (
  user: User | null | undefined,
  page: number,
): Promise<definitions['games'][] | null | undefined> => {
  if (user) {
    const pageSize = 10;
    let [start, end] = [0, 9];

    if (page > 0) {
      start = page * pageSize;
      end = (page + 1) * pageSize - 1;
    }

    const { data } = await supabase
      .from<definitions['games']>('games')
      .select('*')
      .range(start, end)
      .order('insterted_at', { ascending: false })
      .eq('user', user?.id);

    return data;
  }
  return undefined;
};

export const insertGame = async (
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
