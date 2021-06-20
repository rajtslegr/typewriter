import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/ui/Button';
import Error from '../components/ui/Error';
import { Table, TBody, Td, Th, THead } from '../components/ui/Table';
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
        <Table>
          <THead>
            <tr>
              <Th>Words</Th>
              <Th>Errors</Th>
              <Th>WPM</Th>
              <Th>Accuracy</Th>
              <Th>Date</Th>
            </tr>
          </THead>
          <TBody>
            {games?.map((game) => {
              return (
                <tr key={game.id}>
                  <Td>{game.words}</Td>
                  <Td>{game.errors}</Td>
                  <Td>{game.wpm}</Td>
                  <Td>{game.accuracy} %</Td>
                  <Td>{format(new Date(game.insterted_at), 'dd.MM.yyy')}</Td>
                </tr>
              );
            })}
          </TBody>
        </Table>
      )}
    </div>
  );
};

export default Dashboard;
