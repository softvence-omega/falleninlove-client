
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

// Types for better maintainability
  interface ChartDataPoint {
  month: string;
  value: number;
}

 interface PolicyCategoryData {
  category: string;
  readRate: number;
  color: string;
}

// Custom Line Chart Component
 const LineChart: React.FC<{ data: ChartDataPoint[] }> = ({ data }) => {
  const svgWidth = 650;
  const svgHeight = 450;
  const padding = 50;
  const chartWidth = svgWidth - padding * 2;
  const chartHeight = svgHeight - padding * 2;

  // Calculate points for the line
  const points = data.map((point, index) => {
    const x = padding + (index / (data.length - 1)) * chartWidth;
    const y = padding + chartHeight - (point.value / 100) * chartHeight;
    return { x, y, value: point.value };
  });

  // Create path for filled area
  const pathData = `M ${points[0].x} ${chartHeight + padding} L ${points.map(p => `${p.x} ${p.y}`).join(' L ')} L ${points[points.length - 1].x} ${chartHeight + padding} Z`;
  
  // Create path for line
  const lineData = `M ${points.map(p => `${p.x} ${p.y}`).join(' L ')}`;

  return (
    <div className="w-full">
      <svg width="100%" height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
        {/* Grid lines */}
        {[0, 20, 40, 60, 80, 100].map(value => {
          const y = padding + chartHeight - (value / 100) * chartHeight;
          return (
            <g key={value}>
              <line
                x1={padding}
                y1={y}
                x2={svgWidth - padding}
                y2={y}
                stroke="#f1f5f9"
                strokeWidth="1"
              />
              <text
                x={padding - 10}
                y={y + 4}
                fontSize="12"
                fill="#64748b"
                textAnchor="end"
              >
                {value}
              </text>
            </g>
          );
        })}

        {/* Filled area */}
        <path
          d={pathData}
          fill="url(#blueGradient)"
          opacity="0.6"
        />

        {/* Line */}
        <path
          d={lineData}
          stroke="#3b82f6"
          strokeWidth="2"
          fill="none"
        />

        {/* Points */}
        {points.map((point, index) => (
          <circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="4"
            fill="#3b82f6"
            stroke="white"
            strokeWidth="2"
          />
        ))}

        {/* X-axis labels */}
        {data.map((point, index) => {
          const x = padding + (index / (data.length - 1)) * chartWidth;
          return (
            <text
              key={point.month}
              x={x}
              y={svgHeight - 10}
              fontSize="12"
              fill="#64748b"
              textAnchor="middle"
            >
              {point.month}
            </text>
          );
        })}

        {/* Y-axis label */}
        <text
          x={20}
          y={svgHeight / 2}
          fontSize="14"
          fill="#64748b"
          textAnchor="middle"
          transform={`rotate(-90, 20, ${svgHeight / 2})`}
        >
          Completion Rate (%)
        </text>

        {/* X-axis label */}
        <text
          x={svgWidth / 2}
          y={svgHeight - 5}
          fontSize="12"
          fill="#64748b"
          textAnchor="middle"
        >
          Month
        </text>

        {/* Gradient definition */}
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

// Custom Bar Chart Component
 const BarChart: React.FC<{ data: PolicyCategoryData[] }> = ({ data }) => {
  const svgWidth = 650;
  const svgHeight = 450;
  const padding = 50;
  const chartWidth = svgWidth - padding * 2;
  const chartHeight = svgHeight - padding * 2;
  const barWidth = chartWidth / data.length * 0.6;
  const barSpacing = chartWidth / data.length;

  return (
    <div className="w-full">
      <svg width="100%" height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
        {/* Grid lines */}
        {[0, 20, 40, 60, 80, 100].map(value => {
          const y = padding + chartHeight - (value / 100) * chartHeight;
          return (
            <g key={value}>
              <line
                x1={padding}
                y1={y}
                x2={svgWidth - padding}
                y2={y}
                stroke="#f1f5f9"
                strokeWidth="1"
              />
              <text
                x={padding - 10}
                y={y + 4}
                fontSize="12"
                fill="#64748b"
                textAnchor="end"
              >
                {value}
              </text>
            </g>
          );
        })}

        {/* Bars */}
        {data.map((item, index) => {
          const barHeight = (item.readRate / 100) * chartHeight;
          const x = padding + index * barSpacing + (barSpacing - barWidth) / 2;
          const y = padding + chartHeight - barHeight;

          return (
            <g key={item.category}>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                fill={item.color}
                rx="2"
              />
            </g>
          );
        })}

        {/* X-axis labels */}
        {data.map((item, index) => {
          const x = padding + index * barSpacing + barSpacing / 2;
          return (
            <text
              key={item.category}
              x={x}
              y={svgHeight - 10}
              fontSize="12"
              fill="#64748b"
              textAnchor="middle"
            >
              {item.category}
            </text>
          );
        })}

        {/* Y-axis label */}
        <text
          x={20}
          y={svgHeight / 2}
          fontSize="14"
          fill="#64748b"
          textAnchor="middle"
          transform={`rotate(-90, 20, ${svgHeight / 2})`}
        >
          Read Rate (%)
        </text>

        {/* X-axis label */}
        <text
          x={svgWidth / 2}
          y={svgHeight - 5}
          fontSize="12"
          fill="#64748b"
          textAnchor="middle"
        >
          Policy Category
        </text>
      </svg>
    </div>
  );
};

export default function AdminCharts() {
  // Line chart data
  const inductionData: ChartDataPoint[] = [
    { month: "Jan", value: 0 },
    { month: "Feb", value: 35 },
    { month: "March", value: 68 },
    { month: "April", value: 97 },
    { month: "May", value: 82 },
    { month: "June", value: 96 },
  ];

  // Bar chart data
  const policyData: PolicyCategoryData[] = [
    { category: "Safety", readRate: 75, color: "#34A996" },
    { category: "HR", readRate: 65, color: "#CF857A" },
    { category: "Clinical", readRate: 95, color: "#505B72" },
    { category: "Compliance", readRate: 60, color: "#52E078" },
    { category: "Operations", readRate: 90, color: "#A22626" },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-sm bg-white border border-amber-400">
          <CardContent className="p-3">
            <div className="flex flex-col items-center mb-4">
              <h2 className="font-semibold text-lg text-gray-900">Induction Completion Trend</h2>
              <p className="text-sm text-gray-500">Induction Completion rate (%)</p>
            </div>
            <LineChart data={inductionData} />
          </CardContent>
        </Card>

        <Card className="shadow-sm bg-white border-amber-400">
          <CardContent className="p-3">
            <div className="flex flex-col items-center mb-4">
              <h2 className="font-semibold text-lg text-gray-900">Policy Read Rate by Category</h2>
              <p className="text-sm text-gray-500">Policy Read rate (%)</p>
            </div>
            <BarChart data={policyData} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}