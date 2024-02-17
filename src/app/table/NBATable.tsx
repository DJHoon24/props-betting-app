// components/NBATable.tsx
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Player from "../models/Player";

interface NBATableProps {
  players: Player[];
}

const NBATable: React.FC<NBATableProps> = ({ players }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Player Picture</TableCell>
            <TableCell>Player Name</TableCell>
            <TableCell>Prop</TableCell>
            <TableCell>Last 5 Games</TableCell>
            <TableCell>Last 15 Games</TableCell>
            <TableCell>This Season</TableCell>
            <TableCell>Team</TableCell>
            <TableCell>Book Lines</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player) => (
            <TableRow key={player.id}>
              <TableCell></TableCell>
              <TableCell>{player.name}</TableCell>
              <TableCell>{player.prop}</TableCell>
              <TableCell>{player.last5Games}</TableCell>
              <TableCell>{player.last15Games}</TableCell>
              <TableCell>{player.thisSeason}</TableCell>
              <TableCell>{player.team}</TableCell>
              <TableCell>{player.bookLines}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NBATable;
