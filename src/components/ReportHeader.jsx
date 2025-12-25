import { Box, Typography } from "@mui/material";

const ReportHeader = () => (
  <Box textAlign="center" mb={6}>
    <Typography variant="h4" fontWeight="bold">
      Sales Comparison Report
    </Typography>

    <Typography
      variant="body1"
      color="text.secondary"
      maxWidth={800}
      mx="auto"
      mt={1}
    >
      This report compares branch-wise sales performance using
      real-time backend data, highlighting trends and growth patterns.
    </Typography>
  </Box>
);

export default ReportHeader;
