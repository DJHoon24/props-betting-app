import NBATable from './components/NBATable';
import Player from './models/Player';

const playersData: Player[] = [
  new Player(1, "/path/to/player-image1.jpg", "Player One", "Points Per Game", "20, 22, 18, 21, 19", "22, 20, 21, 19, 18, 17, 23, 20, 19, 21, 22, 23, 20, 19, 18", "21.2", "Team A", "-105"),
  // Add more Player objects as needed
];

export default function Home() {
  return (
    <div>
      <NBATable players={playersData}/>
    </div>
  );
}
