import { Box, Paper, Typography } from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const COLORS = ["#1976d2", "#2e7d32", "#ed6c02", "#9c27b0"];

const SalesPieChart = ({ data }) => {
  const zoneData = Object.values(
    data.reduce((acc, curr) => {
      acc[curr.zone] = acc[curr.zone] || {
        name: curr.zone,
        value: 0
      };
      acc[curr.zone].value += curr.mtdVal;
      return acc;
    }, {})
  );

  return (
    <Paper elevation={2}>
      <Box p={3}>
        <Typography variant="h6">
          Zone-wise MTD Sales Distribution
        </Typography>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={zoneData}
              dataKey="value"
              nameKey="name"
              outerRadius={90}
              label
            >
              {zoneData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default SalesPieChart;
