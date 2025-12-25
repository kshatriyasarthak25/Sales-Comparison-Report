import axios from "axios";

const API_URL =
  "http://74.225.26.105:8000/salecomparison/lmtd/gsm";

const parseCurrency = (value) => {
  if (!value) return 0;
  return Number(value.replace(/₹|,/g, ""));
};

export const getData = async () => {
  const response = await axios.get(API_URL);

  if (!Array.isArray(response.data)) {
    throw new Error("Invalid API response");
  }

  return response.data.map((item) => ({
    branch: item.branch,
    zone: item.zone_name,
    lmtdVal: parseCurrency(item.total_lmtd_value),
    mtdVal: parseCurrency(item.total_mtd_value),
    valGrowth: Number(item.total_value_growth) || 0,
    volGrowth: Number(item.total_volume_growth) || 0
  }));
};
