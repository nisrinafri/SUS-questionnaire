export const cardStyle = {
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(10px)",
  borderRadius: "15px",
  padding: "25px",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  marginBottom: "30px",
};

export const mainContainerStyle = {
  padding: "30px",
  maxWidth: "1200px",
  margin: "0 auto",
  minHeight: "100vh",
};

export const headerStyle = {
  textAlign: "center",
  marginBottom: "40px",
};

export const mainTitleStyle = {
  fontSize: "3rem",
  background: "linear-gradient(45deg, #60a5fa, #34d399)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  color: "transparent",
  marginBottom: "10px",
};

export const subtitleStyle = {
  fontSize: "1.2rem",
  color: "#94a3b8",
};

export const scoreCardStyle = {
  ...cardStyle,
  textAlign: "center",
};

export const scoreStyle = {
  fontSize: "4rem",
  fontWeight: "bold",
  background: "linear-gradient(45deg, #3b82f6, #2dd4bf)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  color: "transparent",
  marginBottom: "10px",
};

export const gradeStyle = {
  fontSize: "1.8rem",
  color: "#34d399",
  fontWeight: "600",
};

export const chartContainerStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "25px",
  marginBottom: "30px",
};

export const chartCardStyle = {
  ...cardStyle,
  height: "400px",
};

export const tooltipStyle = {
  background: "rgba(15, 23, 42, 0.9)",
  padding: "12px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: "8px",
  color: "#f1f5f9",
};

export const CHART_COLORS = {
  positive: "#60a5fa", // Biru untuk pertanyaan positif
  negative: "#f59e0b", // Orange untuk pertanyaan negatif
  pieColors: ["#60a5fa", "#34d399", "#f59e0b", "#f43f5e", "#8b5cf6"],
};
