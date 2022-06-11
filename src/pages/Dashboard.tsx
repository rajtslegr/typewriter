import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

import Button from '../components/ui/Button';
import Error from '../components/ui/Error';
import Loader from '../components/ui/Loader';
import { Table, TBody, Td, Th, THead } from '../components/ui/Table';
import useGamesDash from '../hooks/useGameDash';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { profile, page, setPage, games, error } = useGamesDash();

  if (!games && !error) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col space-y-4 w-full">
      <div className="flex flex-row justify-between">
        <h1 className="text-4xl">
          Welcome{profile?.username && <>, {profile?.username}</>}!
        </h1>
        <Button onClick={() => navigate('/game')} variant="dark">
          Let&apos;s play!
        </Button>
      </div>
      {error && <Error>{error}</Error>}
      {games && games.length > 0 && (
        <Table>
          <THead>
            <tr>
              <Th>Date</Th>
              <Th>Words</Th>
              <Th>Errors</Th>
              <Th>WPM</Th>
              <Th>Accuracy</Th>
            </tr>
          </THead>
          <TBody>
            {games?.map((game) => {
              return (
                <tr key={game.id}>
                  <Td>{format(new Date(game.insterted_at), 'dd.MM.yyy')}</Td>
                  <Td>{game.words}</Td>
                  <Td>{game.wpm}</Td>
                  <Td>{game.errors}</Td>
                  <Td>{game.accuracy} %</Td>
                </tr>
              );
            })}
          </TBody>
        </Table>
      )}
      <div className="flex flex-row justify-end space-x-2">
        {page > 0 && (
          <Button onClick={() => setPage(page - 1)} variant="dark">
            Previous
          </Button>
        )}
        {games?.length === 10 && (
          <Button onClick={() => setPage(page + 1)} variant="dark">
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
