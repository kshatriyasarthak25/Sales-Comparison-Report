import { Box, Paper, Typography } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const SalesBarChart = ({ data }) => (
  <Paper elevation={2}>
    <Box p={3}>
      <Typography variant="h6">
        LMTD vs MTD Sales Value
      </Typography>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} barGap={8}>
          <XAxis dataKey="branch" hide />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="lmtdVal" fill="#1976d2" />
          <Bar dataKey="mtdVal" fill="#ed6c02" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  </Paper>
);

export default SalesBarChart;
