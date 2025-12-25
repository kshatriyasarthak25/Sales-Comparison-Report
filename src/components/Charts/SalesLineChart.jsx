import { Box, Paper, Typography } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
  Cell
} from "recharts";

const SalesLineChart = ({ data }) => (
  <Paper elevation={2}>
    <Box p={3}>
      <Typography variant="h6">
        Sales Value Growth (in %)
      </Typography>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="branch" hide />
          <YAxis />
          <Tooltip formatter={(v) => `${v}%`} />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="valGrowth">
            {data.map((d, i) => (
              <Cell
                key={i}
                fill={d.valGrowth >= 0 ? "#2e7d32" : "#d32f2f"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  </Paper>
);

export default SalesLineChart;
