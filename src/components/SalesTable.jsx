import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography
} from "@mui/material";

const SalesTable = ({ data }) => {
  return (
    <>
    <Typography variant="h6" align="center" fontWeight="bold">
      Branch wise Sales Table
    </Typography>
    <TableContainer component={Paper} sx={{maxHeight: 420, overflow: "auto"}} >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Branch</TableCell>
            <TableCell>Zone</TableCell>
            <TableCell align="right">LMTD (₹)</TableCell>
            <TableCell align="right">MTD (₹)</TableCell>
            <TableCell align="right">Value Growth (%)</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.branch}</TableCell>
              <TableCell>{item.zone}</TableCell>
              <TableCell align="right">
                {(Number(item.lmtdVal) || 0).toLocaleString("en-IN")}
              </TableCell>
              <TableCell align="right">
                {(Number(item.mtdVal) || 0).toLocaleString("en-IN")}
              </TableCell>
              <TableCell align="right">
                {item.valGrowth}%
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default SalesTable;
