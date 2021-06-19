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

export { getProfile, upsertProfile };
