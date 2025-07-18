import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface RankingSmallProps {
  placement: {
    position: string;
    school: string;
    points: string;
    activities: string;
  }[];
}

export default function RankingSmall({ placement }: RankingSmallProps) {
  return (
    <Table className="w-full bg-white rounded-lg">
      <TableHeader className="text-xl">
        <TableRow>
          <TableHead>Posição</TableHead>
          <TableHead>Escola</TableHead>
          <TableHead>Pontos</TableHead>
          <TableHead className="text-right">Atividades</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-lg">
        {placement.map((item, index) => (
          <TableRow key={index}>
            <TableCell className="font-semibold">{item.position}</TableCell>
            <TableCell>{item.school}</TableCell>
            <TableCell>{item.points}</TableCell>
            <TableCell className="text-right">{item.activities}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
