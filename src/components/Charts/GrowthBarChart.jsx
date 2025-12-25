import { Box, Paper, Typography } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts";

const GrowthBarChart = ({ data }) => (
  <Paper elevation={2}>
    <Box p={3}>
      <Typography variant="h6">
        Volume Growth Comparison (in %)
      </Typography>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="branch" hide />
          <YAxis />
          <Tooltip formatter={(v) => `${v}%`} />
          <Bar dataKey="volGrowth">
            {data.map((d, i) => (
              <Cell
                key={i}
                fill={d.volGrowth >= 0 ? "#1976d2" : "#ed6c02"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  </Paper>
);

export default GrowthBarChart;
