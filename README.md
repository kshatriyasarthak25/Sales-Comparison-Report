# 📊 Sales Comparison Report

It is React-based frontend application that visualizes branch-wise sales performance using tabular data and interactive charts. The application uses a backend API to compare **LMTD vs MTD sales**, **growth percentages**, and **zone-wise distribution**.

---

## 🚀 Live Hosted URL

👉 **Frontend Application:**  
https://sales-comparison-report-two.vercel.app/

> Note: As the application depends on the backend API and if the API is temporarily unavailable, an error message will be displayed.

---

## 🛠 Tech Stack & Libraries Used

### Frontend
- **React.js** – UI development
- **Material UI (MUI)** – Layout, tables, cards, and styling
- **Recharts** – Data visualization (Bar, Line, Pie charts)
- **Axios** – HTTP client for API calls

### Tooling
- **Node.js & npm**
- **Git & GitHub**
- **Vercel** (for deployment)

---

## 📂 Project Structure
```
src/
│
├── App.js
├── index.js
│
├── services/
│ └── api.js
│
├── components/
│ ├── ReportHeader.jsx
│ ├── SalesTable.jsx
│ └── Charts/
│ ├── SalesBarChart.jsx
│ ├── SalesGrowthChart.jsx
│ ├── SalesPieChart.jsx
│ └── VolumeGrowthChart.jsx
│
└── assets/
src/
│
├── App.js
├── index.js
│
├── services/
│ └── api.js
│
├── components/
│ ├── ReportHeader.jsx
│ ├── SalesTable.jsx
│ └── Charts/
│ ├── SalesBarChart.jsx
│ ├── SalesGrowthChart.jsx
│ ├── SalesPieChart.jsx
│ └── VolumeGrowthChart.jsx
│
└── assets/
src/
│
├── App.js
├── index.js
│
├── services/
│ └── api.js
│
├── components/
│ ├── ReportHeader.jsx
│ ├── SalesTable.jsx
│ └── Charts/
│ ├── SalesBarChart.jsx
│ ├── SalesGrowthChart.jsx
│ ├── SalesPieChart.jsx
│ └── VolumeGrowthChart.jsx
│
└── assets/
```
---

## 📈 Application Features & Report Explanation

### 🧾 Sales Comparison Table
- It displays branch-wise sales data in a structured format
- Columns include Branch, Zone, LMTD value (in ₹), MTD value (in ₹), and Value Growth (in %)
- It is scrollable table with sticky headers for improved readability when handling large datasets

### 📊 Charts Included

1. **LMTD vs MTD Sales Bar Chart**
   - It compares Last Month to Date (LMTD) sales with current Month to Date (MTD) sales
   - Which helps to quickly identify performance improvement or decline across branches

2. **Sales Value Growth Chart (in %)**
   - It displays percentage growth or drop in sales value
   - Also supports both positive and negative values
   - Uses color coding to clearly differentiate growth and decline

3. **Zone-wise MTD Sales Distribution (Pie Chart)**
   - It represents contribution of each zone to total MTD sales
   - Which helps to understand regional sales distribution and high-performing zones

4. **Volume Growth Comparison Chart**
   - It visualizes growth or decline in sales volume
   - Which is useful for identifying demand trends and volume-based performance

---

## ⚠️ Error Handling
- If the backend API is unavailable, the application displays a clear and user-friendly error message



