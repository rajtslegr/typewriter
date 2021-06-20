import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/ui/Button';
import Error from '../components/ui/Error';
import { useAuth } from '../contexts/Auth';
import { getGames } from '../lib/supabase';
import { definitions } from '../types/supabase';

const Dashboard: React.FC = () => {
  const { user, profile } = useAuth();
  const [games, setGames] = useState<definitions['games'][] | undefined | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);

  const history = useHistory();

  useEffect(() => {
    getGamesDash();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const getGamesDash = async (): Promise<void> => {
    try {
      setGames(await getGames(user));
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col w-full space-y-4">
      <div className="flex flex-row justify-between">
        <h1 className="text-4xl">Welcome, {profile?.username}!</h1>
        <Button onClick={() => history.push('/game')} variant="dark">
          Let&apos;s play!
        </Button>
      </div>
      {error && <Error>{error}</Error>}
      {games && (
        // TODO: Components!
        <table className="min-w-full divide-y divide-gray-500">
          <thead className="bg-gray-900">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-200 uppercase"
              >
                Words
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-200 uppercase"
              >
                Errors
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-200 uppercase"
              >
                WPM
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-200 uppercase"
              >
                Accuracy
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-200 uppercase"
              >
                Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-700 divide-y divide-gray-500">
            {games?.map((game) => {
              return (
                <tr key={game.id}>
                  <td className="px-6 py-2 whitespace-nowrap">{game.words}</td>
                  <td className="px-6 py-2 whitespace-nowrap">{game.errors}</td>
                  <td className="px-6 py-2 whitespace-nowrap">{game.wpm}</td>
                  <td className="px-6 py-2 whitespace-nowrap">
                    {game.accuracy} %
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap">
                    {format(new Date(game.insterted_at), 'dd.MM.yyy')}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;
