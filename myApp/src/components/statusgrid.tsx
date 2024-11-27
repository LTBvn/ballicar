import React from "react";

const StatusGrid: React.FC = () => {
  const statuses = [
    { icon: "🏁", label: "Traveled" },
    { icon: "🌡️", label: "Temperature" },
    { icon: "🔋", label: "Battery" },
    { icon: "⛽", label: "Gas" },
    { icon: "🛢️", label: "Oil change" },
    { icon: "💧", label: "Coolant level" },
  ];

  return (
    <div className="status-grid">
      {statuses.map((status, index) => (
        <div key={index} className="status-item">
          <div className="status-icon">{status.icon}</div>
          <div className="status-label">{status.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatusGrid;
