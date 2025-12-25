import { useEffect, useState } from "react";
import { Box, CircularProgress, Alert } from "@mui/material";
import { getData } from "./services/api";
import ReportHeader from "./components/ReportHeader";
import SalesTable from "./components/SalesTable";
import SalesBarChart from "./components/Charts/SalesBarChart";
import SalesGrowthChart from "./components/Charts/SalesLineChart";
import SalesPieChart from "./components/Charts/SalesPieChart";
import GrowthBarChart from "./components/Charts/GrowthBarChart";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getData()
      .then(setData)
      .catch(() => setError("Failed to fetch data"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={6}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box maxWidth={1200} mx="auto" mt={6}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <Box maxWidth={1200} mx="auto" px={3} py={4}>
      <ReportHeader />

      <Box mt={6}>
        <SalesTable data={data} />
      </Box>

      <Box
        mt={8}
        display="grid"
        gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
        gap={4}
      >
        <SalesBarChart data={data} />
        <SalesGrowthChart data={data} />
        <SalesPieChart data={data} />
        <GrowthBarChart data={data} />
      </Box>
    </Box>
  );
}

export default App;