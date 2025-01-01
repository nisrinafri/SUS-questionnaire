import React from "react";
import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  mainContainerStyle,
  headerStyle,
  mainTitleStyle,
  subtitleStyle,
  scoreCardStyle,
  scoreStyle,
  gradeStyle,
  chartContainerStyle,
  chartCardStyle,
  tooltipStyle,
  CHART_COLORS,
  cardStyle,
} from "./CardStyles";

const App = () => {
  // Data SUS Score
  const susScore = {
    score: 88.91,
    grade: "A",
  };

  // Data demografis usia
  const ageData = [
    { name: "17 - 25 tahun", value: 89 },
    { name: "26 - 30 tahun", value: 3 },
    { name: "> 30 tahun", value: 11 },
  ];

  // Data status
  const statusData = [
    { name: "Mahasiswa", value: 70 },
    { name: "Bekerja", value: 22 },
    { name: "Belum Bekerja", value: 11 },
  ];

  // Data pertanyaan SUS
  const questions = [
    {
      id: "P1",
      question: "Akan menggunakan website kembali",
      score: 4.15,
      category: "Penggunaan Kembali",
      type: "Positif",
    },
    {
      id: "P2",
      question: "Website rumit untuk digunakan",
      score: 3.72,
      category: "Kemudahan Penggunaan",
      type: "Negatif",
    },
    {
      id: "P3",
      question: "Website mudah digunakan",
      score: 4.64,
      category: "Kemudahan Penggunaan",
      type: "Positif",
    },
    {
      id: "P4",
      question: "Membutuhkan bantuan teknis",
      score: 3.68,
      category: "Bantuan & Dukungan",
      type: "Negatif",
    },
    {
      id: "P5",
      question: "Fitur berjalan dengan semestinya",
      score: 4.58,
      category: "Fungsionalitas",
      type: "Positif",
    },
    {
      id: "P6",
      question: "Banyak hal yang tidak konsisten",
      score: 3.52,
      category: "Konsistensi",
      type: "Negatif",
    },
    {
      id: "P7",
      question: "Mudah dipahami orang lain",
      score: 4.63,
      category: "Kemudahan Pembelajaran",
      type: "Positif",
    },
    {
      id: "P8",
      question: "Website membingungkan",
      score: 3.52,
      category: "Kejelasan",
      type: "Negatif",
    },
    {
      id: "P9",
      question: "Tidak ada hambatan penggunaan",
      score: 4.58,
      category: "Aksesibilitas",
      type: "Positif",
    },
    {
      id: "P10",
      question: "Perlu adaptasi sebelum menggunakan",
      score: 3.53,
      category: "Pembelajaran",
      type: "Negatif",
    },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div style={tooltipStyle}>
          <p style={{ margin: "0 0 5px 0", fontWeight: "500" }}>
            {data.question || data.name}
          </p>
          <p style={{ margin: "0", color: "#94a3b8" }}>
            {`Score: ${data.score || data.value}`}
          </p>
          {data.type && (
            <p
              style={{
                margin: "5px 0 0 0",
                color:
                  data.type === "Positif"
                    ? CHART_COLORS.positive
                    : CHART_COLORS.negative,
              }}
            >
              {`Type: ${data.type}`}
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div style={mainContainerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <h1 style={mainTitleStyle}>Analisis SUS Score</h1>
        <p style={subtitleStyle}>System Usability Scale Analysis Dashboard</p>
      </div>

      {/* Main Score Card */}
      <div style={scoreCardStyle}>
        <h2>Overall SUS Score</h2>
        <div style={scoreStyle}>{susScore.score}</div>
        <div style={gradeStyle}>Grade {susScore.grade}</div>
      </div>

      {/* Charts Container */}
      <div style={chartContainerStyle}>
        {/* Age Distribution */}
        <div style={chartCardStyle}>
          <h2>Distribusi Usia</h2>
          <div style={{ height: "300px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={ageData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {ageData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        CHART_COLORS.pieColors[
                          index % CHART_COLORS.pieColors.length
                        ]
                      }
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Status Distribution */}
        <div style={chartCardStyle}>
          <h2>Distribusi Status</h2>
          <div style={{ height: "300px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {statusData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        CHART_COLORS.pieColors[
                          index % CHART_COLORS.pieColors.length
                        ]
                      }
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Questions Analysis */}
      <div style={cardStyle}>
        <h2>Analisis Pertanyaan</h2>
        <div style={{ height: "400px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={questions}
              margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.1)"
              />
              <XAxis
                dataKey="id"
                angle={0}
                interval={0}
                tick={{ fontSize: 12, fill: "#94a3b8" }}
              />
              <YAxis domain={[0, 5]} tick={{ fontSize: 12, fill: "#94a3b8" }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                wrapperStyle={{
                  color: "#94a3b8",
                }}
                iconType="circle"
                formatter={(value) => (
                  <span style={{ color: "#e2e8f0" }}>{value}</span>
                )}
                payload={[
                  {
                    value: "Score",
                    type: "circle",
                    color: "#60a5fa", // Menggunakan warna biru yang sama dengan bar positif
                  },
                ]}
              />
              <Bar dataKey="score" name="Skor">
                {questions.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.type === "Positif" ? "#60a5fa" : "#f59e0b"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Summary */}
      <div style={cardStyle}>
        <h2>Kesimpulan Analisis</h2>
        <div style={{ color: "#94a3b8" }}>
          <p style={{ marginBottom: "15px" }}>
            Berdasarkan hasil analisis SUS Score yang mencapai {susScore.score}{" "}
            (Grade {susScore.grade}), website ini memiliki tingkat usability
            yang sangat baik.
          </p>
          <ul style={{ paddingLeft: "20px" }}>
            <li style={{ marginBottom: "10px" }}>
              Mayoritas responden (86%) berusia 17-25 tahun
            </li>
            <li style={{ marginBottom: "10px" }}>
              68% responden adalah mahasiswa
            </li>
            <li style={{ marginBottom: "10px" }}>
              Skor tertinggi pada aspek kemudahan penggunaan (4.64/5)
            </li>
            <li style={{ marginBottom: "10px" }}>
              Semua aspek penilaian mendapat skor di atas rata-rata
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
